function updateScore(correct, wrong, left) {
    document.querySelector('correct-tag').innerText = "Correct: " + correct
    document.querySelector('wrong-tag').innerText = "Wrong: " + wrong
    document.querySelector('left-tag').innerText = "Left: " + left
}

function getQuestionIndex() {
    return Math.floor(Math.random() * questions.length)
}

function reset() {
    document.querySelector("question-tag").remove()
    document.querySelectorAll("answer-tag").forEach(function(e) {e.remove()})
}


/**
 * Source: https://javascript.info/task/shuffle
 * Changed to functional approach, returning a new random ordered array
 * */
function shuffle(array) {
  var  arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }

  return arrayCopy
}

function unSelect() {
    const answers = document.querySelectorAll('answer-tag') 
    for (var i = answers.length - 1; i >= 0; i--) {
        answers[i].setAttribute('class', '')
    }       
}

function submitAnswer(event) {
    submitDisable()
    const seletedAnswer = document.querySelector('answer-tag.active')
    if (seletedAnswer == null) {
        alert("please select an answer before submitting")
        return
    }

    const questionTag = document.querySelector('question-tag')
    const correctAnswer = questionTag.getAttribute('answer')
    const answerId = questionTag.getAttribute('answer-id')
    const givenAnswer = seletedAnswer.innerText
    
    if (correctAnswer == givenAnswer) {
        window.pos = window.pos + 1
    } else {
        window.neg = window.neg + 1    
    }


    window.myQuestions.splice(answerId, 1)
    updateScore(window.pos, window.neg, window.myQuestions.length)
    reset()
    onLoaded()
}


function submitReady() {
    const submitTag = document.querySelector('submit-tag')
    submitTag.disabled = false;
    submitTag.setAttribute("style", "color:black;")
    submitTag.addEventListener("click", submitAnswer)
}

function submitDisable() {
    const submitTag = document.querySelector('submit-tag')
    submitTag.disabled = true;
    submitTag.setAttribute("style", "color:white;")
    submitTag.removeEventListener("click", submitAnswer)   
}



function giveAnswer(event) {
    unSelect()
    this.setAttribute("class", "active")
    submitReady()
    return
}


function onLoaded() {
    const questionIndex = getQuestionIndex()
    const record = myQuestions[questionIndex]
    const question = record['q']
    const answers = record['a']
    const source = record['s']
    const correct = answers[0]
    const shuffeldAnswers = shuffle(answers)

    const sourceTag = document.querySelector('source-tag a')
    sourceTag.href = source
    sourceTag.target = "_blank"
    sourceTag.innerText = source

    const questionsTag = document.querySelector('questions-tag')
    var questionTag = document.createElement('question-tag')
    questionTag.innerText = question
    questionTag.setAttribute("class", "center")
    questionTag.setAttribute("answer", correct)
    questionTag.setAttribute("answer-id", questionIndex)
    questionsTag.append(questionTag)

    const answersTag = document.querySelector('answers-tag')

    for (var i = shuffeldAnswers.length - 1; i >= 0; i--) {
        var answerTag = document.createElement('answer-tag')
        answerTag.addEventListener("click", giveAnswer)
        answerTag.innerText = shuffeldAnswers[i]
        answersTag.append(answerTag)
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
    window.myQuestions = [...questions];
    window.pos = 0
    window.neg = 0
    document.querySelector('total-tag').innerText = "Total: " + questions.length
    updateScore(window.pos, window.neg, window.myQuestions.length)
    onLoaded();           
});