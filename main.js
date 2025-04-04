import slider from "./Assets/carrusel.js";
slider();

const $services = document.getElementById("services");
const $template = document.getElementById("service-template").content;
const $fragment = document.createDocumentFragment();
const getData = async () => {
  const response = await fetch("Assets/data.json");
  const data = await response.json();
  console.log(data.servicios);
  data.servicios.forEach((el) => {
    $template.querySelector(".card__title").textContent = el.title;
    $template.querySelector(".card__subtitle").textContent = el.description;
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $services.appendChild($fragment);
};
getData();
