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
    window.addEventListener('DOMContentLoaded', async (e) => {
        // crear lista de post
        onGetPost((querySnapshot) => {
            //postContainer.innerHTML = "";
            querySnapshot.forEach(doc => {
                // console.log(doc.data())
                let showPost = doc.data();
                showPost.id = doc.id;
                // console.log(showPost); 
                postContainer.appendChild(post(showPost));
            });
            /*let showLikes = document.querySelectorAll(".btn-like");
            console.log(showLikes);
            showLikes.forEach(btn => {
                if (showLikes.background = "transparent") {
                    btn.addEventListener("click",(e)=>{
                        showLikes.background="red";
                        updateLike(e.target.dataset.id)
                    });
                } else if(showLikes.background="red") {
                    btn.addEventListener("click",(e)=>{
                        showLikes.background="transparent";
                        updateDislike(e.target.dataset.id)
                    })
                }
            });
            let showLikes = document.querySelectorAll(".btn-like");
            console.log(showLikes);
            showLikes.forEach(btn => {
                btn.addEventListener("click", async (e) => {
                    if (btn.style.background = "transparent") {
                        btn.style.background = "red";
                        updateLike(e.target.dataset.id)
                    } else if (btn.style.background = "red") {
                        btn.style.background = "transparent";
                        updateDislike(e.target.dataset.id)
                    }
                });

            });*/
        });
    });
    return select;
}

