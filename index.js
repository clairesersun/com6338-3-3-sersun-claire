const questionsArr = [
    {
        question: 'JavaScript is the best language',
        answer: true
    }, {
        question: 'JavaScript can directly change the HTML file',
        answer: false
    }, {
        question: 'Semicolons are optional but recommended if using lne breaks in JavaScript',
        answer: true
    }, {
        question: 'Starting the process with pseudocode is meant to make coding in JavaScript harder',
        answer: false
    }, {
        question: 'You cannot hoist expressions in JavaScript',
        answer: true 
    }
]

let numCorrect = 0

let runQuiz = () => {
    for (i = 0; i < questionsArr.length; i++) {
        confirm(questionsArr[i].question)
        if (questionsArr[i].question) {
            numCorrect++
            console.log(numCorrect)
        }
    }
}