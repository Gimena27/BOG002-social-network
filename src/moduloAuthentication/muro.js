import { onGetPost } from '../moduloAuthentication/firebase.js';
import { post } from './post.js';
import { header } from './header.js';
import { footer } from './footer.js';
function enablePublish(select) {
    let sectionEdit = select.querySelector("#hacerPublicacion");
    select.querySelector(".insertar-publicacion").style.display = "none";
    sectionEdit.addEventListener("click", () => {
        select.querySelector(".insertar-publicacion").style.display = "block";
    })
    let hideEditSection = select.querySelector("#publicar-btn");
    hideEditSection.addEventListener("click", () => {
        select.querySelector(".insertar-publicacion").style.display = "none";
    })

}

export function showLogin() {
    let select = document.createElement("div");
    let containerPost = document.createElement("div");
    containerPost.id = "containerPost";
    containerPost.className = "info-post";
    select.appendChild(header());
    select.appendChild(containerPost);
    select.appendChild(footer());

    const postContainer = select.querySelector("#containerPost");
    // crear lista de post
  
    onGetPost((querySnapshot) => {
        postContainer.innerHTML = "";
        querySnapshot.forEach(doc => {
            let showPost = doc.data();
            showPost.id = doc.id;
            postContainer.appendChild(post(showPost));
        });
    });
   
    return select;
}


 

