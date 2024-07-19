// Function to generate a random date in the format "DayOfWeek Month Day Year"
function generateRandomDate() {
    // Days of the week and Months arrays
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Generate random values for DayOfWeek, Month, Day, and Year
    const randomDayOfWeek = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
    const randomMonth = months[Math.floor(Math.random() * months.length)];
    const randomDay = Math.floor(Math.random() * 31) + 1; // Random day between 1 and 31
    const randomYear = Math.floor(Math.random() * (new Date().getFullYear() - 1900 + 1)) + 1900; // Random year between 1900 and current year

    // Construct the random date string
    const randomDate = `${randomDayOfWeek} ${randomMonth} ${randomDay} ${randomYear}`;

    return randomDate;
}

const randomDate = generateRandomDate();
//console.log(randomDate + '\n');


// Function to generate a random weather condition
function generateRandomWeatherCondition() {
    
    const condition = [
        'Sunny!',
        'Wet. Very Wet.',
        'Way too hot, go back inside',
        'Cold as hell',
        'Is that...hail??',
        'So much rain',
        'Winter Wonderland!',
        'Humid, and gross'
    ];

    const randomIndex = Math.floor(Math.random() * condition.length);
    return condition[randomIndex];
}

const randomWeather = generateRandomWeatherCondition();
//console.log(randomWeather + '\n');

// Lucky Number Variable
const luckyNumber = Math.floor(Math.random() * 99) + 1;

//console.log(luckyNumber + '\n');


// Function to generate random fortune
function generateRandomFortune() {
    let fortunes = [
        'Wonderful! You will have a great day',
        'Not so great. Probably not the day to make bets',
        'Not the worst I have seen today',
        'Just plain bad, stay at home in bed',
        'Honestly a bit boring'
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

const randomFortune = generateRandomFortune();
//console.log(randomFortune + '\n');

/* Today is _______, Random Date
The weather is __________.
Your lucky number is ____________.
Your fortune for today looks _____________ */



// Complete Function to generate a random message

console.log(`
    Today is: ${randomDate} \n
    The weather is: ${randomWeather} \n
    Your lucky number is: ${luckyNumber} \n
    Your fortune for today is: ${randomFortune} \n
    
    `)