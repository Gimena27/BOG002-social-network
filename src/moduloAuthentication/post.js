import { deletePost, savePost, updateLikes} from "./firebase.js";
import { formPost } from "./formPost.js";
let likes=[];
export function post(showPost) {
    const post = document.createElement("div");
    const descripcion= document.createElement("h4");
    const usuario= document.createElement("p");
    const divBtns=document.createElement("div");
    const btnBorrar=document.createElement("button");
    const iconoBorrar=document.createElement("i");
    const btnEdit=document.createElement("button");
    const iconoEdit=document.createElement("i");
    const btnLike=document.createElement("button");
    const iconoLike=document.createElement("i");

    descripcion.textContent= showPost.description;

    post.className="info-post";
    iconoBorrar.className="fas fa-trash-alt   btn-delete";
    iconoBorrar.addEventListener("click",(e)=>{
        deletePost(showPost.id).then(doc => {
            console.log(doc);
            return doc;
        });
    })
    iconoEdit.className="far fa-edit   btn-editar";
    iconoEdit.addEventListener("click",()=>{
        console.log("se esta editando");
        formPost().editMode(showPost.id, showPost.description);
        
    })
    iconoLike.className="far fa-heart   btn-like";
    iconoLike.addEventListener("click",()=>{
        console.log("like");
        updateLikes(showPost.id).then(doc => {
            likes.push(1);
            savePost(showPost.likes);
        });
    })
    post.appendChild(descripcion);
    post.appendChild(usuario);
    post.appendChild(divBtns);
    divBtns.appendChild(btnBorrar).appendChild(iconoBorrar);
    divBtns.appendChild(btnEdit).appendChild(iconoEdit);
    divBtns.appendChild(btnLike).appendChild(iconoLike);

    return post;
};

