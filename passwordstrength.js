Function passwordstrength(userinput){
const zxcvbn = require('zxcvbn');

let password = userinput;

let strength = zxcvbn(password).score;

console.log(strength);

return strength;
}

passwordstrength("hello")