import Component from "../Component.js";

class ListInfo extends Component {
  constructor(parent, className, info) {
    super(parent, className, "li");

    this.element.textContent = info;
  }
}

export default ListInfo;
