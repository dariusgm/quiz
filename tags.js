class AnwserTag extends HTMLElement {
  constructor() {
    super();
  }
}

class QuestionTag extends HTMLElement {
  constructor() {
    super();
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