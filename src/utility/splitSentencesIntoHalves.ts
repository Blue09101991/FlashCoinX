export function splitSentencesIntoHalves(inputString: string) {
    // Regular expression to match sentence endings (.!?)
    const sentenceRegex = /[.!?]+/g;

    // Use the regex to split the input string into sentences
    const sentences = inputString?.split(sentenceRegex);

    // Count the number of sentences
    const sentenceCount = sentences?.length;

    // Calculate the index to split the sentences into halves
    const splitIndex = Math?.ceil(sentenceCount / 2);

    // Get the first half of sentences
    const firstHalf = sentences?.slice(0, splitIndex).join('.');

    // Get the second half of sentences
    const secondHalf = sentences?.slice(splitIndex).join('.');

    return { firstHalf, secondHalf };
}

// Example usage:
// const inputString = "This is sentence one. This is sentence two! And this is sentence three?";
// const { firstHalf, secondHalf } = splitSentencesIntoHalves(inputString);

// console.log("First Half of Sentences:", firstHalf);
// console.log("Second Half of Sentences:", secondHalf);
