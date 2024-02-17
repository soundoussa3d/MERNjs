//file system operations
//using the fs module require('fs')

const fs = require('fs');

// Creating a new file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');
  }
});

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);
  }
});

// Updating a file
fs.appendFile('example.txt', '\nThis is an update.', (err) => {
  if (err) {
    console.error('Error updating file:', err);
  } else {
    console.log('File updated successfully.');
  }
});

// Deleting a file
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully.');
  }
});