import Components from "./components/Components.js";
import Picture from "./components/Comunications/Picture.js";
import Text from "./components/Comunications/Text.js";
import personajes from "./utility/personajes.js";

console.log(personajes);

const app = new Components(document.body, "app container", "div");

const comunications = new Components(document.body, "comunications", "div");

personajes.forEach((personaje) => {
  new Comunications_text(
    comunications.element,
    "comunications__text display-1",
    personaje.comunicar()
  );
  new Comunications_picture(
    comunications.element,
    "comunications__picture",
    personaje.nombre,
    personaje.familia
  );
});

console.log(comunications.element);
