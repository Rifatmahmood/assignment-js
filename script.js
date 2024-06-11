
// odd even function 
const oddOrEven = (num) => {
    if (num % 2 == 0) {
        console.log(`the ${num} is even`);
    } else {
        console.log(`the ${num} is odd`);
    }
}

// number sorting function 
const unorderedArray = [12, 3, 7, 1, 19, 6, 14, 10, 2, 17, 11, 5, 20, 4, 18, 13, 16, 9, 8, 15];

const makeArrOrdered = (arr) => {
    arr.sort((a, b) => a - b)
}
makeArrOrdered(unorderedArray)
console.log(unorderedArray);

// Leap Year Function 
const isLeapYear = (year) => {
    if (year % 4 == 0 && year % 100 !== 0) {
        console.log("It is a leap year.");
    } else if (year % 4 == 0 && year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("It is a leap year.");
        } else {
            console.log("It is not a leap year.");
        }

    }

}

isLeapYear(1900)
isLeapYear(2000)
isLeapYear(2024)

// three and five 
function threeAndfive(num1, num2) {
    const arr = [];
    while (num1 != num2 + 1) {
        if (num1 % 3 == 0 && num1 % 5 == 0) {
            arr.push(num1)
        }
        num1++;
    }

    return arr
}

console.log(threeAndfive(1, 50));


// the longest name 
const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const theLongestName = (nameArr) => {
    longestName = nameArr[0];
    for (let i = 1; i < nameArr.length; i++) {
        if (longestName.length < nameArr[i].length) {
            longestName = nameArr[i]
        }
    }

    console.log(longestName);
}

theLongestName(friends)

// unique number
const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof (2323));
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

removeDuplicates(numbers)
// largest number 
function findLargestNumber(arr) {
    return Math.max(...arr);
}

const largestNumber = findLargestNumber(numbers)

// monthly Savings
function monthlySavings(array, livingCost) {
    if (Array.isArray(array) && typeof (livingCost) == 'number') {
        const reducedPayment = array.map(payment => payment >= 300 ? payment * 0.8 : payment)
        const totalPayment = reducedPayment.reduce((total, payment) => total + payment, 0);
        const savings = totalPayment - livingCost
        return savings >= 0 ? savings.toFixed(2) : "Earn more";

    } else {
       return "invalid input"
    }
}


console.log(monthlySavings([2323, 331, 11, 545, 11], 23132));