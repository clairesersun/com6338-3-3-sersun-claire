var questionsArr = [
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
  
function runQuiz() {
    for (i = 0; i < questionsArr.length; i++) {
        if (confirm(questionsArr[i].question) === questionsArr[i].answer) {
            numCorrect++
        }
    } var score = Math.round((numCorrect/questionsArr.length) * 100) +'%'
    alert('Your quiz score is ' + score)
    numCorrect = 0
    }
