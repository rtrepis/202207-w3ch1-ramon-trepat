import Component from "../Component.js";
import Picture from "../Picture.js";
import CardBody from "./Card-Body/CardBody.js";

class CharacterCard extends Component {
  name;
  family;
  edad;
  picture;
  cardBody;
  emoji;

  constructor(parent, name, family, edad) {
    super(parent, "card character__card", "div");

    this.name = name;
    this.family = family;
    this.edad = edad;

    this.render();
  }
  render() {
    this.picture = new Picture(
      this.element,
      "character__picture card-img-top",
      this.name,
      this.family
    );

    this.cardBody = new CardBody(this.element, this.edad);

    this.emoji = new Component(this.element, "emoji", "i");
  }
}

export default CharacterCard;
