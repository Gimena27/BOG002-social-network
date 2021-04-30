
let select = document.querySelector("main");

const loginDiv=()=>{
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

    divLogin.className="container1";
}

loginDiv();

const login2 =()=>{
    let divLogin2=document.createElement("div");
    let btnGoogle=document.createElement("button");
    let imgGoogle=document.createElement("img");
    let olvidarContraseña= document.createElement("a");
    let registrateTitulo= document.createElement("p");
    let registrate= document.createElement("a");

    btnGoogle.textContent= "Iniciar sesión con google";
    imgGoogle.src="../src/IMG/icongoogle.png";
    olvidarContraseña.textContent="¿Olvidaste tu contraseña?";
    registrateTitulo.textContent="¿No tienes una cuenta?";
    registrate.textContent="Registrate";

    olvidarContraseña.href="#";
    registrate.href="#";

    select.appendChild(divLogin2).appendChild(btnGoogle);
    select.appendChild(divLogin2).appendChild(btnGoogle).appendChild(imgGoogle);
    select.appendChild(divLogin2).appendChild(olvidarContraseña);
    select.appendChild(divLogin2).appendChild(registrateTitulo);
    select.appendChild(divLogin2).appendChild(registrate);

    divLogin2.className="loginGoogle";
}

login2();