class AnwserTag extends HTMLElement {
  constructor() {
    super();
    this.innerText = this.getAttribute('value');
  }
}

class QuestionTag extends HTMLElement {
  constructor() {
    super();
    this.innerText = this.getAttribute('value');
  }
}

class SubmitTag extends HTMLElement {
  constructor() {
    super();
  }
}


customElements.define(`question-tag`, QuestionTag);
customElements.define(`answer-tag`, AnwserTag);
customElements.define(`submit-tag`, SubmitTag);