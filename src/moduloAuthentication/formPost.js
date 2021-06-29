import {updatePost, savePost} from "./firebase.js";
import {getUserId, getUser} from './user.js';
let mode="create";
let publicar;
let idPost;
let userUid;
export function formPost(){
    const form=document.createElement("form");
    form.id="area_post";
    form.addEventListener("submit",submitForm);
    const insertarPublicacion=document.createElement("div");
    insertarPublicacion.className="insertar-publicacion";
    const realizaPublicacion=document.createElement("input");
    realizaPublicacion.id="publicacion";
    realizaPublicacion.placeholder="Realiza una publicación";
    const insertarImagen=document.createElement("input");
    insertarImagen.id="imgPost";
    const contenedorPublicar=document.createElement("div");
    publicar=document.createElement("button");
    publicar.className="btn";
    publicar.id="publicar-btn";
    publicar.innerText="Publicar";
    
    form.appendChild(contenedorPublicar);
    insertarPublicacion.appendChild(realizaPublicacion);
    insertarPublicacion.appendChild(insertarImagen);
    insertarPublicacion.appendChild(publicar);
    contenedorPublicar.appendChild(insertarPublicacion);
    
    `
    <img id="foto-usuario" src="IMG/GATO.jpg">
    <div class="insertar-publicacion">
    <p id="emailUser" class="holaUsuario" ></p>
        <input type="POST" id= "publicacion" enctype="multipart/formdata" placeholder=" Realiza una publicación">
        <input type="file" name="imagen1" id ="imgPost"/>
        <div>
            <button type="submit" class="btn" value=Publicar id="publicar-btn"> Publicar </button>   
       </div>
    </div>`;

    return {
        template:form,
        editMode,
        createMode
    }
}

function editMode(id,description){
    mode="edit";
    idPost=id;
    document.getElementById("publicar-btn").innerText="Editar";
    document.getElementById("publicacion").value=description;
   
}
function createMode(){
    mode = "create";
    document.getElementById("publicar-btn").innerText="Publicar";
    document.getElementById("publicacion").value="";
    // console.log("creando post");
}
function submitForm(e){
    e.preventDefault();
    const contenidoPost=document.getElementById("publicacion").value;
    if (mode=== 'create') { 
        console.log("usuario post", getUser().email);
        savePost(contenidoPost, getUserId(), getUser().email);
    }else{
        updatePost(idPost,{    
            description: contenidoPost,   
        })
    } 
    createMode();
  
}
