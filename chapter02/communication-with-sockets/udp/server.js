const dgram = require('dgram');

const socket = dgram.createSocket("udp6")

socket.bind(4444)

socket.on("message", (data) => {
  console.log('received message from client: ' + data)
  socket.emit('message', { from: 'server', to: 'client' })
})
