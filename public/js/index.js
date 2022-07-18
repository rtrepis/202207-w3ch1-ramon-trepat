import Components from "./components/Components.js";
import Comunications from "./components/Comunications/Comunications.js";
import personajes from "./utility/personajes.js";

console.log(personajes);

const app = new Components(document.body, "app container", "div");

const comunications = new Components(document.body, "comunications", "div");

new Comunications(
  comunications.element,
  "comunications__text display-1",
  "Una frase que dice alguin"
);

console.log(comunications.element);
