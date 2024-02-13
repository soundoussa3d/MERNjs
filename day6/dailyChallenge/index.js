const readFile = require('./readFileAsunc');
readFile.readFileAsync("hi.html").then(data => {
    console.log('File content:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });;


const writeFile = require('./writeFileAsync');
writeFile.writeFileAsync("hello.html","Hello world soso!").then(() => {
    console.log("Content has been written ");
  })
  .catch(error => {
    console.error('Error:', error);
  });