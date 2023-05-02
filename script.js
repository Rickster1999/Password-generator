// Assignment Code
var generateBtn = document.querySelector("#generate");
// Added confirm function
function generatePassword(){
  let uppercase = confirm("Would you like uppercase?")
  let lowercase = confirm("Would you like lowercase?")
  let numbers = confirm("Would you like any numbers?")
  let specialCharacters = confirm("Would you like and special characters?")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);