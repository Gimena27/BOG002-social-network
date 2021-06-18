import { loginDiv } from '../moduloAuthentication/login.js';
import { showLogin} from '../moduloAuthentication/muro.js';
import { registro,succesRegister } from '../moduloAuthentication/Signup.js';
import { password } from '../moduloHome/contraseña.js';
import {settingsUsers} from '../moduloProfile/profile.js';
import  {usuarioRegistrado} from '../lib/index.js';
import{cerrarSesion} from '../moduloAuthentication/header.js';


export const router = (route) => {
    let content = document.querySelector("#root");
    content.innerHTML = "";
    let user= usuarioRegistrado();
  
    switch (route) {
        case '#/login':
            console.log("user:",user);
            content.appendChild(loginDiv());
        
            break;
        case '':
            content.appendChild(loginDiv());

            break;
        case '#/signUp':
            content.appendChild(registro());
        
            break;
        case '#/password':
            content.innerHTML = password();

            break;
        case '#/succesRegister':
            content.appendChild(succesRegister());
            
            break;
        case '#/SettingsUser':
            content.appendChild(settingsUsers());

            break;
        case '#/post': 
        content.appendChild(showLogin());
             cerrarSesion()
        //     if (user) {
               
                
        //            cerrarSesion();
                     
        //    }else {
        //      window.location.hash ='#/login'
        //    }
            break;
        default:
            console.log('404!!!');

    }
}


