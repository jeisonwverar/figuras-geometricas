import cuadrado from "./Componentes/cuadrado.js";
import menuButton from "./Componentes/menuButton.js";
import rectangulo from "./Componentes/rectangulo.js";
import Rombo from "./Componentes/rombo.js";
import triangulo from "./Componentes/triangulo.js";
import trapecio from "./Componentes/trapecio.js";
import ciruculo from "./Componentes/circulo.js";
window.addEventListener("DOMContentLoaded",()=>{
    
    menuButton('.header-button','.header-nav');


    //cuadrado formula
    cuadrado('.form-cuadrado [type="number"]','.form-submit','.result-cuadrado  span','.form-reset');
    rectangulo('.form-rectangulo [type="number"]','.form-submit-rectangulo','.result-rectangulo  span','.form-reset-rectangulo')
    triangulo('.form-triangulo [type="number"]','.form-submit-triangulo','.result-triangulo  span','.form-reset-triangulo');
    Rombo('.form-rombo [type="number"]','.form-submit-rombo','.result-rombo  span','.form-reset-rombo');
    trapecio('.form-trapecio [type="number"]','.form-submit-trapecio','.result-trapecio  span','.form-reset-trapecio');
    ciruculo('.form-circulo [type="number"]','.form-submit-circulo','.result-circulo  span','.form-reset-circulo');















});