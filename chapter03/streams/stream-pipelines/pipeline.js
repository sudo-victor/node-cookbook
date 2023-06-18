const fs = require("fs")
const { pipeline, Transform } = require("stream")

const uppercase = Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  }
})

pipeline(
  fs.createReadStream("./file.txt"),
  uppercase,
  fs.createWriteStream("./file-uppercase.txt"),
  (err) => {
    if(err) {
      console.log("Pipeline failed. ", err)
    } else {
      console.log("Pipeline succeeded.")
    }
  }
)

