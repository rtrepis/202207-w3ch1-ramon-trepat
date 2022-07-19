import Components from "../Components.js";

class Comunications_picture extends Components {
  src;
  alt;

  constructor(parent, className, name, family) {
    super(parent, className, "img");

    this.src = `img/${name}.jpg`;
    this.alt = `${name} ${family}`;
    this.render();
  }
  render() {
    this.element.src = this.src;
    this.element.alt = this.alt;
  }
}

export default Comunications_picture;
