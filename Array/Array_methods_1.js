// ad the word "cool" to a string using the .push method

const addTheWordCool = function(array) {
    array.push("cool");
    return array
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat:["nice", "awesome", "tof", "cool]

// Write a JavaSCript function that returns the number of elements in an array

const amountOfElementsInArray = (array) => {
    return array.length;
}

console.log(amountOfElementsInArray(["apples", "pears", "lemons"]));

// Write a JavaScript function that returns the first element
// of an array. PS: At which number does an array start counting again?

const selectBelgiumFromBenelux = (BeneLux) => {
    return BeneLux[0];
}

console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"])); 
// result: "Belgium" 

// Write a JavaScript function to return the last element of an array.

const lastElementInArray = (animals) => {
    return animals[animals.length -1];
    }

console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"])); 
// result: "Turtle"

// Presidents
// Slice, Splice

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = () => {
    return presidents.slice(1, presidents.length);
};

const impeachTrumpSplice = function(array) {
    return presidents.splice(1, 3)
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


// Join all elements

const stringsTogether = (array) => {
    return array.join(' ');
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}'])) 
//result: "Winc Academy is fun ;-}"


// Combine

const combineArrays = (array1, array2) => {
    return array1.concat(array2);
}

console.log(combineArrays([1,2,3], [4,5,6]))
// resultaat: [1,2,3,4,5,6]

