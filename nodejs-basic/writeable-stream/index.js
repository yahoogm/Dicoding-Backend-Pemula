const fs = require("fs");

const writeableStream = fs.createWriteStream("./writeable-stream/output.txt");

writeableStream.write("Ini merupakan teks baris pertama!\n");
writeableStream.write("Ini merupakan teks baris kedua!\n");
writeableStream.end("Akhir");
