const fs = require('fs');
function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
          if (err.code === 'EACCES') { // Permission denied error
            reject("Permission denied: Cannot write ");
          } else {
            reject("Error writing to file");
          }
        } else {
          resolve();
        }
      });
    });
  }
  
  /*const filePath = 'hello.html';
  const content = 'Hello, world!';
  
  writeFileAsync(filePath, content)
    .then(() => {
      console.log("Content has been written ");
    })
    .catch(error => {
      console.error('Error:', error);
    });*/

    module.exports.writeFileAsync = writeFileAsync;