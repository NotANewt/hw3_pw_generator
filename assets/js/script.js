// Assignment Code
let generateBtn = document.querySelector("#generate");

//Arrays
//lowercase characters
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
//uppercase characters
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
//numeric characters
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//special characters
let spChar = [
  "!",
  '"',
  "'",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// generatePassword
// return a final password as a string
function generatePassword() {
  //Assign Variables
  //variables related to password length
  let pwLength = prompt("How long should the password be?");
  let minLength = 8;
  let maxLength = 128;
  //variables related to the password array and final password
  let pwArray = [];
  let password = [];

  //validate input for pw length - make sure the password is a whole number between 8 and 128
  //NOTE: used modulus (%) which gives a remainder of a number to check if its a whole number.
  //This also validates that the value is a number.
  if (pwLength < minLength || pwLength > maxLength || pwLength % 1 !== 0) {
    //if not valid, pop up an alert box
    alert(
      "Cannot generate password: Please choose a whole number between 8 and 128."
    );
    //return nothing so a new value can be assigned
    return null;
  }

  //Password Criteria

  //confirm whether to include lowercase characters
  let requestLowerCase = confirm(
    "Press OK to use lowercase letters in your password."
  );

  //confirm whether to include uppercase characters
  let requestUpperCase = confirm(
    "Press OK to use uppercase letters in your password."
  );

  //confirm whether to include numbers
  let requestNumbers = confirm("Press OK to use numbers in your password.");

  //confirm whether to include special characters
  let requestSpecial = confirm(
    "Press OK to use special characters in your password."
  );

  //if the user did not choose any characters
  //NOTE: by adding the values of all prompts, if all cancels are selected, the value will be 0
  if (
    requestLowerCase + requestUpperCase + requestNumbers + requestSpecial ===
    0
  ) {
    //pop up an alert box to instruct them to pick at least one character type
    alert(
      "Cannot generate password: Please choose at least one character type."
    );
    //return nothing so a new value can be assigned
    return null;
  }

  //if chose lowercase letters, add them to the pwArray
  if (requestLowerCase === true) {
    pwArray = pwArray.concat(lcLetters);
  }

  //if chose uppercase letters, add them to the pwArray
  if (requestUpperCase === true) {
    pwArray = pwArray.concat(ucLetters);
  }

  //if chose numberes, add them to the pwArray
  if (requestNumbers === true) {
    pwArray = pwArray.concat(num);
  }

  //if chose special characters, add  them to the pwArray
  if (requestSpecial === true) {
    pwArray = pwArray.concat(spChar);
  }

  // create a pw with chosen length, then loop through the concatenated array
  for (let i = 0; i < pwLength; i++) {
    // 1d. push each letter array into password array
    //1e. push a random letter from the array into password array
    password.push(pwArray[Math.floor(Math.random() * pwArray.length)]);
  }

  //convert password array back to string
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
