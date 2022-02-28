// Assignment code here

function generatePassword() {
  //List of character types for the password generator//
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = "!@#$%^&*()-_=+"

  var inputLength = "";
  var inputNumbers;
  var inputLowerCase;
  var inputUpperCase;
  var inputSymbols;

  //Input prompts for random password//
  var inputLength = (window.prompt("Please enter a password that contains 8 - 128 characters."));
  if (inputLength < 8 || inputLength > 128 || isNaN(inputLength)) {
    window.alert("Your password must be between 8 - 128 characters long.");
    return generatePassword();
  }
  
  var characters = "";

  var inputNumbers = confirm("Click OK to input numeric characters in your password.");
  if ( inputNumbers ) {
    characters = characters.concat(numbers);
  }
  var inputLowerCase = confirm("Click OK to input lowercase letters in your password.");
  if ( inputLowerCase ) {
    characters = characters.concat(lowercase);
  }
  var inputUpperCase = confirm("Click OK to input uppercase letters in your password.");
  if ( inputUpperCase ) {
    characters = characters.concat(uppercase);
  }
  var inputSymbols = confirm("Click OK to input special characters in your password.");
  if ( inputSymbols ) {
    characters = characters.concat(symbols);
  }

  if (inputNumbers === false && inputLowerCase === false && inputUpperCase === false && inputSymbols === false) {
    alert("You must chose at least one character type.");
    return generatePassword();
  }

  var finalPassword = "";
  //Randomization for a generated final password//
  for (var i = 0; i < inputLength; i++) {
    var random = Math.floor(Math.random() * characters.length)
    var result = characters[random];
    var finalPassword = finalPassword.concat(result);
    
    console.log(result)
  }

  return (finalPassword);

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
