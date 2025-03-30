export default function slider() {
  const $slides = document.querySelectorAll(".slider-slide");
  let i = 0;
  let sliderInterval = null;
  const $section = document.querySelector("section[data-scroll-spy]");
  //const $sections = document.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    const [entry] = entries; //? Desestructuramos el array de entries para obtener el primer elemento
    if (entry.isIntersecting) {
      sliderInterval = setInterval(() => {
        console.log("Intervalo activado"); //? Para verificar que el intervalo se esta ejecutando
        $slides[i].classList.remove("active"); //? Quitamos la clase active al slide actual con ayuda de la variable i que es la que nos indica en que slide estamos
        i++; //? Decrementamos la variable i para movernos al slide anterior
        if (i >= $slides.length) i = 0; //? Si estamos en el ultimo slide, nos movemos al primer slide

        $slides[i].classList.add("active"); //? Agregamos la clase active al slide siguiente
      }, 3000);
    } else {
      if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null; // Reseteamos la variable
        console.log("No está en el viewport");
      }
      $slides[i].classList.remove("active"); //? Quitamos la clase active al slide actual con ayuda de la variable i que es la que nos indica en que slide estamos
      $slides[1].classList.add("active"); //? Agregamos la clase active al slide siguiente
    }
    //Verificamos el atributo isIntersecting del objeto entry,
    // si es true agregamos la clase active al enlace que tiene el href con el id del elemento que esta en el viewport
  };
  const options = {
    //root
    //rootMargin
    threshold: [0.5],
    //El threshold es un array que contiene un valor entre 0 y 1 que indica el porcentaje de visibilidad que debe tener el elemento para que se dispare el evento
  };
  const observer = new IntersectionObserver(cb, options);
  console.log(observer);
  //$sections.forEach((el) => observer.observe(el));
  observer.observe($section);
}
