// create array

// first way
const firstArray = [];



// second way
const secondArray = new Array();

firstArray.push(10)
firstArray.push(20)
firstArray.push(30);


secondArray.push(30)
secondArray.push(40)
secondArray.push(50);

// print both array
console.log(firstArray)
console.log(secondArray)

//search element
let ans = firstArray.indexOf(19);
console.log(ans);
 ans = firstArray.indexOf(30);
 console.log(ans);

 //Check if element exist or not
 console.log(firstArray.includes(10));
  console.log(firstArray.includes(100));


//slice : return array from start index to end-1 index
let thirdArray = [1,2,3,4,5,6,7,8,9,10];

console.log(thirdArray.slice(2,5));

//splice : remove and return value 5 value from index 2 
console.log(thirdArray.splice(2,5));
console.log(thirdArray)


// join multiple arrays using spread operator
const finalArray = [...firstArray, ...secondArray, ...thirdArray]
console.log(finalArray);

// string to array 
console.log(Array.from("Happy"));




