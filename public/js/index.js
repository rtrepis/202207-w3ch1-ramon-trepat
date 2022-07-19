import Personaje from "./Classes/Personajes.js";
import Button from "./components/Buttons/buttons.js";
import CardTitle from "./components/Card-Body/Card__Title.js";
import ListInfo from "./components/Card-Body/List__Info.js";
import StateIcon from "./components/Card-Body/State__Icon.js";
import Component from "./components/Component.js";
import Picture from "./components/Comunications/Picture.js";
import Comunications_text from "./components/Comunications/Text.js";
import personajes from "./utility/personajes.js";

//console.log(personajes);

const app = new Component(document.body, "app container", "div");

const chartersList = new Component(
  app.element,
  "characters-list row list-unstyled",
  "ul"
);

const charterCol = new Component(chartersList.element, "character col", "il");

const characterCard = new Component(
  charterCol.element,
  "card character__card",
  "div"
);

const pictureCard = new Picture(
  characterCard.element,
  "character__picture card-img-top",
  personajes[0].nombre,
  personajes[0].familia
);

const cardBody = new Component(characterCard.element, "card-body;", "div");

const emoji = new Component(characterCard.element, "emoji", "i");

const cardTitle = new CardTitle(
  cardBody.element,
  "character__name card-title h4",
  `${personajes[0].nombre} ${personajes[0].familia}`
);

const characterInfo = new Component(cardBody.element, "character__info", "div");

const listCharacter = new Component(
  characterInfo.element,
  "list-unstyled",
  "ul"
);

const InfoEdad = new ListInfo(
  listCharacter.element,
  "",
  `Edad: ${personajes[0].edad}  años`
);

const InfoEstado = new ListInfo(listCharacter.element, "", "Estado: ");

const stateIconUp = new StateIcon(InfoEstado.element, "fas fa-thumbs-down");

const stateIconDown = new StateIcon(InfoEstado.element, "fas fa-thumbs-up");

const characterOverlay = new Component(
  cardBody.element,
  "character__overlay",
  "div"
);

const listOverly = new Component(
  characterOverlay.element,
  "list-unstyled",
  "ul"
);

if (personajes[0].anyosReinado != undefined) {
  const infoReindado = new ListInfo(
    listOverly.element,
    "",
    `Años de reinado: ${personajes[0].anyosReinado}`
  );
}

if (personajes[0].arma != undefined) {
  const infoArma = new ListInfo(
    listOverly.element,
    "",
    `Arma: ${personajes[0].arma}`
  );
}

if (personajes[0].destreza != undefined) {
  const infoDestreza = new ListInfo(
    listOverly.element,
    "",
    `Destreza: ${personajes[0].destreza}`
  );
}

if (personajes[0].pelotismo != undefined) {
  const infoPeloteo = new ListInfo(
    listOverly.element,
    "",
    `Peloteo: ${personajes[0].pelotismo}`
  );
}

if (personajes[0].asesorado != undefined) {
  const infoAsesora = new ListInfo(
    listOverly.element,
    "",
    `Asesora: ${personajes[0].asesorado}`
  );
}

if (personajes[0].sirveA != undefined) {
  const infoSirve = new ListInfo(
    listOverly.element,
    "",
    `Sirve a: ${personajes[0].sirveA}`
  );
}

const characterActions = new Component(
  characterOverlay.element,
  "character__actions",
  "div"
);

const buttonHabla = new Button(
  characterActions.element,
  "character__action btn",
  "habla"
);

const buttonMuere = new Button(
  characterActions.element,
  "character__action btn",
  "muere"
);

const comunications = new Component(document.body, "comunications", "div");

//personajes.forEach((personaje) => {
new Comunications_text(
  comunications.element,
  "comunications__text display-1",
  personajes[0].comunicar()
);
new Picture(
  comunications.element,
  "comunications__picture",
  personajes[0].nombre,
  personajes[0].familia
);
//});

//console.log(comunications.element);
