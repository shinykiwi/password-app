Function passwordstrength(userinput){
const zxcvbn = require('zxcvbn');

let password = userinput;

let strength = zxcvbn(password).score;

console.log(strength);

return strength;
}

passwordstrength("hello")

 var inputValue = document.getElementById("myTextbox").value;
    console.log(inputValue);
    pwstrength = generatePassword(userinput);
    console.log(pwstrength);
    document.getElementById("result").innerHTML = pwstrength;