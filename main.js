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
document.addEventListener("DOMContentLoaded", (e) => getData());
document.addEventListener("click", (e) => {
  if (e.target.closest(".button")) {
    window.open(
      "https://api.whatsapp.com/send/?phone=528110219038&text=%C2%A1Hola+Estoy+interesado%2Fa+en+sus+servicios.+%C2%BFPodr%C3%ADan+brindarme+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0",
      "_blank"
    );
  }
});
