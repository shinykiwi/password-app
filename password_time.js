function calculateTimeToCrack(password) {
    // Get the number of possible characters for the password
    let  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
    const characterCount = characters.length;

    // Get the number of possible combinations for the password
    let combinationCount = Math.pow(characterCount, password.length);
    console.log(combinationCount)
    // Calculate the time to crack the password in seconds
    let timeTC = (combinationCount / 1000000000);

    let timeTCSec = (timeTC%60);
    timeTC = (timeTC - timeTCSec)/60;

    let timeTCMin = (timeTC%60);
    timeTC = (timeTC - timeTCMin)/60;

    let timeTCHour = (timeTC%24);
    timeTC = (timeTC - timeTCHour)/60;

    let timeTCDay = (timeTC / 24);

    console.log("Day: " + timeTCDay + " Hour: " + timeTCHour + " Minute: " + timeTCMin + " Second: " + timeTCSec);

    // Return the time to crack in minutes
    let toString = ("Day: " + timeTCDay + " Hour: " + timeTCHour + " Minute: " + timeTCMin + " Second: " + timeTCSec);

    return toString;
}

// Example usage:
let password = "ckel7@P#1h32y";
let timeToCrack = calculateTimeToCrack(password);