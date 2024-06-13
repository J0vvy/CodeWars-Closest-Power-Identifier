const { Console } = require("console");

// Power Number Array
let Powers = [1, 2, 4, 8, 16, 32, 64];

let inputNumber = 9; // assuming inputNumber is a single number

// Concatenate the input number to the array
let InsertArray = Powers.concat(inputNumber);

// Find the correct position to insert the input number
let insertedIndex = -1;
for (let i = 0; i < InsertArray.length - 1; i++) {
    if (InsertArray[i] > inputNumber) {
        // Insert input number at the correct position
        InsertArray.splice(i, 0, inputNumber);
        // Remove the duplicate input number at the end of the array
        InsertArray.pop();
        insertedIndex = i;
        break;
    }
}

// If inputNumber is larger than all elements in the array, no insertion was done in the loop
// In that case, the input number is already correctly placed at the end after concatenation
if (insertedIndex === -1) {
    insertedIndex = InsertArray.length - 1;
}

let leftIndex = insertedIndex - 1;
let rightIndex = insertedIndex + 1;

console.log('Sorted array:', InsertArray);
console.log('Input number:', inputNumber);
if (leftIndex >= 0) {
    console.log('Element to the left:', InsertArray[leftIndex], 'at index', leftIndex);
} else {
    console.log('No element to the left of the input number.');
}
if (rightIndex < InsertArray.length) {
    console.log('Element to the right:', InsertArray[rightIndex], 'at index', rightIndex);
} else {
    console.log('No element to the right of the input number.');
}

// Compare the differences to find out which element is closer to the input number
if (leftIndex >= 0 && rightIndex < InsertArray.length) {
    let differenceToLeft = inputNumber - InsertArray[leftIndex];
    let differenceToRight = InsertArray[rightIndex] - inputNumber;

    if (differenceToLeft < differenceToRight) {
        console.log(`${InsertArray[leftIndex]} at index ${leftIndex} is closer to ${inputNumber}`);
    } else if (differenceToRight < differenceToLeft) {
        console.log(`${InsertArray[rightIndex]} at index ${rightIndex} is closer to ${inputNumber}`);
    } else {
        console.log(`${InsertArray[leftIndex]} at index ${leftIndex} and ${InsertArray[rightIndex]} at index ${rightIndex} are equally close to ${inputNumber}`);
    }
} else if (leftIndex >= 0) {
    console.log(`${InsertArray[leftIndex]} at index ${leftIndex} is the only element close to ${inputNumber}`);
} else if (rightIndex < InsertArray.length) {
    console.log(`${InsertArray[rightIndex]} at index ${rightIndex} is the only element close to ${inputNumber}`);
}
