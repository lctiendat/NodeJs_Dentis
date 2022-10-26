const {
    table_thanhtuu: AchievementModel,
    table_thanhtuu_cat: AchievementCategoryModel,
    table_thanhtuu_list: AchievementListModel
} = require('@models');
const FCM = require('fcm-node');

const index = async (req, res) => {
    let { limit, page, search } = req.query;
    limit = limit || 10;
    page = page || 1;
    search = search || '';
    try {
        const countDocs = await AchievementModel.count();
        let achievements = await AchievementModel.findAll({
            limit,
            offset: page * limit,
            order: [['id', 'DESC']],
        });

        sendNotification('index')

        achievements = await Promise.all(achievements.map(async (achievement) => {
            const achievementCategory = await AchievementCategoryModel.findByPk(achievement.id_cat);
            const achievementList = await AchievementListModel.findByPk(achievement.id_list);
            return {
                ...achievement.dataValues,
                id_cat: achievementCategory || 0,
                id_list: achievementList || 0,
            }
        }))

        return res.status(200).json({
            success: true,
            data: {
                docs: achievements,
                total: countDocs,
                limit,
                page,
                pages: Math.ceil(countDocs / limit) || 0,
            },
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const create = async (req, res) => {
    try {
        const achievement = await AchievementModel.create(req.body);

        sendNotification('create')
        return res.status(201).json({
            success: true,
            data: achievement,
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const achievement = await AchievementModel.findByPk(id);
        if (!achievement) {
            return res.status(404).json({
                success: false,
                message: 'Not found achievement',
            });
        }
        await achievement.update(req.body);

        sendNotification('update')
        return res.status(200).json({
            success: true,
            data: achievement,
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const sendNotification = async (type) => {
    const registerDevives = ['euFllA9Iy0Atl5XlGJZlYq:APA91bFuJWr4p-snBTkYHlopZy7hxxw1s6asQCEL7fdy_DnK2k-rn3vWFd1wA3Jyhj0-kHKlpyYAu-FSv5W6OSRMsN3rMJ2ghwxXabcS9kR5FPYSU8RJ0rgo62PWIfpWXSsW1e82Y_YP', 2, 3, 4, 5];

    const chunk = 500;

    for (let i = 0; i < registerDevives.length; i += chunk) {
        const devices = registerDevives.slice(i, i + chunk);

        const serverKey = process.env.FCM_SERVER_KEY;
        const fcm = new FCM(serverKey);

        const message = {
            registration_ids: devices,
            notification: {
                title: 'New Notification',
                body: `A member has ${type === 'create' ? 'added a new' : 'update a'} achievement`,
                sound: 'default',
                click_action: 'FCM_PLUGIN_ACTIVITY',
                icon: 'fcm_push_icon',
            }
        };

        fcm.send(message, function (err, response) {
            if (err) {
                console.log('Something has gone wrong!', err);
            } else {
                console.log('Successfully sent with response: ', response);
            }
        });
    }

    // const options = {
    //     url: 'https://fcm.googleapis.com/fcm/send',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer'
    //     },
    //     body: {
    //         registration_ids: registerDevives,
    //         notification: {
    //             title: 'New Notification',
    //             body: `A member has ${type === 'add' ? 'added a new' : 'update a'} achievement`,
    //             sound: 'default',
    //             click_action: 'FCM_PLUGIN_ACTIVITY',
    //             icon: 'fcm_push_icon'
    //         }
    //     },
    //     json: true
    // }

    // request(options, (error, response, body) => {
    //     if (error) {
    //         console.log('error', error);
    //     }
    //     console.log('body', body);
    // })

}

module.exports = {
    index,
    create,
    update
}