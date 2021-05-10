
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