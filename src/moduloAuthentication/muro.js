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
        
        
        
        
         
       
   
    </form>
    </div> 

    <div =class"info-post" id= "containerPost"></div>

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

    const formPost = select.querySelector("#area_post");
    const postContainer = select.querySelector("#containerPost");
    // console.log(post);

    const savePost = (description) =>
        db.collection("publicaciones").doc().set({

            description
        })

/////////funciones de firebase/////////
    const getPost = () => db.collection("publicaciones").get();

    const textPost = (id) => db.collection("publicaciones").doc(id).get();

    const onGetPost = (callback) => db.collection("publicaciones").onSnapshot(callback)

    const deletePost = id => db.collection("publicaciones").doc(id).delete();



    window.addEventListener('DOMContentLoaded', async (e) => {
        // crear lista de post
        onGetPost((querySnapshot) => {
            postContainer.innerHTML = "";
            querySnapshot.forEach(doc => {
                // console.log(doc.data())
                const showPost = doc.data();
                showPost.id = doc.id;
                // console.log(showPost); 

                postContainer.innerHTML += `<div class="info-post">
            <p4> ${showPost.description}</p4>
            <div>
            <button <i class="fas fa-trash-alt   btn-delete"   data-id =${showPost.id}"></i></button>
            <button <i class="far fa-edit   btn-editar"     data-id =${showPost.id} ></i> </button>
            </div>
            </div>`

            //////borrar post///////
                const btnDelete = document.querySelectorAll(".btn-delete");
                // console.log(btnDelete);
                btnDelete.forEach(btn => {
                    btn.addEventListener("click", async (e) => {
                        console.log("click")
                        // console.log(e.target.dataset.id);
                        await deletePost(e.target.dataset.id)
                    })
                });
             /////editar post//////
                const btnEditar = document.querySelectorAll(".btn-editar");
                btnEditar.forEach(btn =>{
                    btn.addEventListener("click", async (e) =>{
                    // console.log(e.target.dataset.id)
                    const doc= await textPost(e.target.dataset.id);
                    console.log(doc.data());

                    const poster = doc.data();


                    formPost("description").value = poster.description;
                    })
                })
            })
        })

    })

    formPost.addEventListener("submit", async (e) => {
        e.preventDefault();
        const description = document.getElementById("publicacion");
        // console.log("enviando", description);

        await savePost(description.value);



        await getPost()
        formPost.reset();
        description.focus();



    })

    return select;


}


export function signOut() {
    const salir = document.querySelector("#salir");
    salir.addEventListener("click", () => {
        window.location.hash = '#/muro';
    });
}
export const muroTemplate = () => {

}





// import { signOutSesion } from '../lib/index.js';


// export const showLogin = () => {
//     let select = document.createElement("div");
//     select.innerHTML = "";
//     const muroTemplate = `
//     <h1 id="tituloMuro">Animalandia</h1>
//     <div id="contenedorBtnSettings">
//          <button type="button" id="editarPerfil"><img src="IMG/post.png" alt="post">Publicar</button>
//          <button type="button" id="salir"><img src="IMG/exit.png" alt="exit">Salir</button> 
//     </div>
//     <div id="contenedorMuro">  
//     <img id="foto-usuario" src="IMG/GATO.jpg">
//         <h4>¿Que tal tú día?</h4>
//      <form class ="area-post" id="area_post">

//        <div class="insertar-publicacion">
//            <input type="POST" id= "publicacion" enctype="multipart/formdata" placeholder=" Realiza una publicación">
//            <input type="file" name="imagen1" id ="imgPost"/>
//         <div>
//             <button type="submit" class="btn" id="publicar-btn"> Publicar </button> 
//         </div>
//         </div>
//     </form>
//         </div> 

//         <div class ="area-post" id="containerPost"></div>
//     <footer>
//        <nav>
//            <ul>
//            <li><a id="inicio" href="#/home"><i class="icon fas fa-home"></i></a>Inicio </li>
//            <li><a id="perfil" href="#/search"><i class="icon fas fa-search"></i></a>Buscar</li>
//            <li><a id="buscar" href="#/profile"><i class="icon fas fa-user"></i></a>Perfil</li>
//          </ul>
//        </nav>
//    </footer>
// `;
//     select.innerHTML = muroTemplate;

//     const db = firebase.firestore();
//     // const storageref = firebase.storage().ref();
//     // // const mountainsRef = storageRef.child('mountains.jpg');


//     const post = select.querySelector("#area_post");
//     const containerPost = select.querySelector("#containerPost");
//     // console.log(post);




//     //aqui va en () imgPost
//     const savePost = (description,) =>
//         db.collection("publicaciones").doc().set({


//             description,
//             // imgPost

//         });

//     const getPost = () => db.collection("publicaciones").get();

//     window.addEventListener('DOMContentLoaded', async (e) => {
//         const querySnapshot = await getPost()
//         querySnapshot.forEach(doc => {
//             console.log(doc.data());
//             containerPost.innerHTML += `<div>
//             ${doc - data().description}
//             </div>`


//         });
//     });


//     post.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         const description = document.getElementById("publicacion");
//         // const imgPost = document.getElementById("imgPost").value;
//         console.log("enviando", description);

//         await savePost(description.value);

//         post.reset();
//         description.focus();

//         // console.log(description);


//     });

//     return select;


// }


// export function signOut() {
//     const salir = document.querySelector("#salir");
//     salir.addEventListener("click", () => {
//         signOutSesion()
//         // window.location = '';
//         // location.reload()
//         window.location.hash = '#/muro';
//     });
// }
// export const muroTemplate = () => {

// }