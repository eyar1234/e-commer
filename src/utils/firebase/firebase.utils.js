import { initializeApp } from "firebase/app";
import {
  getAuth,
  //   signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

// config the firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyDJ_X3W2nbPRjESUkK-aLN28vevHMqOc",
  authDomain: "crown-clothing-db-d6922.firebaseapp.com",
  projectId: "crown-clothing-db-d6922",
  storageBucket: "crown-clothing-db-d6922.appspot.com",
  messagingSenderId: "524683797460",
  appId: "1:524683797460:web:24b703cf052a40496a2c41",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//set a provider

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//initilaiz firebase/firestore

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log(`error creating the user ${err.message}`);
    }
  }
  return userDocRef;
};
