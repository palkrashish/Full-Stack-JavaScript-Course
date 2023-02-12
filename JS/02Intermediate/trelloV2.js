let myTodos = {
    days : 'Monday',
    meetings : 0,
    meetDone : 0,
}

let addMeeting = function (todo , meet = 0) {
    todo.meetings = todo.meetings + meet;
}

let meetDone = function ( todo, meet = 0){
    todo.meetDone = todo.meetDone - meet;
}

let resetDay =  function ( todo ){
    todo.meetings = 0;
    todo.meetDone = 0;
}

let getSummaryOfDay = function ( todo ){
    let meetLeft = todo.meetings + todo.meetDone;
    return ` You  have   ${meetLeft}  meeting today`
}

addMeeting( myTodos, 4)
meetDone (myTodos , 3);

console.log(getSummaryOfDay(myTodos));