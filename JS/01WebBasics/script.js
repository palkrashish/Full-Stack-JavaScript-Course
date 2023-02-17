// alert("Hello I'm Ashish");
// console.log(document);
// console.log(document.body);
// console.log(document.title);
// console.log(document.width  );
// console.log(document.documentURI);


// console.log(document.title);
// document.title = "I got changed" // with the help this title will be change

// WE HAVE TO UNDERSTAND THESE THING IT WILL BE VARY HELPFUL TO SELECTING OR WORKING IN DOM 
// document.getElementById
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll

// const myResult = document.getElementById('idone');
// const myResult1 = document.getElementsByClassName('classone');
// // const myResult = document.querySelectorAll('p');
// let myResult = document.querySelector('#idone')
// console.log(myResult);
// // console.log(myResult1);

//  CHANGING ALL TEXT USING LOOP

// const changeResult = document.querySelector('p')
// changeResult.textContent =' I am changed text '

const changeResult = document.querySelectorAll('p');

changeResult.forEach( function(p){
    p.textContent = 'Now, all text changed using for each method'
} )
