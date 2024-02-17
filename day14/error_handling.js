const fs = require('fs');

function readJSONFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Error reading JSON file: ${err.message}`));
      } else {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (parseError) {
          reject(new Error(`Error parsing JSON: ${parseError.message}`));
        }
      }
    });
  });
}

// Example usage
readJSONFile('data.json')
  .then((jsonData) => {
    console.log('Data:', jsonData);
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  });