import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFh6ejuJzZZ3A8tX-BQpana-9VttPPTtc",
    authDomain: "slack-clone-challenge-e4bc8.firebaseapp.com",
    projectId: "slack-clone-challenge-e4bc8",
    storageBucket: "slack-clone-challenge-e4bc8.appspot.com",
    messagingSenderId: "531658449066",
    appId: "1:531658449066:web:3bd2ab8f65e0b4697db0d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;
