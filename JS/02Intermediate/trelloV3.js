let myTodos ={

    days : 'Monday',
    meetings : 0,
    meetDone : 0,

    // addMeeting: function(){
    //         console.log('Hey!! I am object of function');
    // }

//     addMeeting : function(){
//         console.log(this);
//     }
// }

addMeeting: function (num){
    this.meetings = this.meetings + num
},

summary: function (){
    return ` You have ${this.meetings}  meeting today `
}
}

// let myTodosTwo ={

//     days : 'Tuesday',
//     meetings : 10,
//     meetDone : 20,

//     // addMeeting: function(){
//     //         console.log('Hey!! I am object of function');
//     // }

//     addMeeting : function(){
//         console.log(this);
//     }
// }

// myTodos.addMeeting() // Hey!! I am object of function

myTodos.addMeeting(5)
// myTodosTwo.addMeeting()

console.log(myTodos.summary());


