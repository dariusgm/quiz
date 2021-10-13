
/*
* Deselect all possible answers
*/
function unSelect() {
    const answers = document.querySelectorAll('answer-tag') 
    for (var i = answers.length - 1; i >= 0; i--) {
        answers[i].setAttribute('class', '')
    }       
}

function giveAnswer(event) {
    unSelect()
    this.setAttribute("class", "active")
}

function submitAnswer(event) {

}

function onLoaded() {
    const questionsTag = document.querySelector('questions-tag') 

    var questionTag = document.createElement('question-tag')
    questionTag.innerText = "How old are you?"
    questionsTag.append(questionTag)

    const answersTag = document.querySelector('answers-tag')

    for (var i = 3; i >= 0; i--) {
        var answerTag = document.createElement('answer-tag')
        answerTag.addEventListener("click", giveAnswer)
        answerTag.setAttribute("value", i)
        answerTag.innerText = "Answer " + i
        answersTag.append(answerTag)
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
    onLoaded();           
});