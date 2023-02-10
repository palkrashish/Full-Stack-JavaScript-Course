let sayHello = function (name) {
    console.log("Welcome to my Page");
    console.log(`Hey ${name} `);
}

// sayHello("Ashish")


let fullNameStudent = function (firstName, lastName) {

    console.log(" Welcome to my Instagram Page ");
    console.log(` ${ firstName } ${ lastName }`);
}


// fullNameStudent('Ashish', 'Pal')

let multiPlayer = function (num, num1){

    // let multi = num * num1;
    // return multi;

    return num * num1;
}

// console.log(multiPlayer(2,3));  // 6

// DEFAULT PARAMETER EXAMPLE


 let exampleDef = function ( name,  mobileNo) {
    return  ' Hello ' + name +  ' and you Mobile number is: ' + mobileNo
 }

 
 console.log( exampleDef('Ashish', 95876876456567)); // Hello Ashish and you Mobile number is: 95876876456567