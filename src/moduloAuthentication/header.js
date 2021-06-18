import{formPost} from './formPost.js';
export function header(){
    const header=document.createElement("header");
    const titulo=document.createElement("h1");
    titulo.innerText="Animalandia";
    const contenedorBtns= document.createElement("div");
    contenedorBtns.id="contenedorBtnSettings";
    const btnPublicar= document.createElement("button");
    btnPublicar.id="hacerPublicacion";
    btnPublicar.innerHTML='<img src="IMG/post.png" alt="post">Publicar';
    const btnSalir= document.createElement("button");
    btnSalir.id="salir";
    btnSalir.innerHTML='<img src="IMG/exit.png" alt="exit">Salir';
    const contenerdorMuro=document.createElement("div");
    contenerdorMuro.id="contenedorMuro";
    const mensaje=document.createElement("h4");
    mensaje.innerText="Hola ¿Que tal tú día?";
    const fotoUsuario=document.createElement("img");
    fotoUsuario.src="IMG/GATO.jpg";
    fotoUsuario.id="imgUsuario";
    
    contenedorBtns.appendChild(btnPublicar);
    contenedorBtns.appendChild(btnSalir);
    contenerdorMuro.appendChild(mensaje);
    contenerdorMuro.appendChild(fotoUsuario);
    contenerdorMuro.appendChild(formPost().template);
    header.appendChild(titulo);
    header.appendChild(contenedorBtns);
    header.appendChild(contenerdorMuro);
    /*header.innerHTML=`<h1 id="tituloMuro">Animalandia</h1>
    <div id="contenedorBtnSettings">
        <button type="button" id="hacerPublicacion"><img src="IMG/post.png" alt="post">Publicar</button>
        <button type="button" id="salir"><img src="IMG/exit.png" alt="exit">Salir</button> 
        </div>
        <div id="contenedorMuro">
         
        <h4>Hola ¿Que tal tú día?</h4>
    </div> `
    ;*/

    return header;
}
export function cerrarSesion() {

    /*let btnCerrar = document.getElementById("salir");
    btnCerrar.addEventListener('click', () => {
        window.location.hash = "#/login"
    });*/
}