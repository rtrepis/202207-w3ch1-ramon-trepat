import Component from "../Component.js";

class Comunications_text extends Component {
  constructor(parent, className, frase) {
    super(parent, className, "p");

    this.element.textContent = frase;
  }
}

export default Comunications_text;
