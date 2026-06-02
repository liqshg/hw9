// 1

const arr = ["apple", "kiwi", "mango", "orange"]

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`1. ${i} -- ${array[i]}`)
    }
}

logItems(arr)


// 2

function calculateEngravingPrice(message, pricePerWord) {
    const word = message.split(" ")
    console.log("2.", word.length * pricePerWord)
}

calculateEngravingPrice("hi my name is lisa", 5)

// 3

const str = "I really love JS"
function findLongestWord(string) {
    let result = ""
    for (const word of string.split(" ")) {
        if (word.length > result.length) {
            result = word
        }
    }
    return result
}

console.log("3.", findLongestWord(str))


// 4

function formatString(string) {
    if (string.length <= 40) {
        console.log("4.", string)
    } else if (string.length > 40) {
        console.log("4.", string.slice(0, 40) + "...")
    }
}

formatString("I really love JS it's the best coding lang ever")
formatString("I really love JS")


// 5

function checkForSpam(message) {
    message.toLowerCase()
    if (message.includes("spam") || message.includes("sales")) {
        console.log("5.1.", true)
    } else {
        console.log("5.2.", false)
    }
}

checkForSpam("hi i'm offering a new spam")
checkForSpam("hi i'm offering a new idea")


// 6

let input
const numbers = [];
let total = 0;

while (true) { //бесконечно пока тру
    
    if (input === null) { //есди в инпут ничего не написано (нажали отмена)
        break
    }

    input = prompt("your number:")
    numbers.push(Number(input)) //в конец масива числа
}

for (const num of numbers) {
    total += num
}

console.log("6.", total)


// 7

const logins = ["max123", "liqshg", "milx"]

function isLoginValid(login) {
    if (login.length >= 4 && login.length <= 16) {
        return true
    } else {
        return false
    }
}

function isLoginUnique(allLogins, login) {
    for (const log of allLogins) {
        if (log === login) {
            return false
        }
    }
    return true
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів'
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!'
    }
    logins.push(login)
    return 'Логін успішно доданий!'
}

console.log("7", addLogin(logins, "abracada"))
console.log("7", logins)