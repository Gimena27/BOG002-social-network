import { loginDiv } from '../moduloAuthentication/login.js';
import { registro,succesRegister } from '../moduloAuthentication/Signup.js';
import { password } from '../moduloHome/contraseña.js';
import {settingsUsers} from '../moduloProfile/profile.js';
export const router = (route) => {
    let content = document.getElementById("root");
    content.innerHTML = "";
    switch (route) {
        case '#/login':
            content.innerHTML = loginDiv();

            break;
        case '':
            content.innerHTML = loginDiv();

            break;
        case '#/signUp':
            content.innerHTML = registro();

            break;
        case '#/password':
            content.innerHTML = password();

            break;
        case '#/succesRegister':
            content.innerHTML = succesRegister();

            break;
        case '#/SettingsUser':
            content.innerHTML = settingsUsers();

            break;
        default:
            console.log('404!!!');

    }
}


