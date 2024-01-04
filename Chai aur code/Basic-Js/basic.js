// const numbers = [9, 29, 424, 13, 1,12,2,3,5,6];
// console.log(numbers)
// const result = numbers.shift()
// console.log(result)
// console.log(numbers.unshift(0,3,9))
// console.log(numbers)


// const result = numbers.find((num) => num >2)
// console.log(result)


// const result = numbers.sort()
// console.log(result)


// const fruits = [' Banana', 'Apple', 'Orange', 'Grapes']
// const allFruites = fruits.join("\t")
// // console.log(allFruites)


// let myYouTube = 'hiteshchoudhary.com'
// let another = myYouTube
// another = 'chaiaurcode'
// console.log(myYouTube)
// console.log(another)


// learning = 'js'
// console.log(learning)

// Data type checking

// let name = 'Ashish'

// console.log(typeof name);

// ------------------------------------MATH EXAMPLE ---------------------------------

// console.log(Math);
// console.log(Math.min(3,5,2,6,4,2,3));
// console.log(Math.max(3,5,2,6,4,2,3));

// console.log((Math.random()*10)+1)

// console.log(Math.floor  (Math.random()*10)+1)


// ----------------------DATE--------------------

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// ----------------------------How to define a specific date using Date------------------------

// let date = new Date(2023,0,21)

// console.log(date.toDateString())
// console.log(date.toLocaleDateString())

// const time =  Date.now()
// console.log(Math.floor(Date.now()/1000))


// ---------------------Array ---------------------------------

// let myArray = [1,2,3,4,5,6,7,8,9,10]
// console.log(myArray)
// console.log(myArray.reverse())

// -------------------------------Object---------------------------------

const symDisplay =  Symbol('value')
const userDetails = {
    name: 'Ashish',
    age: 18,
    [symDisplay]: 'value',
    hobbies: 'watching south moive',
    email: 'ashish@gmail.com',
    dayofLogin: ['Monday','Tuesday']
}
console.log(userDetails.name)
// console.log(userDetails.dayofLogin)
// console.log(userDetails[symDisplay])
// console.log(typeof userDetails[symDisplay])

userDetails.email = 'palkrashishatherategmail'
console.log(userDetails.email)
// Object.freeze(userDetails)
console.log(userDetails)


userDetails.Rewards = function(){
    console.log(`Welcome to my website ${this.name}`)
}
console.log(userDetails.Rewards())