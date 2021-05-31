import{showLogin} from '../moduloAuthentication/muro.js';
export const settingsUsers =()=>{
    console.log("settingsUsers");
    let select = document.createElement("div");
    select.innerHTML = "";
   const profileTemplate= `
   <h1>Animalandia</h1>
   <img id="imgUsuario" src="IMG/gato.jpg" alt="gato">
   <button>Selecciona tu foto de perfil</button>
   <h2>Selecciona tu especie</h2>
   <select name="Selecciona tu especie">
        <option>Caninos</option>
        <option>Felinos</option>
        <option>Aves</option>
        <option>Mamiferos</option>
        <option>Exoticos</option>
        <option>Otros</option>
    </select>
   <button id="irAlMuro">Siguiente</button>`;
   select.innerHTML = profileTemplate;
   const btnMuro= select.querySelector("#irAlMuro");
   btnMuro.addEventListener("click", () => {
    window.location.hash = "#/post"
   });
   
   return select;
  }





