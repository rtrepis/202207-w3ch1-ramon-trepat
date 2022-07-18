import Components from "../Components.js";

class Comunications extends Components {
  constructor(parent, className, frase) {
    super(parent, className, "p");

    this.element.textContent = frase;
  }
}

export default Comunications;
