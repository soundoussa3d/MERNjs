var url='http://mylogger.io/log';

function log(message) {
    //send an HTTP request
    console.log(message);
}
//export an object
module.exports.log = log;
//export a function
//module.exports=log;