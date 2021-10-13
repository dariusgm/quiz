class AnswerTagComponent extends HTMLElement {
  constructor() {
    super();
    this.innerText = this.getAttribute('value');
  }
}

customElements.define(`answer-tag`, AnswerTagComponent);