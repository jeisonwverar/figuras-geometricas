import cuadrado from "./Componentes/cuadrado.js";
import menuButton from "./Componentes/menuButton.js";
import rectangulo from "./Componentes/rectangulo.js";
import Rombo from "./Componentes/rombo.js";
import triangulo from "./Componentes/triangulo.js";
import trapecio from "./Componentes/trapecio.js";
import ciruculo from "./Componentes/circulo.js";
import esfera from "./Componentes/esfera.js";
import cubo from "./Componentes/cubo.js";
import Paralelepipedo from "./Componentes/paralelepipedo.js";
import cilindro from "./Componentes/cilindro.js";
import cono from "./Componentes/cono.js";
window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  e.stopPropagation();

  try {
    menuButton(".header-button", ".header-nav");

    //cuadrado formula
    cuadrado(
      '.form-cuadrado [type="number"]',
      ".form-submit",
      ".result-cuadrado  span",
      ".form-reset"
    );
    rectangulo(
      '.form-rectangulo [type="number"]',
      ".form-submit-rectangulo",
      ".result-rectangulo  span",
      ".form-reset-rectangulo"
    );
    triangulo(
      '.form-triangulo [type="number"]',
      ".form-submit-triangulo",
      ".result-triangulo  span",
      ".form-reset-triangulo"
    );
    Rombo(
      '.form-rombo [type="number"]',
      ".form-submit-rombo",
      ".result-rombo  span",
      ".form-reset-rombo"
    );
    trapecio(
      '.form-trapecio [type="number"]',
      ".form-submit-trapecio",
      ".result-trapecio  span",
      ".form-reset-trapecio"
    );
    ciruculo(
      '.form-circulo [type="number"]',
      ".form-submit-circulo",
      ".result-circulo  span",
      ".form-reset-circulo"
    );
    esfera(
      '.form-esfera [type="number"]',
      ".form-submit-esfera",
      ".result-esfera  span",
      ".form-reset-esfera"
    );
    cubo(
      '.form-cubo [type="number"]',
      ".form-submit-cubo",
      ".result-cubo  span",
      ".form-reset-cubo"
    );

    Paralelepipedo(
      '.form-paralelepipedo [type="number"]',
      ".form-submit-paralelepipedo",
      ".result-paralelepipedo  span",
      ".form-reset-paralelepipedo"
    );

    cilindro(
      '.form-cilindro [type="number"]',
      ".form-submit-cilindro",
      ".result-cilindro  span",
      ".form-reset-cilindro"
    );

    cono(
      '.form-cono [type="number"]',
      ".form-submit-cono",
      ".result-cono  span",
      ".form-reset-cono"
    );
  } catch (error) {
    console.log(error);
  }
});
