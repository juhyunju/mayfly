const chatRoomDao = require('../models/chatRoomDao')

const createChatRoom = async(userId,hostId) =>{
  const chatRoom = await chatRoomDao.createChatRoom(userId,hostId)
  return chatRoom
}
const getUserChatRoom = async(id) => {
  const chatRoom = await chatRoomDao.getUserChatRoom(id)
  return chatRoom
}

module.exports = {
  createChatRoom,
  getUserChatRoom
}