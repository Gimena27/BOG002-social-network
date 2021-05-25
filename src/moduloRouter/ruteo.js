import { loginDiv } from '../moduloAuthentication/login.js';
import { showLogin } from '../moduloAuthentication/muro.js';
import { registro,succesRegister } from '../moduloAuthentication/Signup.js';
import { password } from '../moduloHome/contraseña.js';
import {settingsUsers} from '../moduloProfile/profile.js';
export const router = (route) => {
    let content = document.querySelector("#root");
    content.innerHTML = "";
    switch (route) {
        case '#/login':
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
            // let nodo =  succesRegister()
            // console.log(nodo);
            content.appendChild(succesRegister());
            console.log(content);
            // content.innerHTML =succesRegister();

            break;
        case '#/SettingsUser':
            content.appendChild(settingsUsers());

            break;
        case '#/post':
            content.appendChild(showLogin());

            break;
        default:
            console.log('404!!!');

    }
}


