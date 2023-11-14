// asyncBreeds.js

//currently incorrect implementation of Async 
const fs = require('fs');
/*
const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) return data;
  });


  */

const breedDetailsFromFile = function (breed,callbackHappensAfterEverythingElse) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      //begin callback inplementation no longer directly forcing a return
      console.log("Position -Readfile: Data location ")
      if(!error, callbackHappensAfterEverythingElse('callback now returnign data: ', data));
    } 
    //return the data when callback is triggered with no error
    //successfull error was null and returned the passed data
    callback(null, data);
  });
};

//c.log in sep function for easier manipulation and to be able to better see what is happening
const printOutCatBreed = breed => {
  console.log('Returned value: ', breed)
};

//return the string (breed details) and data to print from the file as a classic callback. breakign it out makes it easier to change or duplicate for edge cases and testing. 

breedDetailsFromFile('Bombay', printOutCatBreed);


//should have trusted my instincts I did need to include the breed... CB at the bottom. to access and the specific breed and then print the breed specific dtata

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', (error, data) => {
//   //2ed arg of (error, data) is my callback
//   if(error) {
//     console.error('Error', error);
//   } else {
//     console.log('Data', data);
//   }
// });


console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

