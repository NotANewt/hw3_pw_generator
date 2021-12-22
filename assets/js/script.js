// Assignment Code
let generateBtn = document.querySelector("#generate");
// 1b. create array of letters
let lcLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let ucLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// generatePassword
// return a final password as a string
function generatePassword() {
  // 1. assign a variable to the length of the password
  let pwLength = prompt("How long should the password be?");
  let minLength = 8;
  let maxLength = 128;
  let password = [];

  //validate input - make sure the password is a whole number between 8 and 128
  //NOTE: used modulus (%) which gives a remainder of a number to check if its a whole number. This also validates that the value is a number
  if (pwLength < minLength || pwLength > maxLength || pwLength % 1 !== 0) {
    //if not valid, pop up an alert box
    alert("Please choose a whole number between 8 and 128.");
    //return nothing so a new value can be assigned
    return null;
  }

  // 1a. create a password with that length
  // 1c. loop through array of letters
  for (let i = 0; i < pwLength; i++) {
    // 1d. push each letter array into password array
    //1e. push a random letter from the array into password array
    password.push(lcLetters[Math.floor(Math.random() * lcLetters.length)]);
  }

  //password.push(lcLetters[i]);

  // 1e. create a random 10 letter password

  // 2 ask user for length

  // 1e. convert password array back to string
  return password.join("");
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
// kicks off the generator
generateBtn.addEventListener("click", writePassword);
