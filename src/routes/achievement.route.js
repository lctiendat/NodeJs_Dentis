const express = require('express')
const router = express.Router()
const { index, create, update } = require('@controllers/achievement.controller')
const { create: createValidate } = require('@validators/achievement.validate')

router.get('/', index)
router.post('/', createValidate(), create)
router.put('/:id', update)

module.exports = router