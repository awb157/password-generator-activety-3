// Assignment code here
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var posablecaritors=[]
var finalpassword =[]
function generatePassword () {
  // prompt returned value input 
  var passwordLangth = prompt ('how long password should be? must be at least 8 charactors and less than 128')
  if(passwordLangth<8){
    alert("password must bemore than 8")
    return
  }
  if(passwordLangth>128){
    alert("password must less than 128")
    return
  }
  // confirm returns true or false
  var confirmNumbers = confirm ('would you like numbers in the password')
  var confirmLowercase = confirm ('would you like lowercase in the password')
  var confirmupercase = confirm ('would you like upercase in the password')
  var confirmCharacters = confirm ('would you like special charactres in the password')
 console.log(passwordLangth)
 console.log(confirmNumbers)
//  if true combine apperite aray in to posable aray
if(confirmNumbers === true) {
  posablecaritors=posablecaritors.concat(numericCharacters)
}
if(confirmupercase === true) {
  posablecaritors=posablecaritors.concat(upperCase)
}
if(confirmLowercase === true) {
  posablecaritors=posablecaritors.concat(lowerCase)
}
if(confirmCharacters === true) {
  posablecaritors=posablecaritors.concat(specialCharacters)
}
console.log (posablecaritors)

for(var i=0;i < passwordLangth; i++) { 
 var randomcharacter=Math.floor(Math.random()*posablecaritors.length)
 var truevalue=posablecaritors[randomcharacter]
 finalpassword.push(truevalue)
console.log(finalpassword)
}

 var joinedpassword = finalpassword.join("")

 return joinedpassword
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

