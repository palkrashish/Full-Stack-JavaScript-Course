const path = require ('path')

console.log(path.basename(__filename))
console.log(path.basename(__filename,'.js'))

console.log(path.basename(__dirname))
console.log(path.basename(__dirname, 'opp'))

console.log(path.normalize(__filename))

