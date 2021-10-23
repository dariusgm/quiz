function showAll(event) {
    const table = document.querySelector("table")
    for (var i = window.questions.length - 1; i >= 0; i--) {
        const q = window.questions[i]
        const row = document.createElement("tr")
        const source = document.createElement("td")
        source.innerText = q['s']
        row.append(source)

        const question = document.createElement("td")
        question.innerText = q['q']
        row.append(question)

        for (var k = q['a'].length - 1; k >= 0; k--) {
            const answer = document.createElement("td")
            answer.innerText = q['a'][k]
            row.append(answer)
        }

        table.append(row)
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    showAll();
});