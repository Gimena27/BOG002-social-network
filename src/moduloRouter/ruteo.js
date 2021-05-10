import {loginDiv} from '../moduloAuthentication/login.js';
import {registro} from '../moduloAuthentication/signUp.js';

export const router = (route) => {
    let content = document.getElementById('root');
    content.innerHTML = "";
    switch(route) {
        case '#/login':
            content.innerHTML = loginDiv();
           
            break;
            case '':
                content.innerHTML = loginDiv();
              
                break;
        case '#/signUp':
             content.innerHTML = registro();
           
             break;
        default:
             console.log('404!!!')
    }
}

// export const locationHashChangedeve= () => {
//     if (location.hash === '#/login') {
//       loginDiv();
//     }else if (location.hash === '#/signUp'){
//      registro();
//     }
//   }
  
  
// window.addEventListener("DOMContentLoaded", () => {
//     router(window.location.hash)
//     });
    
//     window.addEventListener("haschange", () => {
//       router(window.location.hash)
//     })
    
