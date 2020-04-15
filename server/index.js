const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public/'));

const http = require('http').createServer(app)
const io = require('socket.io')(http)

let msgs = []
let users = []

io.on('connection', socket => {
  let id

  let sendUsers = () => {
    socket.emit('users', users)
    socket.broadcast.emit('users', users)
  }
  let sendMsgs = () => {
    socket.emit('msgs', msgs)
    socket.broadcast.emit('msgs', msgs)
  }

  socket.on('msg', data => {
    msgs.push(data)
    socket.broadcast.emit('msg', data)
  })

  socket.on('msgs:update', data => {
    msgs = data
  })	

  socket.on('user:connect', data => {
    id = data.id
    let user = users.find(user => data.id == user.id)
    if (user) user.online = true
    else {
      users.push({...data, online: true})	
    }
  })

  socket.on('users:get', data => {
    sendUsers()
  })
  socket.on('msgs:get', data => {
    sendMsgs()
  })

  socket.on('disconnect', () => {
    users.find(user => user.id == id).online = false
    sendUsers()
  })
})

const port = process.env.PORT || 3000
http.listen(port, () => console.log(`Server has been started on port ${port}`))
