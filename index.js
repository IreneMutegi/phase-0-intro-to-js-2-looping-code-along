function writeCards(names, eventName) {
    const messages = []; // Create a new, empty array to hold the messages

    for (let i = 0; i < names.length; i++) {
        // Build out the 'thank you' message using string interpolation
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message); // Add the message to the new array
    }

    return messages; // Return the new array after the loop finishes
}

// Example usage:
const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");

console.log(thankYouMessages);



function countDown(number) {
    let i = number; // Start from the provided number

    while (i >= 0) {
        console.log(i); // Log the current value of i
        i--; // Decrement i by 1
    }
}

// Example usage:
countDown(10); // This will log 10, 9, 8, ..., 1, 0
