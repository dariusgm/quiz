
/*
**/

// q = question, a = answer(s), s = source 
const questions = [
    {"q": "how are you?", "a": ["fine", "bad", "lol", "wrong"], "s": "http://example.com"},
    {"q": "2 how are you?", "a": ["2 fine", "2 bad", "2 lol", "2 wrong"], "s": "http://example.com"}
] 

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

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }

  return arrayCopy
}

/*
* Deselect all possible answers
*/
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

    const correctAnswer = document.querySelector('question-tag').getAttribute('data')
    const givenAnswer = seletedAnswer.innerText
    
    if (correctAnswer == givenAnswer) {
        alert("correct")
    } else {
        alert("wrong, correct answer was: " + correctAnswer)
    }

    reset()
    onLoaded()
}


function submitReady() {
    const submitTag = document.querySelector('submit-tag')
    submitTag.disabled = false;
    submitTag.addEventListener("click", submitAnswer)
}

function submitDisable() {
    const submitTag = document.querySelector('submit-tag')
    submitTag.disabled = true;
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
    const record = questions[questionIndex]
    const question = record['q']
    const answers = record['a']
    const source = record['s']
    const correct = answers[0]
    const shuffeldAnswers = shuffle(answers)

    const questionsTag = document.querySelector('questions-tag')
    var questionTag = document.createElement('question-tag')
    questionTag.innerText = question
    questionTag.setAttribute("class", "center")
    questionTag.setAttribute("data", correct)
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
    onLoaded();           
});