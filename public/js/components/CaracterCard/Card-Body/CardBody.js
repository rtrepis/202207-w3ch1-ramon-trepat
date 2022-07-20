import CharacterCard from "../CharacterCard.js";
import Title from "../../Title.js";
import Component from "../../Component.js";

class CardBody extends Component {
  title;
  edad;
  cardTitle;

  constructor(parent, name, family, edad) {
    super(parent, "card-body", "div");

    this.title = `${this.name} + ${this.family}`;
    this.edad = edad;

    this.render();
  }

  render() {
    this.cardTitle = new Title(
      this.element,
      "character__name card-title h4",
      "h2",
      this.title
    );
  }
}

export default CardBody;
