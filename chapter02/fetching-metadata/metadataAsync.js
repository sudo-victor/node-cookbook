const fs = require('fs/promises')
const file = process.argv[2]


async function printMetadata(file) {
	try {
		const fileStats = await fs.stat(file);
		console.log(fileStats)
	} catch (err) {
		console.error("Error reading file path: ", file)
	}
}

printMetadata(file)
