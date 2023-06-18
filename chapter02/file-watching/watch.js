const fs = require("fs")
const childProcess = require("child_process")
const moment = require("moment")
const file = "./file.txt"

fs.watchFile(file, (current, previous) => {
	const time = moment().format("MMMM Do YYYY, hh:mm:ss a")
	return console.log(`${file} updated ${(time)}`)
})

// fs.watch("./", { encoding: 'buffer' }, (eventType, filename) => {
//   if (filename) {
//     console.log(eventType, filename.toString());
// 		const ls = childProcess.spawn( 'node', ['watch.js'] );
// 		ls.stdout.on( 'data', ( data ) => {
// 				console.log( `stdout: ${ data }` );
// 		} );
		
// 		ls.stderr.on( 'data', ( data ) => {
// 				console.log( `stderr: ${ data }` );
// 		} );
		
// 		ls.on( 'close', ( code ) => {
// 				console.log( `child process exited with code ${ code }` );
// 		} );
//   }
// })