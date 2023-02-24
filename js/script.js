//STRING
//с помощью \ экранируется кавычка '
// const str1 = 'I\'m OK' 

// //  \n символ переноса строки
// const str2 = "Саша \nсказал: \"Привет\""

// //шаблонная строка выполняется с помощью `` кавычек
// const str3 = `I'm say ${str1}`

// console.log(str1, typeof(str1))
// console.log(str2)
// console.log(str3)



//NUMBER
// + - * / ** - степень
// const num1 = 75 + 15
// const num2 = 79 * 9
// // alert(num1)
// // alert(num2)
// //От -(2**53 -1) до (2**53 - 1)

// //Nan
// const rem = 8 * 'a'
// console.log(rem)

// //BIGINT
// const bigint = 1035565165656511651651516511156165n
// console.log(bigint)
// console.log()




//BOOLEAN
//true / false
// > < >= <=  >==  >== == ===
// 'a' будет больше 'AAA' (сравнивание идет по таблице UTF-8)
// const bool = 'a' > 'AAA'
// console.log(bool)


//NULL
//выведет object
// const empty = null
// console.log(empty, typeof empty)

// //UNDEFINED
// let box
// console.log(box, typeof box)

//SYMBOL
//  const uniq = Symbol('id')
//  const uniq2 = Symbol('id')
//  console.log(uniq)

//OBJECT

// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }
// // console.log(obj.name)
// // console.log(obj['name'])

// obj.job = "Google"
// // console.log(obj)

// const arr = ["Аня", 18, false]
// arr[3] = "Facebook"
// console.log(arr)
// console.log(arr[0])


// const variant = "option1"

// console.log(5 == '5')
// // когда сравнив число и строка, число приводится к строке
// // console.log('5' == '5') true

// console.log(5 === '5')
// //сравниваются типы данных, будет false

// console.log(null == 0)
// //false

// const username = prompt('Who you are?', 'anonim')
// // при отмене = null
// if (username === 'admin') {
//     alert('Hello boss!')
// } else if(username === 'anonim' || !username) {
//     alert("I don't know you...")
// } 
// else {
//     alert(`Hi ${username}`)
// }

// const counts = prompt('До скольки нужно считать?', 10)
// let i = 10

// while (i <= counts) {
//     console.log(i++)
//     // i++
// }

// do {
//     console.log(i++)
// } while (i <= counts)

// let arr = [4,5,6]
// arr.push(7)
// console.log(arr[1])

// const arr = []

// for (let i = 1; i <= 50; ++i) {
//     arr.push(i)
// }
// // console.log(arr)
// const newArr = []

// for (item of arr) {
//     const mark = item % 3
//     if (!mark) {
//         newArr.push(item)
//     }
// }
// console.log(newArr)

// const obj =  {
//     name: "Sasha",
//     age: 25,
//     city: "Kyiv"
// }

// for (key in obj) {
//     console.log(key,obj[key])
// }

// const randomValue1 = (Math.random() * 100).toFixed(0)
// const randomValue2 = (Math.random() * 100).toFixed(0)
// const isPlus = Math.random() > 0.5
// // console.log(randomValue1)

// const gameElements = document.getElementById("my_game").children
// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else (
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// )

// console.dir(gameElements)

//declaration
// function screem() {
//     alert("AAAAAAAAAAA")
//     return "ok"
// }
// // screem()
// console.log(screem())

// функция отработает из любого места если она объявлена как declaration
// console.log(screem(8,10)) 
// function screem(a, b) {
//     // const result = a * b
//     // return result
//     return a * b
// }

// // screem()
// console.log(screem(3,10))

// expression
// wowScreem()
// const wowScreem = function () {
//     alert("WOOOOOOW")
// }
// wowScreem()

//arrow
// const arrow = () => {
//     alert('arrow in the sky')
// }
// arrow()

