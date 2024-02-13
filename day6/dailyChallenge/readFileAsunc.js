const fs = require('fs');

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') { 
            // File not found error
          reject("File not found");
        } else {
          reject("Error reading file");
        }
      } else {
        resolve(data);
      }
    });
  });
}



  module.exports.readFileAsync = readFileAsync;