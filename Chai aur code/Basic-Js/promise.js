// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task is Completed");
//   }, 1000);
//   resolve();
// });

// promiseOne.then(() => {
//   console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task is completed 2");
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUser();


// console.log(eval(3+2));
// var userJSON = {'name': 'Prabir', age: 25}
// var userString = JSON.stringify(userJSON);
// console.log(userString); //"{"name":"Prabir","age":25}" 

// var msg;
// function greeting() {
// alert('Heyy Prabir');
// }
// function start() {
// msg =setTimeout(greeting, 4000);
// }
// function stop() {
// clearTimeout(msg);
// }

// generate number

console.log(Math.floor(Math.random()*6)+1);

// const userDetals ={
//     name: 'Ashish',
//     location: 'Noida',
//     age: 29
// }
// console.log(userDetals.name[0])
// console.log(Object.keys(userDetals))

var msg = "Good morning";
function greeting() {
msg = "Good Evening";
console.log(msg);
}
greeting();