//ИГРА
//Нажав на кнопку игра запускается, генерируется задача
//пользователь может ввести ответ, должна появится кнопка проверить

//Нажав кнопку проверить мы сравниваем ввод пользователя с ответом
//Вывести результат и правильное значение, сменить кнопку и начать заново

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)

    // let symbol 
    // if(Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = '-'
    // }
    const symbol = (Math.random() > 0.5) ? '+' : '-'
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskinProcess = !gameState.taskinProcess
}

const playGameElements = document.getElementById("my_game").children
const title = playGameElements[0]
const userTask = playGameElements[1]
const userAnswer = playGameElements[2]
const btnGame = playGameElements[3]

const gameState = {
    taskinProcess: false,
    rightAnswer: null,
}
// console.log(gameState)

const startGameFunc = () => {
    if (!gameState.taskinProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        // генерируем задачу и ответ
        // const task = getTask()
        // показываю задачу пользовтелю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        userTask.hidden = false
        btnGame.innerText = 'Проверить'
        toggleGameState()
        // меняю кнопку и состоние
    } else {
        // сравнить ответ пользователя с правильным 
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        // вывести поздрваление
        title.innerText = isRight ? "Вы победили" : "Вы проиграли"
        // поменять кнопку и состояние
        btnGame.innerText = 'Начать заново!'
        toggleGameState()
    }
}

btnGame.addEventListener('click', startGameFunc)
userAnswer.addEventListener('keydown', (e) => {
    // console.log(e)
    if (e.key === 'Enter') {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
        title.innerText = 'Play Game'
        btnGame.innerText = 'Начать'
        userAnswer.hidden = true
        userTask.hidden = true
    }
})

const chooseEl = document.querySelectorAll(".choose_block-container > div")
const counter = document.querySelector(".choose_block span")
console.log(counter)

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counter.innerText = this.countElements
    }
}
// const changeCount = (value) => {
//     choosedState.countElements += value
//     counter.innerText = choosedState.countElements
// }

const eventFunc = (e) => {
    // выбрать елемент, выделить его с помощью класа
    // запустить счетчик
    if (e.target.className === '') {
        e.target.className = 'choosed_element'
        choosedState.setCountValue(1)
    } else {
        e.target.className = ''
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < chooseEl.length; i++) {
    chooseEl[i].addEventListener('click', eventFunc)
}
// chooseEl[2].removeEventListener('click', eventFunc)

const timeIsOver = () => {
    alert('Время вышло')
}
// setTimeout(timeIsOver, 2000)

// const alarm = setInterval(timeIsOver, 3000)

// let wantToSleep = confirm('Хотите ли вы спать?')

// const alarm = setInterval(() => {
//     let wantToSleep = confirm('Хотите ли вы спать?')
//     if (wantToSleep) {
//         console.log('tic')
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)
// clearInterval(alarm)

const postsBlock = document.querySelector('.posts_block-container')
const showPostsBTN = document.querySelector('.posts_block button')



const func = () => 5


function addPost(title, body) {
    const postsItem = document.createElement('p')
    const postsTitle = document.createElement('h3')
    const postsBody = document.createElement('span')

    postsTitle.innerText = title
    postsBody.innerText = body

    postsBlock.append(postsItem)
    postsItem.append(postsTitle, postsBody)
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            for (item of data) {
                addPost(item.title, item.body)
            }
            // addPost(data[7].title, data[7].body)
        })
        .catch(err => console.log(err.message))

}

// function createPost(title, body, userId) {
//     fetch('https://jsonplaceholder.typicode.com/posts'), {
//             method: 'POST',
//             body: JSON.stringify({
//                 // title: title,
//                 // body: body,
//                 // userId: userId,
//                 title,
//                 body,
//                 userId,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         }
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => console.log(err.message))
// }
// createPost('title', 'body', 15)

// showPostsBTN.onclick = () => {
//     getPosts()
// }
getPosts()