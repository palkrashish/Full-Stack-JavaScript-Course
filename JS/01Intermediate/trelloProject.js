// const days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];

// // console.log(days.length-1);

// for (let index = 0; index < days.length; index++) {
//     const element = days[index];
//     // console.log(index);  
//     console.log(element , index);  
// }


// ASSIGNMENT Let's see


const todoList = []

todoList.push ('Buy Amul Milk from Banti Shop');
todoList.push ('Clean the Hall room');
todoList.push ('Bath');
todoList.push ('Now 11:30  going to sleep mood slowly slowly 😂😂');

todoList.forEach( function (task, index) {

    console.log(`You task is no : ${index +1}, "${task}"`);

} )