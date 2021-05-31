import {login,loginGoogle,observador} from '../lib/index.js';
export const loginDiv=()=>{
    // let select = document.querySelector("main");
    let select = document.createElement("div");
    select.innerHTML="";
    let divLogin=document.createElement("div");
    let formulario=document.createElement("form");
    let titulo= document.createElement("h1");
    let textoInicioSesion= document.createElement("h2");
    let labelEmail= document.createElement("label");
    let inputEmail= document.createElement("input");
    let labelContraseña= document.createElement("label");
    let inputContraseña= document.createElement("input");
    let btnInicioSesion= document.createElement("button");

    textoInicioSesion.textContent="Incia sesión para ver fotos y videos";
    titulo.textContent="Animalandia";
    labelEmail.textContent="Ingresa tu email";
    labelContraseña.textContent="Ingresa tu contraseña";
    btnInicioSesion.textContent="Inicia sesión";

    inputContraseña.type="password";
    inputContraseña.required="required";
    inputContraseña.maxLength="15";
    inputEmail.type="email";
    inputEmail.required="required";
    btnInicioSesion.type="submit";

    select.appendChild(titulo);
    select.appendChild(divLogin).appendChild(formulario);
    select.appendChild(divLogin).appendChild(formulario).appendChild(textoInicioSesion);
    select.appendChild(divLogin).appendChild(formulario).appendChild(labelEmail);
    select.appendChild(divLogin).appendChild(formulario).appendChild(inputEmail);
    select.appendChild(divLogin).appendChild(formulario).appendChild(labelContraseña);
    select.appendChild(divLogin).appendChild(formulario).appendChild(inputContraseña);
    select.appendChild(divLogin).appendChild(formulario).appendChild(btnInicioSesion);

    divLogin.className="containerUno";
    btnInicioSesion.id="btnInicioSesion";
    inputEmail.id="emailLogin";
    inputContraseña.id="contraseñaLogin";

    // const formInicioSesion= formulario.getElementById("btnInicioSesion");
    
    btnInicioSesion.addEventListener("click",(event)=>{
        console.log("click");
        const emailLogin= document.getElementById("emailLogin").value;
        const contraseñaLogin= document.getElementById("contraseñaLogin").value;
    
        console.log (emailLogin ,contraseñaLogin);

        event.preventDefault();
        login(emailLogin,contraseñaLogin)
        .then((userCredential) => {
          window.location = '#/post';
            console.log(userCredential.user) ;
          })
          .catch((error) => {
            if(error.code=== "auth/user-not-found"){
              console.log ('error', error );
              //mostrar mensaje de error para que ingrese usuario o ocntrase;a correcta
            }
            
          });
          
    });
    observador();
    let divLoginDos=document.createElement("div");
    let btnGoogle=document.createElement("button");
    let imgGoogle=document.createElement("img");
    let olvidarContraseña= document.createElement("a");
    let registrateTitulo= document.createElement("p");
    let registrate= document.createElement("a");

    btnGoogle.textContent= "Inicia sesión con google";
    imgGoogle.src="IMG/icongoogle.png";
    olvidarContraseña.textContent="¿Olvidaste tu contraseña?";
    registrateTitulo.textContent="¿No tienes una cuenta?";
    registrate.textContent="Registrate";

    olvidarContraseña.href="#/password";
    registrate.href="#/signUp";

    select.appendChild(divLoginDos).appendChild(btnGoogle);
    select.appendChild(divLoginDos).appendChild(btnGoogle).appendChild(imgGoogle);
    select.appendChild(divLoginDos).appendChild(olvidarContraseña);
    select.appendChild(divLoginDos).appendChild(registrateTitulo);
    select.appendChild(divLoginDos).appendChild(registrate);

    divLoginDos.className="loginGoogle";
    registrate.id="linkRegistro";
    btnGoogle.id="btnGoogle";
    olvidarContraseña.id ="recuperarContraseña";
   
   
    // const googleInicioSesion= formulario.getElementById("btnGoogle");
    btnGoogle.addEventListener("click",(event)=>{
        console.log("click");
        event.preventDefault();
        loginGoogle()
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
        
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    });
    
    //  window.location.hash = '#/login';
    return select;
}

  
