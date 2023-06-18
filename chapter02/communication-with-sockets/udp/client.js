const dgram = require('dgram');

const socket = dgram.createSocket("udp6")

socket.bind(4444)

socket.emit("message", { from: 'client', to: 'server'})

socket.on("message", (data) => {
  console.log('received message from server: ' + data)
})
