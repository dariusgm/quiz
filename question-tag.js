class QuestionCard extends HTMLElement {
  constructor() {
    super();
    this.innerText = this.getAttribute('value');
  }
}

customElements.define(`question-tag`, QuestionCard);