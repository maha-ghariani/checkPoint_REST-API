const express = require('express')
const router = express.Router()
const { getAllUser,addUser, deleteUser, updateUser } = require('../Controller/userController')

router.get('/', getAllUser);
router.post('/', addUser);
router.delete('/', deleteUser);
router.put('/', updateUser);

module.exports = router