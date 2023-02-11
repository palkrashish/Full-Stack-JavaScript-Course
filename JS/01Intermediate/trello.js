const days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

// console.log(days[0]);
days.forEach( function (day, index) {

    // console.log(day, index);

    console.log( `  ${index+1} --- ${day}`);
 }
)

// Assignment for Months

console.log('====================================');
console.log("Example of Months");
console.log('====================================');

const Months = [ 'Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];

Months.forEach( function (month, index){
    console.log(`${index+1} ---- ${month}`);
})

// Assignment of ToDo list 

console.log('====================================');
console.log("Example of Todo List");
console.log('====================================');
const todoList = [ 'Wakeup', 'Bath', 'Take a news Paper', 'read a news paper'];

todoList.forEach( function (todo, index){
    console.log(` ${index+1} --- ${todo}`);
})