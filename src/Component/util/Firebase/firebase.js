import {initializeApp} from 'firebase/app';

import{ 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
 } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAAp5N7w9eIvKIk2P-or2mGGeDje6_dc1A",
    authDomain: "crown-clothing-data-base.firebaseapp.com",
    projectId: "crown-clothing-data-base",
    storageBucket: "crown-clothing-data-base.appspot.com",
    messagingSenderId: "910964887394",
    appId: "1:910964887394:web:974d587d12a1108254e63b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
    signInWithPopup(auth, provider);

  export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async function(
    userAuth, 
    additionalInfomaion = {}
    ) {
      if (!userDocRef) return;
      
      const userDocRef = doc(db, 'users', userAuth.uid);

      const userSnapShot = await getDoc(userDocRef);

      if(!userSnapShot.exists()){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{
              await setDoc( userDocRef,{
                  displayName,
                  email,
                  createdAt,
                  ...additionalInfomaion,
              });
             } catch(error) {
                 console.error('error creating the user', error.message);

        }
      }
        return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async function(email, password){
        if (!email || ! password) return;

      return await createUserWithEmailAndPassword(auth, email, password)
  }