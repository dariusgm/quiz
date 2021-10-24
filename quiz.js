function $(selector) {
    return document.querySelector(selector)
}

function correctTag() {
    return $('correct-tag')
}

function wrongTag() {
    return $('wrong-tag')
}

function leftTag() {
    return $('left-tag')
}

function questionTag() {
    return $("question-tag")
}

function questionsTag() {
    return $("questions-tag")
}

function answerTags() {
    return document.querySelectorAll("answer-tag")
}

function answersTag() {
    return $("answers-tag")
}

function submitTag() {
    return $('submit-tag')
}

function totalTag() {
    return $('total-tag')
}


function nextTag() {
    return $("next-tag")
}

function updateScore() {
    const questions = questionsTag()
    const total = questions.getAttribute("data-total")
    const correct = questions.getAttribute("data-pos")
    const wrong = questions.getAttribute("data-neg")
    const left = total - correct - wrong

    correctTag().innerText = "Correct: " + correct
    wrongTag().innerText = "Wrong: " + wrong
    leftTag().innerText = "Left: " + left
    totalTag().innerText = "Total : " + total
}

    
function getQuestionIndex() {
    return Math.floor(Math.random() * (myQuestions.length - 1))
}

function reset() {
    questionTag().remove()
    answerTags().forEach(function(e) {e.remove()})
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
    const answers = answerTags() 
    for (var i = answers.length - 1; i >= 0; i--) {
        answers[i].setAttribute('class', '')
    }       
}

function nextQuestion() {
    updateScore()
    reset()
    onLoaded()
    submitTag().removeAttribute("style")
    nextTag().setAttribute("style", "display:none;")
}

function highlightCorrectAnwer(correctAnswer) {
    const allAnswers = answerTags() 

    for (var i = allAnswers.length - 1; i >= 0; i--) {
        
        allAnswers[i].removeAttribute('class')
        allAnswers[i].removeEventListener('click', giveAnswer)

        if (allAnswers[i].innerText == correctAnswer) {
            allAnswers[i].setAttribute('class', 'blink')
        }
    }
    
}

function increaseAnswerCount(correct) {
    const question = questionsTag()
    if (correct) {
        question.setAttribute("data-pos", parseInt(question.getAttribute("data-pos")) + 1)
    } else { 
        question.setAttribute("data-neg", parseInt(question.getAttribute("data-neg")) + 1)       
    }
}

function submitAnswer(event) {
    submitDisable()
    const seletedAnswer = document.querySelector('answer-tag.active')
    if (seletedAnswer == null) {
        alert("please select an answer before submitting")
        return
    }

    const question = questionsTag()
    const correctAnswer = question.getAttribute('answer')
    const answerId = question.getAttribute('answer-id')
    const givenAnswer = seletedAnswer.innerText
    highlightCorrectAnwer(correctAnswer)
    increaseAnswerCount(correctAnswer == givenAnswer)

    window.myQuestions.splice(answerId, 1)

    submitTag().setAttribute("style", "display:none")
    nextReady()
    updateScore()
}


function submitReady() {
    const submit = submitTag()
    submit.disabled = false;
    submit.setAttribute("style", "color:black;")
    submit.addEventListener("click", submitAnswer)
}

function submitDisable() {
    const submit = submitTag()
    submit.disabled = true;
    submit.setAttribute("style", "color:white;")
    submit.removeEventListener("click", submitAnswer)   
}

function nextReady() {
    const next = nextTag()
    next.disabled = false;
    next.setAttribute("style", "")    
}

function nextDisable() {
    const next = nextTag()
    next.disabled = true
    next.setAttribute("style", "display:none")
}



function giveAnswer(event) {
    unSelect()
    this.setAttribute("class", "active")
    submitReady()
    return
}


function onLoaded() {
    nextDisable()
    submitTag().removeAttribute('style')
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

    const questions = questionsTag()
    var questionTag = document.createElement('question-tag')
    questionTag.innerText = question
    questionTag.setAttribute("class", "center")
    questions.setAttribute("answer", correct)
    questions.setAttribute("answer-id", questionIndex)
    questions.append(questionTag)

    const answersT = answersTag()

    for (var i = shuffeldAnswers.length - 1; i >= 0; i--) {
        var answer = document.createElement('answer-tag')
        answer.addEventListener("click", giveAnswer)
        answer.innerText = shuffeldAnswers[i]
        answersT.append(answer)
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
    window.myQuestions = [...questions];
    const questionsTag = document.querySelector('questions-tag')
    questionsTag.setAttribute("data-pos","0")
    questionsTag.setAttribute("data-neg","0")
    questionsTag.setAttribute("data-left", window.questions.length)
    questionsTag.setAttribute("data-total", window.questions.length) 
    updateScore()
    onLoaded();
    nextTag().addEventListener("click", nextQuestion)           
});