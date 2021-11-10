// Finds a certain item and returns it based
// on a certain value

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// Here goes your function
const findSpiderMan = (superheroes) => {
    return superheroes.find(function (superhero) {
        return superhero.name === "Spiderman";
    });
}

console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// An array of integers

const doubleArrayValues = (array) => {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 2);
    });
    return newArray
}

console.log("Show double Values:", doubleArrayValues([1, 2, 3]))
// result should be [2, 4, 6]

// Using MAP

const doubleArrayValuesShortHand = (x) => {
    return x.map(n => n * 2);
};

console.log("Show double Values:", doubleArrayValuesShortHand([10, 20, 40]))




// Write a JavaScript function that checks
// if there is a number greater than 10

const containsNumberBiggerThan10 = (array) => {
    return array.some(number => {
        return number > 10
    });
};

console.log("contains numbers bigger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log("contains numbers bigger than 10:", containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

// Write a JavaScript function that checks for a certain string

const isItalyInTheGreat7 = (array) => {
    return array.includes("Italy");
}

console.log("Is Italy in the name?:", isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
// result should be true

// Tenfold

const tenfold = (array) => {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10);
    });
    return newArray;
}

// Map

const tenfoldMap = (array) => {
    return array.map(number => {
        return number * 10;
    });
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
console.log(tenfoldMap([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

// Is Below 100

const isBelow100 = (array) => {
    return array.every(number => {
        return number < 100
    })
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

// Sum of a large Array

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

const bigSum = function (array) {
    return array.reduce((x, y) => {
        return x + y
    })
}

console.log(bigSum(numbers))