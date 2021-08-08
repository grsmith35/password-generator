// Assignment code here
letters = "abcdefghijklmnopqrstuvwxyz"
specialChars = " !#$%^'&*()+,-./:;<>=?@[]_{}|~"

var randomize = function(pwLengh, lowerResponse, upperResponse, numberResponse, specialResponse){
  lCheck = false;
  uCheck = false;
  nCheck = false;
  sCheck = false;

  while(password.length < pwLengh) {
    randomized = Math.floor(Math.random()*4);
    console.log(randomized)
    // select a lower case if lowercase is true
    if(randomized === 0 && lowerResponse === true){
      loc = Math.floor(Math.random()*26);
      letter = letters.charAt(loc);
      password = password + letter;
      lCheck = true;
    }
    //select upper case if uppercase is true
    else if(randomized === 1 && upperResponse === true){
      loc = Math.floor(Math.random()*26);
      letter = letters.charAt(loc);
      letter = letter.toUpperCase();
      password = password + letter;
      uCheck = true;
    }
    //select number if number is true
    else if(randomized === 2 && numberResponse === true){
      number  = Math.floor(Math.random()*10);
      password = password + number;
      nCheck = true;
    }
    //select special character if special is true
    else if(randomized === 3 && specialResponse === true){
      loc = Math.floor(Math.random()*30);
      special = specialChars.charAt(loc);
      password = password + special;
      sCheck = true;
    }
  }
  //check that password contains all selected criteria
  if (password.length === pwLengh){
    console.log(lCheck + " " + lowerResponse + "\n" + uCheck + " " + upperResponse + "\n" + nCheck + " " + numberResponse + "\n" + sCheck + specialResponse);
    if (lCheck === lowerResponse && uCheck === upperResponse && nCheck === numberResponse && sCheck === specialResponse){
      console.log("sending it back")
      return password
    }
    //loop back if it doesnt contain all needed responses.
    else {
      password = "";
      i = 0;
      console.log("Didn't get all the characters.");
      randomize(pwLengh,lowerResponse,upperResponse,numberResponse,specialResponse);
    } 
  }
};

// Get references to the #generate element
var generatePassword = function(){
  console.log("Doing something");
  password = "";
  var generateBtn = document.querySelector("#generate");
  var pwLengh = 0;
  //loop to make sure password length is valid
  while(pwLengh < 8 || pwLengh > 128) {
    pwInput = prompt("How many characters should your password be?(8-128)");
    pwLengh = parseInt(pwInput);
  }
  //check with user what characters the password should have
  console.log(pwLengh);
  var lowerResponse = confirm("Would you like your password to have lowercase?");
  console.log(lowerResponse);
  var upperResponse = confirm("Would you like your password to have Uppercase?");
  console.log(upperResponse);
  var numberResponse = confirm("Would you like to include a number in your password?");
  console.log(numberResponse);
  var specialResponse = confirm("Would you like to include a special character in your password?");
  console.log(specialResponse);
  
  //call the function that builds and checks password.
  randomize(pwLengh,lowerResponse,upperResponse,numberResponse,specialResponse);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("got the password back and it met requirements: \n" + password)
  var passwordText = document.querySelector('#password');
  

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);