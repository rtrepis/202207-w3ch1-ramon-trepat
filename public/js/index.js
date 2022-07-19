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

for (let i = 0; i < personajes.length - 2; i += 1) {
  const charterCol = new Component(chartersList.element, "character col", "il");

  const characterCard = new Component(
    charterCol.element,
    "card character__card",
    "div"
  );

  const pictureCard = new Picture(
    characterCard.element,
    "character__picture card-img-top",
    personajes[i].nombre,
    personajes[i].familia
  );

  const cardBody = new Component(characterCard.element, "card-body;", "div");

  const emoji = new Component(characterCard.element, "emoji", "i");

  const cardTitle = new CardTitle(
    cardBody.element,
    "character__name card-title h4",
    `${personajes[i].nombre} ${personajes[i].familia}`
  );

  const characterInfo = new Component(
    cardBody.element,
    "character__info",
    "div"
  );

  const listCharacter = new Component(
    characterInfo.element,
    "list-unstyled",
    "ul"
  );

  const InfoEdad = new ListInfo(
    listCharacter.element,
    "",
    `Edad: ${personajes[i].edad}  años`
  );

  const InfoEstado = new ListInfo(listCharacter.element, "", "Estado: ");

  const stateIconUp = new Component(
    InfoEstado.element,
    "fas fa-thumbs-down",
    "i"
  );

  const stateIconDown = new Component(
    InfoEstado.element,
    "fas fa-thumbs-up",
    "i"
  );

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

  if (personajes[i].anyosReinado != undefined || null) {
    const infoReindado = new ListInfo(
      listOverly.element,
      "",
      `Años de reinado: ${personajes[i].anyosReinado}`
    );
  }

  if (personajes[i].arma != undefined || null) {
    const infoArma = new ListInfo(
      listOverly.element,
      "",
      `Arma: ${personajes[i].arma}`
    );
  }

  if (personajes[i].destreza != undefined || null) {
    const infoDestreza = new ListInfo(
      listOverly.element,
      "",
      `Destreza: ${personajes[i].destreza}`
    );
  }

  if (personajes[i].pelotismo != undefined || null) {
    const infoPeloteo = new ListInfo(
      listOverly.element,
      "",
      `Peloteo: ${personajes[i].pelotismo}`
    );
  }

  if (personajes[i].asesorado != undefined || null) {
    const infoAsesora = new ListInfo(
      listOverly.element,
      "",
      `Asesora: ${personajes[i].asesorado}`
    );

    // console.log(personajes[i].asesorado);
  }

  if (personajes[i].sirveA != undefined || null) {
    const infoSirve = new ListInfo(
      listOverly.element,
      "",
      `Sirve a: ${personajes[i].sirveA}`
    );

    //console.log(personajes[i].sirveA);
  }

  /*
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

  */

  const comunications = new Component(document.body, "comunications", "div");

  //personajes.forEach((personaje) => {
  new Comunications_text(
    comunications.element,
    "comunications__text display-1",
    personajes[i].comunicar()
  );
  new Picture(
    comunications.element,
    "comunications__picture",
    personajes[i].nombre,
    personajes[i].familia
  );
  //});
}

//console.log(comunications.element);
