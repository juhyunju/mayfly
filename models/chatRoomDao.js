const { appDataSource } = require("./datasource");

const createChatRoom = async(userId,hostId) =>{
  return appDataSource.query(`
  INSERT INTO chat(user_id,host_id) VALUES(${userId},${hostId})
  `)
}

const getUserChatRoom= async(id) => {
  return appDataSource.query(`
  SELECT chat.id,
  chat.user_id as user_id,
  users.name as user_name
  FROM chat
  JOIN users ON chat.user_id = users.id
  WHERE chat.user_id = ${id}
  `)
}

module.exports = {
  createChatRoom,getUserChatRoom
}