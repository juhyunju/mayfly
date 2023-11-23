const express = require('express');
const router = express.Router()
const chatRoomController = require('../controller/chatRoomController')
const auth = require('../middleware/auth')

router.post('/',auth.userVerifyToken,chatRoomController.createChatRoom)
router.get('/',auth.userVerifyToken,chatRoomController.getUserChatRoom)


module.exports = router