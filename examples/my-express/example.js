const { HttpServer } = require('./index')

const PORT = 3435
const app = new HttpServer()

app.get("/", function (req, res) {
  res.end("Welcome")
})

app.listen(PORT, () => console.log('listening on port ' + PORT))
