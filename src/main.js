
import {loginDiv,loginDos} from './moduloAuthentication/login.js';
//import { registro, registroDos } from './moduloAuthentication/Signup.js';

const init=()=>{
    var firebaseConfig = {
        apiKey: "AIzaSyCcwsf7v_1XVXk6XH8012kZm6sX1_bZ_UI",
        authDomain: "funnypets-socialnetwork.firebaseapp.com",
        projectId: "funnypets-socialnetwork",
        storageBucket: "funnypets-socialnetwork.appspot.com",
        messagingSenderId: "382607454154",
        appId: "1:382607454154:web:98a68b56bc2391030de933"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
    loginDiv();
    loginDos();
    /*registro();
    registroDos();*/
}
init();