class Component {
  element;
  constructor(parent, className, tag) {
    this.element = document.createElement(tag);

    this.element.className = className;

    parent.appendChild(this.element);
  }
}

export default Component;
