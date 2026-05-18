// 1

const arr = ["apple", "kiwi", "mango", "orange"]

function logItems(array){
    for(let i = 1; i < arr.length; i++){
        console.log(`1. ${i} -- ${array[i]}`)
    }
}

logItems(arr)