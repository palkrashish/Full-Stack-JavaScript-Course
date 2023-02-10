const  numbers = [ 'One', 'Two', 'Three', 'Four', 'Six', 'Seven', 'Eight' ]

// numbers[1] = 'Ashish'
 // console.log(numbers); //[
//   'One',   'Ashish',
//   'Three', 'Four',
//   'Six',   'Seven',
//   'Eight'
// ]

//Start

// numbers.shift();
// console.log(numbers); // [ 'Two', 'Three', 'Four', 'Six', 'Seven', 'Eight' ]

numbers.unshift("SOMETHING");
console.log(numbers); // [
//     'SOMETHING', 'One',  
//     'Two',       'Three',
//     'Four',      'Six',  
//     'Seven',     'Eight' 
//   ]

//End

// numbers.pop() // remove number in the last
// console.log("Element will be delete " + numbers.pop()); // Element will be delete Eight

// console.log(numbers); // [ 'One', 'Two', 'Three', 'Four', 'Six', 'Seven' ]

// numbers.push('Nine') // add number in the last
// console.log(numbers); // [
//     'One',   'Two',  
//     'Three', 'Four', 
//     'Six',   'Seven',
//     'Eight', 'Nine'  
//   ]


// Middle

// numbers.splice(2,1, "something");
// console.log(numbers); // [ 'One', 'Two', 'something', 'Four', 'Six', 'Seven', 'Eight' ]