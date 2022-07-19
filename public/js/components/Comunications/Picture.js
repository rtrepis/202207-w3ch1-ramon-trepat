import Components from "../Components.js";

class Comunications_picture extends Components {
  constructor(parent, className, name, family) {
    super(parent, className, "img");

    this.element.src = `img/${name}.jpg`;
    this.element.alt = `${name} ${family}`;
  }
}

export default Comunications_picture;
