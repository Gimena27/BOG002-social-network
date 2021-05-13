import { loginDiv } from '../moduloAuthentication/login.js';
import { registro } from '../moduloAuthentication/Signup.js';
import { contraseña } from '../moduloHome/contraseña.js';

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
            content.innerHTML = contraseña();

            break;
            
        default:
            console.log('404!!!');

    }
}


