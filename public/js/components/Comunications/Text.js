import Components from "../Components.js";

class Comunications_text extends Components {
  constructor(parent, className, frase) {
    super(parent, className, "p");

    this.element.textContent = frase;
  }
}

export default Comunications_text;
