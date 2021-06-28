import { deletePost, savePost, updateDislike, updateLike } from "./firebase.js";
import { formPost } from "./formPost.js";
// import { getUserId, setUser } from "./user.js";
let likes = [];

export function post(showPost) {
    const post = document.createElement("div");
    const emailUser = document.createElement("p");
    emailUser.textContent= "Hola --->";
    emailUser.id = "emailUser";
    const descripcion = document.createElement("h4");
    const usuario = document.createElement("p");
    const divBtns = document.createElement("div");
    const btnBorrar = document.createElement("button");
    const iconoBorrar = document.createElement("i");
    const btnEdit = document.createElement("button");
    const iconoEdit = document.createElement("i");
    const btnLike = document.createElement("button");
    const iconoLike = document.createElement("i");
  
    
    descripcion.textContent = showPost.description;
    emailUser.innerText = showPost.email;

    post.className = "info-post";
    iconoBorrar.className = "fas fa-trash-alt   btn-delete";
    iconoBorrar.addEventListener("click", (e) => {
        deletePost(showPost.id).then(doc => {
            // console.log(doc);
            return doc;
        });
    })
    iconoEdit.className = "far fa-edit   btn-editar";
    iconoEdit.addEventListener("click", () => {
        // console.log("se esta editando");
        formPost().editMode(showPost.id, showPost.description);

    })
    // iconoLike.className="far fa-heart   btn-like";
    let user = firebase.auth().currentUser;
    // console.log("usuario aaaaas", user.uid)
    const likes = showPost.likes;
    const miLike = likes.find(item => item === user.uid);
    // console.log("like", miLike)
    if (miLike) {

        iconoLike.className = "fas fa-heart"
        // iconoLike.style.background ="red";

    } else {
        // debugger
        iconoLike.className = "far fa-heart"
        // iconoLike.style.background ="transparent";



    }



    // iconoLike.className="fas fa-heart   btn-like";
    iconoLike.addEventListener("click", () => {
        console.log("like");
        let user = firebase.auth().currentUser;
        console.log("usuario aaaaas", user.uid)
        const likes = showPost.likes;
        const miLike = likes.find(item => item === user.uid);
        console.log("like", miLike)
        if (miLike) {

            updateDislike(showPost.id, user.uid);
            // iconoLike.style.background ="red";

        } else {
            // debugger
            updateLike(showPost.id, user.uid);
            // iconoLike.style.background ="transparent";



        }



    });
    usuario.innerHTML = showPost.likes.length === 0 ? '' : showPost.likes.length;

    post.appendChild(emailUser);
    post.appendChild(descripcion);
    post.appendChild(usuario);
    post.appendChild(divBtns);
    divBtns.appendChild(btnBorrar).appendChild(iconoBorrar);
    divBtns.appendChild(btnEdit).appendChild(iconoEdit);
    divBtns.appendChild(btnLike).appendChild(iconoLike);
    
   
    return post;
};

