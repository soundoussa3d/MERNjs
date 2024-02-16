/*//events 
const EventEmitter = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Define an event handler function
const eventHandler = (data) => {
  console.log('Event occurred:', data);
};

// Register the event handler for the custom event
eventEmitter.on('customEvent', eventHandler);

// Simulate an event occurrence
eventEmitter.emit('customEvent', 'Event data');*/


///////////////events /////////////
/*const EventEmitter = require('events');
//instance
const emitter = new EventEmitter();

//Register a Listener 
emitter.on('messageLogged',function name() {
    console.log("Listenner called");
})

//Making a noise , or produce something is what emit means

//Raise an event 
emitter.emit('messageLogged');*/


////////Modules & CommonJS

//what is a readline module
//get user input

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random() * 10)+1);
let num2 = Math.floor((Math.random() * 10)+1);
let answer = num1 +num2;
//${}
rl.question(`What is ${num1} + ${num2}? \n`,
(userInput)=>{
    if (userInput.trim()==answer) {
        console.log("Correct! Thanks for playing.");
        rl.close();
    }
    else {
        /*console.log("Wrong Answer!");
        rl.close();*/
        rl.setPrompt('Incorrect reponse please try again \n');
        rl.prompt();
        rl.on('line',(userInput)=>{
        if (userInput.trim() ==answer) {
            rl.close();
        }
        else {
            rl.setPrompt(`Your answer of ${userInput} is incorrect\n try again \n`);
            rl.prompt();
        }
       });
    }
});
//event 
rl.on('close',()=>{
    console.log("end");
});


//a revoir plutot 
/*const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
var array =[];
var  name="";
var phone = "";
var answer= "yes";

//${}
function question() {
    rl.question("Want to add a new contact \n", (userInput)=>{
        if (userInput.trim()=="yes") {
            answer= "yes";
            rl.question(`Enter a name \n`,
            (userInput)=>{
           if (userInput.trim()!=="") {
           name=userInput.trim();
            rl.question("Please enter a phone number \n", (userInput)=>{
                phone=userInput.trim();
                let obj={
                    name:name,
                    phone:phone
                }
                 array.push(obj);
                 console.log(`Name : ${array[0].name}`);
                 console.log(`Phone Number : ${array[0].phone}\n`);
                 rl.close();
                
            }); 
            }
            else {
                rl.setPrompt('Incorrect reponse please try again \n');
                rl.prompt();
                rl.on('line',(userInput)=>{
                if (userInput.trim() !=="") {
                    name=userInput.trim();
            rl.question("Please enter a phone number \n", (userInput)=>{
                phone=userInput.trim();
                let obj={
                    name:name,
                    phone:phone
                }
                 array.push(obj);
                 console.log(`Name : ${array[0].name}`);
                 console.log(`Phone Number : ${array[0].phone}\n`);
                 //rl.close();
                 return;
                
            }); 
                }
                else {
                    rl.setPrompt(`Your answer of ${userInput} is incorrect\n try again \n`);
                    rl.prompt();
                }
               });
            }
            
            
        }) 
        }
        else{
            answer="no";
            console.log("okay");
            rl.close();
        }
        
    }); 
}
question();
question();
question();
for (let i = 0; i < array.length; i++) {
    console.log("name: " + array[i][0]+" phone "+array[i][1]);
}*/


    



 
/*//event   
rl.on('close',()=>{
    console.log("end");
});*/



//How can you emit an event with data to be passed to the listeners?=>
//=>emit('eventName', data)

//Which statement is true about the behavior of CommonJS modules in Node.js?

//In which type of applications is event-driven architecture particularly beneficial?
//=>Event-driven architecture is particularly beneficial for real-time applications such as chat applications or streaming services. These applications require handling a large number of concurrent events, such as incoming messages or data streams, and reacting to them in real-time. Event-driven architecture allows such applications to efficiently manage and process these events asynchronously, without blocking the main thread of execution.


//Event-driven architecture =>
//A technique for handling synchronous operations in Node.js

//Which module specification is commonly used in Node.js?

//Which core module in Node.js provides the EventEmitter class?


//What is an "event" in the context of EventEmitter?

//=>A named signal that indicates something has happened