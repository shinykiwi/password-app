const random = require('random');
const string = require('string');

function generatePassword(lengthpassword) {
  const lettersLower = list(string.asciiLowercase);
  const lettersUpper = list(string.asciiUppercase);
  const digits = string.digits;
  const symbols = string.hexdigits;

  let x = lengthpassword;
  while (true) {
    const pick = random.sample(range(2, x), 4);
    if (sum(pick) === x) {
      break;
    }
  }
  result = pick;

  const numOfLetterLower = pick[0];
  const numOfLetterUpper = pick[1];
  const numOfSymbols = pick[2];
  const numOfDigits = pick[3];

  const passwordList = [];
  for (let i = 0; i < numOfLetterLower; i++) {
    passwordList.push(random.choice(lettersLower));
  }
  for (let i = 0; i < numOfLetterUpper; i++) {
    passwordList.push(random.choice(lettersUpper));
  }
  for (let i = 0; i < numOfSymbols; i++) {
    passwordList.push(random.choice(symbols));
  }
  for (let i = 0; i < numOfDigits; i++) {
    passwordList.push(random.choice(digits));
  }

  random.shuffle(passwordList);
  let password = "";
  for (let i = 0; i < passwordList.length; i++) {
    password += passwordList[i];
  }
  console.log(`Your password is: ${password}`);
}

generatePassword(14);
