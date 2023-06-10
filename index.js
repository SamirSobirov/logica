let string = 0
let number = 0
let boolean = 0
let object = 0
let others = 0

let arr = [1, 2, false, 'heelo', 24, 'word', undefined, null, 'error', 22] 

let all = arr.filter(all => {
    if (typeof all === 'others') {
        others++
    }
    else if (typeof all === 'object') {
        object++
    }
    else if (typeof all === 'boolean') {
        boolean++
    }
    else if (typeof all === 'number') {
        number++
    }
    else if (typeof all === 'string') {
        string++
    }
})

console.log({others, object, boolean, number, string});
console.log(Math.max(others, object, boolean, number, string));

let newArray = []
arr.filter(i => {
    if (i) {
        newArray.push(i)
    }
})

console.log(newArray);