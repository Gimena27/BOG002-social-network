
import{restorePassword}from '../lib/index.js';


export const password =()=>{
    let select = document.querySelector("main");
    select.innerHTML="";
    let divContraseña= document.createElement("div");
    let formContraseña= document.createElement("form");
    let titulo= document.createElement("h1");
    let textoInicioForm = document.createElement("h2");
    let textoInfoInicio = document.createElement("p");
    let labelEmail= document.createElement("label");
    let inputEmail= document.createElement("input");
    let btnEnviarEnlace= document.createElement("button");
    let textVolverInicio= document.createElement("a");



    titulo.textContent="Animalandia";
    textoInicioForm.textContent =  "¿Tienes problemas para iniciar sesión?";
    textoInfoInicio.textContent="Ingresa tu correo electrónico, y te enviaremos un enlace para que recuperes el acceso a tu cuenta.";
    labelEmail.textContent="Ingresa tu email";
    btnEnviarEnlace.textContent= "Enviar enlace de inicio de sesión";
    textVolverInicio.textContent = "Volver al inicio de sesión"
    
    inputEmail.type="email";
    inputEmail.required="required";
    btnEnviarEnlace.type="submit";
    textVolverInicio.href = "#";

    select.appendChild(titulo);
    select.appendChild(divContraseña).appendChild(formContraseña);
    select.appendChild(divContraseña).appendChild(formContraseña).appendChild(textoInicioForm);
    select.appendChild(divContraseña).appendChild(formContraseña).appendChild(textoInfoInicio);
    select.appendChild(divContraseña).appendChild(formContraseña).appendChild(labelEmail);
    select.appendChild(divContraseña).appendChild(formContraseña).appendChild(inputEmail);
    select.appendChild(divContraseña).appendChild(formContraseña).appendChild(btnEnviarEnlace);
    select.appendChild(divContraseña).appendChild(formContraseña).appendChild(textVolverInicio);

    divContraseña.className = "containerDos";
    inputEmail.id="emailLogin";
    btnEnviarEnlace.id = "btnEnviarEnlace"
    textVolverInicio.id = "VolverInicio";
   
    let email = document.getElementById("emailLogin"); 
    let btnRestablecer=document.getElementById("btnEnviarEnlace");
      btnRestablecer.addEventListener("click",(event) =>{
        event.preventDefault();
        console.log("se envio un correo")
        restorePassword(email).then(function() {
          //  window.location = "http://localhost:5000/"
        //    location.reload()
         }).catch(function(error) {
             console.log ("error al enviar")
           // An error happened.
         });
     })
    window.location.hash = '#/contraseña';
}