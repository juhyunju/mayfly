const express = require('express');
const router = express.Router()
const chatRoomController = require('../controller/chatRoomController')
const auth = require('../middleware/auth')

router.post('/',auth.userVerifyToken,chatRoomController.createChatRoom)
router.get('/',auth.userVerifyToken,chatRoomController.getUserChatRoom)
router.get('/host',auth.hostVerifyToken,chatRoomController.getChatRoom)
router.get('/host/:id',auth.hostVerifyToken,chatRoomController.getChat)


module.exports = router