import { signOutSesion } from '../lib/index.js';


export const showLogin = () => {
    let select = document.createElement("div");
    select.innerHTML = "";
    const muroTemplate = `
        <h1 id="tituloMuro">Animalandia</h1>
    <div id="contenedorBtnSettings">
         <button type="button" id="editarPerfil"><img src="IMG/post.png" alt="post">Publicar</button>
         <button type="button" id="salir"><img src="IMG/exit.png" alt="exit">Salir</button> 
        </div>

        <div id="contenedorMuro">
         
        <h4>¿Que tal tú día?</h4>
    <form id="area_post">
        <img id="foto-usuario" src="IMG/GATO.jpg">
       <div class="insertar-publicacion">
           <input type="textarea" name = "text" id= "publicacion" maxlength="250" minlength="2" required class="publicar" placeholder=" Realiza una publicación"> 
           <div>
              <button type="submit" class="btn" id="publicar-btn"> Publicar </button> 
              
           </div>
        </div>
        
        
        
        
           </div> 
       
   
    </form>
  
    <footer>
       <nav>
           <ul>
           <li><a id="inicio" href="#/home"><i class="icon fas fa-home"></i></a>Inicio </li>
           <li><a id="perfil" href="#/search"><i class="icon fas fa-search"></i></a>Buscar</li>
           <li><a id="buscar" href="#/profile"><i class="icon fas fa-user"></i></a>Perfil</li>
         </ul>
       </nav>
   </footer>
`;
    select.innerHTML = muroTemplate;

    const db = firebase.firestore();

    const post = select.querySelector("#publicar-btn");
    console.log(post);

    const savePost = (description) =>
      db.collection("publicaciones").doc().set({

        description
        })

 post.addEventListener("click", async (e) => {
        e.preventDefault();
        const description = document.getElementById("publicacion").value;
        console.log("enviando", description);

        await savePost(description);

        //  post.reset();
        //  description.focus();
       

        
    })

    return select;


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
export const muroTemplate = () => {

}