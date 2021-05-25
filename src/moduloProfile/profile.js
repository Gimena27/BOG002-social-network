import{showLogin} from '../moduloAuthentication/muro.js';
export const settingsUsers =()=>{
    console.log("settingsUsers");
    let select = document.createElement("div");
    select.innerHTML = "";
   const profileTemplate= `<h1>Animalndia</h1>
   <img src="IMG/gato.jpg" alt="gato">
   <button>Selecciona tu foto de perfil</button>
   <button type="menu">Selecciona tu especie</button>
   <ul class="menuEspecies">
              <li><a id="linkMenuEspecies" href="#">Selecciona tu especie</a>
                  <ul class="subMenuEspecies" id="subMenuEspecies">
                      <li><a href="#">Caninos</a></li>
                      <li><a href="#">Felinos</a></li>
                      <li><a href="#">Aves</a></li>
                      <li><a href="#">Mamiferos</a></li>
                      <li><a href="#">Exoticos</a></li>
                      <li><a href="#">Otros</a></li>
                  </ul>
              </li>
          </ul>
   <button id="irAlMuro">Siguiente</button>`;
   select.innerHTML = profileTemplate;
   const btnMuro= select.querySelector("#irAlMuro");
   btnMuro.addEventListener("click", () => {
    window.location.hash = "#/post"
   });
   
   return select;
  }





