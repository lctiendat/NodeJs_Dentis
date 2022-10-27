const { body } = require('express-validator')

const field = [
    'id_list',
    'id_item',
    'id_cat',
    'noibat',
    'photo',
    'thumb',
    'ten',
    'title',
    'keywords',
    'description',
    'tenkhongdau',
    'gia',
    'dientich',
    'mota',
    'noidung',
    'stt',
    'hienthi',
    'ngaytao',
    'ngaysua',
    'luotxem',
    'mabn',
    'diachi',
    'dienthoai',
    'ngaysinh',
    'gioitinh'
]

const fieldInt = [
    'id_list',
    'id_item',
    'id_cat',
    'noibat',
    'gia',
    'stt',
    'ngaytao',
    'ngaysua',
    'hienthi',
    'luotxem',
    'gioitinh'
]

const create = () => {
    return field.map(item => {
        if (fieldInt.includes(item)) {
            return body(item).notEmpty().withMessage(`${item} is required`).isInt().withMessage(`${item} is not a number`)
        }
        if (item === 'ngaysinh') {
            return body(item).notEmpty().withMessage(`${item} is required`).isDate().withMessage(`${item} is not a date`)
        }
        return body(item).notEmpty().withMessage(`${item} is require`)
    })
}

module.exports = {
    create
}