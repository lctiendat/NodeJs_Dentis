const express = require('express')
const router = express.Router()
const { index, create, update } = require('@controllers/achievement.controller')

router.get('/', index)
router.post('/', create)
router.put('/:id', update)

module.exports = router