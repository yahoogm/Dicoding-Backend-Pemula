// * import core module
const fs = require("fs");

// * variable to read a file
const readableStream = fs.createReadStream("./stream/input.txt", { highWaterMark: 15 });
// * variable to write new file
const writeableStream = fs.createWriteStream("./stream/output.txt", { highWaterMark: 15 });

// * Event when readble start
readableStream.on("readable", () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`);
  } catch (err) {
    console.log(err.message);
  }
});

// * Event when readble end
readableStream.on("end", () => {
  writeableStream.write(`Done`);
});
