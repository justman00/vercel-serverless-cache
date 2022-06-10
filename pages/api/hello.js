const path = require("path");
const fs = require("fs");

let cachedValue = null;

export default function handler(req, res) {
  logFiles();

  if (!cachedValue) {
    cachedValue = Math.random().toFixed(2);
  }

  res.status(200).json({ name: "John Doe", value: cachedValue });
}

function logFiles() {
  fs.readdir(__dirname, function (err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file);
    });
  });
}
