import Component from "../Component.js";

class CardTitle extends Component {
  constructor(parent, className, title) {
    super(parent, className, "h2");

    this.element.textContent = title;
  }
}

export default CardTitle;
