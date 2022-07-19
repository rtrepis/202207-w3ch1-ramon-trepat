import Component from "../Component.js";

class StateIcon extends Component {
  constructor(parent, clasName, action) {
    super(parent, clasName, "i");

    this.element.textContent = action;
  }
}

export default StateIcon;
