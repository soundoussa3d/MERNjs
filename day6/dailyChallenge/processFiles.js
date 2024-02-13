const fs = require('fs');
const path = require('path');

function processFiles(filePaths) {
  const promises = filePaths.map(filePath => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject("Error reading file");
        } else {
          const modifiedContent = addTimestamp(data); // Manipulate content
          const newFilePath = getNewFilePath(filePath);
          fs.writeFile(newFilePath, modifiedContent, 'utf8', (err) => {
            if (err) {
              reject("Error writing to file ");
            } else {
              resolve("File processed and written ");
            }
          });
        }
      });
    });
  });

  return Promise.all(promises);
}

function addTimestamp(content) {
  const timestamp = new Date().toISOString();
  return `${timestamp}\n${content}`;
}

function getNewFilePath(filePath) {
  const dirname = path.dirname(filePath);
  const basename = path.basename(filePath);
  const timestamp = new Date().getTime();
  const newBasename = `${timestamp}_${basename}`;
  return path.join(dirname, newBasename);
}

// Example usage:
const filePaths = ['hi.html.', 'hello.html']; // Array of file paths
processFiles(filePaths)
  .then(results => {
    results.forEach(result => console.log(result));
  })
  .catch(error => {
    console.error('Error:', error);
  });