import Component from "../Component.js";

class Picture extends Component {
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

export default Picture;
