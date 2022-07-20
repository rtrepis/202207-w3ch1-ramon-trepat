import Component from "./Component.js";

class Title extends Component {
  constructor(parent, className, h, title) {
    super(parent, className, h);

    this.element.textContent = title;
  }
}

export default Title;
