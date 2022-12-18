const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(data);
};

fs.readFile("./filesystem/notes.txt", "utf-8", fileReadCallback);
