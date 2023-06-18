const { Readable } = require("stream");

async function* generate() {
  yield "Node.js";
  yield "id";
  yield "a";
  yield "Javascript";
  yield "Runtime";
}

const readable = Readable.from(generate())

readable.on("data", (chunk) => {
  console.log(chunk)
})