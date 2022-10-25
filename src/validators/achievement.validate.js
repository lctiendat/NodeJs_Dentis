const { body } = require('express-validator')

const field = [
    id_list,
    id_item,
    id_cat,
    noibat,
    photo,
    thumb,
    ten,
    title,
    keywords,
    description,
    tenkhongdau,
    gia,
    dientich,
    mota,
    noidung,
    stt,
    hienthi,
    ngaytao,
    ngaysua, 
    luotxem,
    mabn,
    diachi,
    dienthoai,
    ngaysinh,
    gioitinh
]

const create = () => {
    return field.map(item => {
        return body(item).notEmpty().withMessage(`${item} is require`)
    })
}

module.exports = {
    create
}