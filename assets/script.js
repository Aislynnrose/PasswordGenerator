// Assignment Code
var generateBtn = document.querySelector("#generate");

//These are the pwd input requirements
function writePassword(numsChars) {
  if (isNaN(numsChars)) {
    alert("Please select a valid number");
    return false;
  } else if (parseInt(numsChars) <8) {
alert("This password is too short, must be at least 8 characters")
return false;
  } else if (parseInt(numsChars)>= 128) {
    alert("This password is too long, must be less than 128 characters")
    return false;
  }
  return true;
}

// This will create a random generation of characters
function getRandomElemtFromArray(GeneratedPWD) {
  return GeneratedPWD[math.floor(Math.random()* GeneratedPWD.length)]
}

// This will determine users required password options
function generatePassword() {
  var numsChars = prompt(
    "How many characters do you want your password to contain?"
    );
  var validPWD = writePassword (numsChars);
  if (validPWD) {
    var specialCharacters = confirm(`
    Would you like your password to contain special characters?`);
    var nums = confirm(
      'Would you like your password to contain numbers?');
    var includesUpper = confirm(
      'Would you like your paddword to contain uppercase?');
    var includesLower = confirm(
      'Would you like your paddword to contain lowercase?');
  }
  // If statement to check pwd reqs
  if (
    [specialCharacters, nums, includesUpper, includesUpper].includes(
    true
    )
  )
  // Array for characters to include in pwd and absolute amt to include
  var charactersPwd = [];
  var absoluteChar = [];
  if (specialCharacters) {
  charactersPwd = charactersPwd.concat(specialChars);
  absoluteChar.push(
    specialChars[Math.floor(Math.random() * specialChars.length)]
  );
  }
  if (nums) {
  charactersPwd = charactersPwd.concat(numbers);
  absoluteChar.push(
    numbers[Math.floor(Math.random() * numbers.length)]
  );
  }
  if (includesLower) {
  charactersPwd = charactersPwd.concat(lowerCase);
  absoluteChar.push(
    lowerCase[Math.floor(Math.random() * lowerCase.length)
    ]
  );
  }
  if (includesUpper) {
  charactersPwd = charactersPwd.concat(upperCase);
  absoluteChar.push(
    upperCase[Math.floor(Math.random() * upperCase.length)
    ]
  );
  }
  // Sets the password length and selects random characters from the array of characters and adds them into the password
  var randomize = [];
  for (var i = 0; i < numsChars; i++) {
  var index = Math.floor(Math.random() * charactersPwd.length);
  randomize.push(charactersPwd[index]);
  }
  var newPassword = {};
  // Making sure characters are not being replaced more than necessary
  while (absoluteChar.length > 0) {
    var replace = Math.floor(Math.random() * randomize.length);
    if (!newPassword == [replace]) {
      randomize[replace] = absoluteChar.pop();
      newPassword[replace] = true;
    }
  }
  return randomize.join("");
  }
  // Puts created password into the password box
  function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  };
  // Listens for click to generate password
  generateBtn.addEventListener("click", createPassword);
  // Array of special characters to be included in password
  var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
  ];
  // Array of numeric characters to be included in password
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Array of lowercase characters to be included in password
  var lowerCase = [
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
  // Array of uppercase characters to be included in password
  var upperCase = [
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