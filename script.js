var specialCharacters = "!@#$%^&*";
var generateButton = document.getElementById('generateBtn');

generateButton.addEventListener('click', writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 5 but less than 20.");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");
  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  var array = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};

  if (numbers === true) {
    minimumNumbers = array.getNumbers();
    minimumCount++;
  }
  if (numbers === false) {
    minimumNumbers = 0;
    minimumCount = 0;
  }
  if (lowerCases === true) {
    minimumLowerCases = array.getLowerCases();
    minimumCount++;
  }
  if (lowerCases === false) {
    minimumLowerCases = 0;
    minimumCount = 0;
  }
  if (upperCases === true) {
    minimumUpperCases = array.getUpperCases();
    minimumCount++;
  }
  if (upperCases === false) {
    minimumUpperCases = 0;
    minimumCount = 0;
  }
  if (special === true) {
    minimumSpecialCharacters = array.getSpecialCharacters();
    minimumCount++;
  }
  if (special === false) {
    minimumSpecialCharacters = 0;
    minimumCount = 0;
  }

  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;
};