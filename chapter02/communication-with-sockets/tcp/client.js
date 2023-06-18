const net = require("net")

const PORT = 3000
const HOSTNAME = "localhost"

const socket = net.connect(PORT, HOSTNAME)

socket.write("World")

socket.on("data", (data) => {
	console.log(data.toString())
})

