 import{registerUser} from '../lib/index.js' 
 export const registro=()=>{
    let select = document.querySelector("main");
    select.innerHTML="";
    let divRegistro= document.createElement("div");
    let formRegistro= document.createElement("form");
    let titulo= document.createElement("h1");
    let textoInicioRegistro= document.createElement("h2");
    let labelEmail= document.createElement("label");
    let inputEmail= document.createElement("input");
    let labelNombre= document.createElement("label");
    let inputNombre= document.createElement("input");
    let labelContraseña= document.createElement("label");
    let inputContraseña= document.createElement("input");
    let btnRegistro= document.createElement("button");
    let textoCondiciones= document.createElement("p");

    titulo.textContent="Animalandia";
    textoInicioRegistro.textContent="Registrate para ver fotos y videos"
    labelEmail.textContent="Ingresa tu email";
    labelNombre.textContent="Ingresa tu nombre";
    labelContraseña.textContent="Ingresa tu contraseña";
    btnRegistro.textContent= "Registrate";
    textoCondiciones.textContent="Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.";

    inputContraseña.type="password";
    inputContraseña.required="required";
    inputContraseña.maxLength="15";
    inputEmail.type="email";
    inputEmail.required="required";
    inputNombre.type="text";
    inputNombre.required="required";
    btnRegistro.type="submit";

    select.appendChild(titulo);
    select.appendChild(divRegistro).appendChild(formRegistro);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(textoInicioRegistro);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(labelEmail);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(inputEmail);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(labelNombre);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(inputNombre);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(labelContraseña);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(inputContraseña);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(btnRegistro);
    select.appendChild(divRegistro).appendChild(formRegistro).appendChild(textoCondiciones);

    divRegistro.className="containerDos";
    inputEmail.id="inputEmail";
    inputContraseña.id="inputContraseña";
    inputNombre.id="inputNombre";
    btnRegistro.id="btnRegistro";

    const formRegister= document.getElementById("btnRegistro");
    formRegister.addEventListener("click", (event)=>{
        const registrarEmail= document.getElementById("inputEmail").value;
        const registrarContraseña= document.getElementById("inputContraseña").value;
        const registrarNombre= document.getElementById("inputNombre");
    
        event.preventDefault();
        registerUser(registrarEmail,registrarContraseña,registrarNombre)
        .then((userCredential) => {
            return  userCredential.user;
           })
            .catch((error) => {
              console.log ('error', error );
            });
    })
} 

export const registroDos =()=>{
    let select = document.querySelector("main");
    let divRegistroDos=document.createElement("div");
    let btnGoogle=document.createElement("button");
    let imgGoogle=document.createElement("img");
    let tienesCuentaTitulo= document.createElement("p");
    let volverInicioSesion= document.createElement("a");

    btnGoogle.textContent= "Inicia sesión con google";
    imgGoogle.src="../src/IMG/icongoogle.png";
    tienesCuentaTitulo.textContent="¿Tienes una cuenta?";
    volverInicioSesion.textContent="Inicia sesión";

    volverInicioSesion.href="#";

    select.appendChild(divRegistroDos).appendChild(btnGoogle);
    select.appendChild(divRegistroDos).appendChild(btnGoogle).appendChild(imgGoogle);
    select.appendChild(divRegistroDos).appendChild(tienesCuentaTitulo);
    select.appendChild(divRegistroDos).appendChild(volverInicioSesion);

    divRegistroDos.className="loginGoogleDos";
    volverInicioSesion.id="linkInicio";

   /* let inicioLogin= document.getElementById("linkInicio");
    inicioLogin.addEventListener("click", loginDiv);
    inicioLogin.addEventListener("click", loginDos);*/
}