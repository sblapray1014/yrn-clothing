import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBo8hsukSV3NR5pj2xStT2LN31Mj-wzTAo',
  authDomain: 'yarn-clothing-db.firebaseapp.com',
  databaseURL: 'https://yarn-clothing-db.firebaseio.com',
  projectId: 'yarn-clothing-db',
  storageBucket: 'yarn-clothing-db.appspot.com',
  messagingSenderId: '18606702223',
  appId: '1:18606702223:web:540733766c44784293bafa',
  measurementId: 'G-15QSEF567G'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
