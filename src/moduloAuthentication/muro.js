import { signOutSesion } from '../lib/index.js';
export function showLogin() {
    let select = document.querySelector("main");
    let fondo= document.querySelector("html");
    let body= document.querySelector("body");
    select.innerHTML = "";
    //fondo.style=`background-color:white;`;
    //select.style=`background: rgba(30, 130, 192, 0.58);`;
    //body.style=`margin-top: 0px;
    //background:transparent;`;
    const muro = `
    <h1 id="tituloMuro">Animalandia</h1>
    <div id="contenedorBtnSettings">
    <button type="button" id="editarPerfil"><img src="../src/IMG/post.png" alt="post">Publica</button>
    <button type="button" id="salir"><img src="../src/IMG/exit.png" alt="exit">Salir</button> 
    </div>
    
    <div id="contenedorMuro">
    <div id="menuToggle" class="menuToggle">
       <div class="inicio"></div>
    </div> 
    <div¿Cómo va tu día? id="muro">
    <h4>¿Que estas pensando<h4>
    <input type="text" id="mensaje"></input><br>
    <button type="button" id="postear">Enviar</button>
    </div>
    </div>
    `;
    select.innerHTML = muro;
    window.location.hash = '#/muro';
}
export function signOut() {
    const salir = document.querySelector("#salir");
    salir.addEventListener("click", () => {
        signOutSesion()
        // window.location = '';
        // location.reload()
        window.location.hash = '#/muro';
    });
}
export const muroTemplate=()=>{

}