// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added variables
function generatePassword() {
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = "!@#$%^&*()?."
//Added prompt for that pops up immediately when loading the site
var passwordLength = prompt("How many charcters would you like?")


// Added he character limit to the password
if (passwordLength < 8 || passwordLength > 128) {
  alert("please choose between 8 - 128 characters")
  generatePassword()
}

// Added confirm and prompts

var uppercaseConfirm = confirm("Would you like uppercase?")
var lowercaseConfirm = confirm("Would you like lowercase?")
var numbersConfirm = confirm("Would you like any numbers?")
var specialCharactersConfirm = confirm("Would you like and special characters?")
//Added empty string for my "confirm" to return to
var charset = "";
//Added strictly equal to imputs for the empty string
if (uppercaseConfirm === true){
  charset += uppercase;
}
if (lowercaseConfirm ===true){
  charset += lowercase;
}
if (numbersConfirm === true){
  charset += numbers;
}
if (specialCharactersConfirm === true){
  charset += specialCharacters;
}
//Added the for loop for my random password generation and had it imput into the empty string "returnPassword"
var returnPassword = "";

for (var i=0;i<passwordLength;i++){
  var random = charset.charAt (Math.floor(Math.random()* charset.length));
  returnPassword += random;
}

return returnPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);