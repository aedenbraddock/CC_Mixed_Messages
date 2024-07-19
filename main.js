/*          INSTRUCTIONS
For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking. */


// Sample Word Sets

//Nouns
const nouns = ['snake', 'fire', 'light'];

//Adjectives
const adjectives = ['plain', 'secretive', 'rich'];

//Verbs
const verbs = ['attack', 'explain', 'switch'];

//Adverbs
const adverbs = ['basically', 'briefly', 'not'];

//Prepositions
const preps = ['to', 'about', 'through'];



function funnyQuote(maxWords) {
    const getRandomWord = (words) => words[Math.floor(Math.random() * words.length)];
    
    let sentence = [];
    let currentWordCount = 0;
    
    while (currentWordCount < maxWords) {
        // Randomly select a word from each word type array
        const randomNoun = getRandomWord(nouns);
        const randomAdjective = getRandomWord(adjectives);
        const randomVerb = getRandomWord(verbs);
        const randomAdverb = getRandomWord(adverbs);
        const randomPrep = getRandomWord(preps);

        // Check if adding the next group of words would exceed maxWords
        if (currentWordCount + 3 <= maxWords) {
            // Construct a sentence template with the selected words
            const sentenceTemplate = `${randomPrep} ${randomAdjective} ${randomNoun} ${randomAdverb} ${randomVerb}`;
            sentence.push(sentenceTemplate);
            currentWordCount += 3; // Update the word count
        } else {
            break; // Stop the loop if adding more words would exceed the limit
        }
    }

    return sentence.join(' '); // Join the sentence parts into a single string
}

// Generate a random sentence with a maximum of 7 words
const randomSentence = funnyQuote(10);
console.log(randomSentence);
    

