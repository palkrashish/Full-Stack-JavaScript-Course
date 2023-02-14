// const exampleHello = function ( name ) {

//     return "Hey this simeple function:" + name +""
// }

// console.log( exampleHello("Ramesh") );

const exampleHello = (name) => {
  return ` Hey "${name}" , Welcome to my Page!`;
};

// console.log(exampleHello("Ashish")); // Hey "Ashish" , Welcome to my Page!

const todos =  [
{
    title: 'Buy a Amul Milk',
    isDone: true,
},
 {
    title: 'Sugger',
    isDone: true,

 },
 {
    title: 'Haldiram namkeen',
    isDone: false   
 }
]

// const resultTodo = todos.filter( (todo) =>  {
//     return todo.isDone === true;
    
// } ) 

const resultTodo = todos.filter( (todo) => todo.isDone === true ) 
// Same out put line 30
// [
//     { title: 'Buy a Amul Mile', isDone: true },
//     { title: 'Sugger', isDone: true }
//   ]
// console.log(resultTodo);

const resultTitle = todos.filter( (resultT) => resultT.title == 'Buy a Amul Milk')
// const resultTitle1 = todos.filter( (resultT) => resultT.title === 'Buy a Amul Milk' )

console.log(resultTitle);
// console.log(resultTitle1);


