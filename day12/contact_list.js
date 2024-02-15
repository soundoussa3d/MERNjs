const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Collection to store contacts
const contacts = {};

// Function to add a contact
function addContact() {
  rl.question('Enter the name of the contact: ', (name) => {
    rl.question('Enter the phone number of the contact: ', (phone) => {
      contacts[name] = phone;
      console.log('Contact added successfully!\n');
      showMenu();
    });
  });
}

// Function to display all contacts
function displayContacts() {
  console.log('Contacts:');
  Object.entries(contacts).forEach(([name, phone], index) => {
    console.log(`${index + 1}. Name: ${name}, Phone: ${phone}`);
  });
  console.log();
  showMenu();
}


// Function to show the main menu
function showMenu() {
  console.log('Contact Manager');
  console.log('1. Add a contact');
  console.log('2. Display all contacts');
  console.log('3. Exit');
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        addContact();
        break;
      case '2':
        displayContacts();
        break;
      case '3':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.\n');
        showMenu();
    }
  });
}

// Start the application
showMenu();
