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
const db = firebase.firestore();
export const getPost = () => db.collection("publicaciones").get();

export const textPost = (id) => {
    console.log(id);
    return db.collection("publicaciones").doc(id).get()
};

export const onGetPost = (callback) => db.collection("publicaciones").onSnapshot(callback)

export const deletePost = (id) => {
    console.log(id);
    return db.collection("publicaciones").doc(id).delete()
};

export const updatePost = (id, updatedPost) => {
    db.collection("publicaciones").doc(id).update(updatedPost)
    console.log(id,updatedPost);
};
// export const updateLikes = (id, likes) => db.collection("publicaciones").doc(id).update({
//     likes,
//   });
  
export const updateLike = (id) => {
    db.collection("publicaciones").doc(id).update({
        likes: firebase.firestore.FieldValue.arrayUnion(userUidActual)

    })
}
export const updateDislike = (id) => {
    db.collection("publicaciones").doc(id).update({
        likes: firebase.firestore.FieldValue.arrayRemove(userUidActual)

    })
}
export const savePost = (description, uid) => {
    db.collection("publicaciones").doc().set({

        description,
        likes: [],
        userUid: uid,
        // email: user.email,
        // name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
}