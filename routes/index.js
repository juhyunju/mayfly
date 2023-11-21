const express = require("express");
const router = express.Router();
const chatRoomRouter = require("./chatRoomRouter")
const messageRouter = require("./messageRouter")
router.use('/chat',chatRoomRouter)
router.use('/message',messageRouter)


module.exports = router;