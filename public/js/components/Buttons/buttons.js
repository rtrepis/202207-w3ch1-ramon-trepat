import Component from "../Component.js";

class Button extends Component {
  textButton;

  constructor(parent, className, textButton) {
    super(parent, className, "button");

    this.textButton = textButton;
    this.render();
  }

  render() {
    this.element.textContent = this.textButton;
  }
}

export default Button;
