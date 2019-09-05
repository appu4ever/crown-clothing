import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCSldRNFhygz5FXz0Iap8ol090iKpdhKlc",
    authDomain: "crown-clothing-db-aaea2.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-aaea2.firebaseio.com",
    projectId: "crown-clothing-db-aaea2",
    storageBucket: "",
    messagingSenderId: "209460307972",
    appId: "1:209460307972:web:c5f8f1b4f1168604"
  };

  firebase.initializeApp(config)
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt : 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase