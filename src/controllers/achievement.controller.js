const {
    table_thanhtuu: AchievementModel,
    table_thanhtuu_cat: AchievementCategoryModel,
    table_thanhtuu_list: AchievementListModel
} = require('@models');

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

module.exports = {
    index,
    create,
    update
}