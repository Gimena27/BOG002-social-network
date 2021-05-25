
export const registerUser = (email ,password ) =>{
  return firebase
   .auth()
   .createUserWithEmailAndPassword(email, password)
   
 };
 //login
 export const login =( email, password) =>{
   return firebase
   .auth()
   .signInWithEmailAndPassword(email, password)
 };

 export  const loginGoogle= ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return firebase.auth()
  .signInWithPopup(provider);

};
export function observador() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario activo");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      console.log("no existe usuario activo");
      // User is signed out
      // ...
    }
  });
};


export const restorePassword = (email) =>{
  var auth = firebase.auth()
  var emailAddress = email.value;
  return auth.sendPasswordResetEmail(emailAddress);
}


export function signOutSesion(){
  // auth.signOut().then(()=>{
  // console.log('user signed out')
  // })
 firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
 }
 