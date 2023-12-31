const chatRoomService = require('../services/chatRoomService')

const createChatRoom = async(req,res) =>{
  const {userId,hostId} = req.body
  console.log(userId,hostId)
  try{
    await chatRoomService.createChatRoom(userId,hostId)
    res.status(200).json({message:"채팅방이 생성되었습니다."})
    
  }catch(err){
    res.status(500).json({message: "no"})
  }
}
const getUserChatRoom = async(req,res) => {
  const id = req.users.id
  try{
    const room = await chatRoomService.getUserChatRoom(id)
    res.status(200).json({room})
  }catch(err){
    res.status(500).json({message: "nope"})
  }
}

const getChatRoom = async(req,res) => {
  const id = req.hosts.id
  try{
    const room = await chatRoomService.getChatRoom(id)
    res.status(200).json({room})
  }catch(err){
    res.status(500).json({message:"nope"})
    console.log(err)
  }
}
const getChat = async(req,res) => {
  const id = req.params.id
  try{
    const room = await chatRoomService.getChat(id)
    res.status(200).json({room})
  }catch(err){
    res.status(500).json({message: "nope"})
  }
}

module.exports = {
  createChatRoom,getUserChatRoom,getChatRoom,getChat
}