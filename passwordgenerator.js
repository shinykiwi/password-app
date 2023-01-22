function updateContent() {
    var inputValue = document.getElementById("myTextbox").value;
    console.log(inputValue);
    returnpassword = generatePassword(Number(inputValue));
    console.log(returnpassword);
    document.getElementById("result").innerHTML = returnpassword;
}



function generatePassword(slider_value) {
    strengthLabel = document.getElementById("strengthLabel")
    switch (slider_value) {
        case '0':
            text = 'Medium'
            break;
        case '1':
            text = 'Strong'
            break;
        case '2':
            text = 'Really strong'
            break;
        case '3':
            text = 'Really really strong'
            break;
    }
    document.getElementById("strengthLabel").textContent = text

    const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const digits = "0123456789".split("");
    const symbols = "!@#$%&*?".split("");

    slider_value = parseInt(slider_value)
    var x = Math.pow(2, slider_value+3);
    console.log('slider_value: ' + '2^' + (slider_value+3) + ' = ' + slider_value)
    console.log('password length: ' + x)

    while (true) {
        var pick = Array.from({length: 4}, () => Math.floor(Math.random() * (x - 2) + 2));
        if (pick.reduce((a, b) => a + b) === x) break;
    }
    var result = pick;

    var numofletterlower = result[0];
    var numofletterupper = result[1];
    var numofsymbols = result[2];
    var numofdigits = result[3];

    var password = "";
    for (var i = 0; i < numofletterlower; i++) {
        password += lettersLower[Math.floor(Math.random() * lettersLower.length)];
    }
    for (var i = 0; i < numofletterupper; i++) {
        password += lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
    }
    for (var i = 0; i < numofsymbols; i++) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    for (var i = 0; i < numofdigits; i++) {
        password += digits[Math.floor(Math.random() * digits.length)];
    }

    var password_list = password.split("");
    password_list = shuffle(password_list);
    password = password_list.join("");
    console.log("Your password is: " + password);
    document.getElementById("myTextbox").value = password;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


