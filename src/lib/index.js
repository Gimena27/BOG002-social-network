
export const registerUser = (email ,password, Name) =>{
  return firebase
   .auth()
   .createUserWithEmailAndPassword(email, password)
   
 };
 //login
 export const login =( email, password) =>{
  const promise = firebase.auth().signInWithEmailAndPassword(email, password);
  return promise;
 };

 export  const loginGoogle= ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
  .signInWithPopup(provider);

};
export function observador() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario activo");
      var uid = user.uid;
    } else {
      console.log("no existe usuario activo");
    }
  });
};


export const restorePassword = (email) =>{
  var auth = firebase.auth()
  var emailAddress = email.value;
  return auth.sendPasswordResetEmail(emailAddress);
}

export function usuarioRegistrado(){
  let user = firebase.auth().currentUser;
    return user;
}




