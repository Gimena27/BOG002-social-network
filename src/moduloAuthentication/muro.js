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
       
           <input type="POST" id= "publicacion" enctype="multipart/formdata" placeholder=" Realiza una publicación">
     	   <input type="file" name="imagen1" id ="imgPost"/>
	
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
    // const storageref = firebase.storage().ref();
    // // const mountainsRef = storageRef.child('mountains.jpg');


    const post = select.querySelector("#area_post");
    const postContainer = document.getElementById("postContainer");
    // console.log(post);




    //aqui va en () imgPost
    const savePost = (description,) =>
        db.collection("publicaciones").doc().set({


            description,
            // imgPost

        });

    const getPost = () => db.collection("publicaciones").get();

    window.addEventListener('DOMContentLoaded', async (e) => {
        const querySnapshot = await getPost()
        querySnapshot.forEach(doc => {
            console.log(doc.data());
            postContainer.innerHTML += `<div>
            ${doc-data().description}
            </div>`


        });
    });


    post.addEventListener("submit", async (e) => {
        e.preventDefault();
        const description = document.getElementById("publicacion");
        // const imgPost = document.getElementById("imgPost").value;
        console.log("enviando", description);

        await savePost(description.value);

        post.reset();
        description.focus();

        // console.log(description);


    });

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