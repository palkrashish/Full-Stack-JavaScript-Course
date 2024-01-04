const arr = [1,2,3,4,5,6,7,8,9,10];

function double (x){
    return x * 2;
}

const doubleArr = arr.map(double)
console.log(doubleArr)


function isOdd (x){
    return x % 2;
}

const filterArr = arr.filter(isOdd)
console.log(filterArr)

