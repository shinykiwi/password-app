function calculateTimeToCrack(password) {
    // Get the number of possible characters for the password
    let  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
    const characterCount = characters.length;

    // Get the number of possible combinations for the password
    let combinationCount = Math.pow(characterCount, password.length);

    // Calculate the time to crack the password in seconds
    let timeToCrack = combinationCount / 100000000;

    // Convert time to crack to minutes
    let timeToCrackInMinutes = timeToCrack / 60;

    // Return the time to crack in minutes
    return timeToCrackInMinutes;
}

// Example usage:
let password = "11111111";
let timeToCrack = calculateTimeToCrack(password, guessesPerSecond);
console.log("Time to crack password: " + timeToCrack + " minutes");