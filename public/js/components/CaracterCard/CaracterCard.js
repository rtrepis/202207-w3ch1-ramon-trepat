import Component from "../Component.js";

class CaracterCard extends Component {
  picture;
  src;
  alt;

  constructor(parent, className, name, family) {
    super(parent, className, "div");

    picture = this.element.createElement("img");
    src = `img/${name}.jpg`;
    alt = `${name} ${family}`;
    this.render();
  }
  render() {
    this.picture.element.src = this.src;
    this.picture.element.alt = this.alt;
  }
}

export 
