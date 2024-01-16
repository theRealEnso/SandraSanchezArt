// const appCheckKey = import.meta.env.APP_CHECK_KEY;

//FLICKR
// Key:
// 1d62798f1600fee2922a9c51f61d4087

// Secret:
// 27346ce7a519c4bc

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User, NextOrObserver, UserCredential} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot} from 'firebase/firestore'; // doc gets document instance, getDoc gets data inside a document instance. Likewise, setDoc function only sets the data inside a document. The doc function is what allows us to get the entire document instance (super confusing naming convention!)

// import {initializeAppCheck, AppCheck, ReCaptchaV3Provider} from "firebase/app-check";


export type CategoryItem = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  sizesAndPrices: {size: string; price: number}[];
} & {id: string; name: string; imageUrl: string; price: number; description: string}

export type CategoryObject = {
  categoryName: string;
  items: CategoryItem[]
};

export type CategoryMap = {
  [categoryName: string]: CategoryItem[];
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyH75EeQs-whvwD_aO6mKbcaLNbAAUQe8",
  authDomain: "sandra-sanchez-art.firebaseapp.com",
  projectId: "sandra-sanchez-art",
  storageBucket: "sandra-sanchez-art.appspot.com",
  messagingSenderId: "490365144817",
  appId: "1:490365144817:web:f1cfc1439ab5f515d4e350",
  measurementId: "G-FVK28QXSKK",
};

// const appCheckConfig = {
//   "token": {
//     "site_key": appCheckKey
//   }
// }

// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(appCheckKey),
//   isTokenAutoRefreshEnabled: true,
// });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//https://firebase.google.com/docs/firestore/quickstart
export const db = getFirestore(app);




// https://firebase.google.com/docs/auth/web/google-signin
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


// https://firebase.google.com/docs/firestore/manage-data/add-data
export const addCollectionAndDocuments = async (collectionName: string, productObjectsToAdd: CategoryObject[]): Promise<void> => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionName);

  productObjectsToAdd.forEach((productObject) => {
    if(productObject && productObject.categoryName){
      //extract categoryName for each product object, lowercase it, and set it as the category name
      const productDocRef = doc(collectionRef, productObject.categoryName.toLowerCase());
      batch.set(productDocRef, productObject);
    } else {
      console.error(`Invalid product object: ${productObject}`)
    }
  });

  try {
    await batch.commit();
    console.log(`done!`);
  } catch (error){
    console.log(error);
  }
}
// addCollectionsAndDocuments('categories', SHOP_DATA)


// https://firebase.google.com/docs/firestore/query-data/get-data
// https://firebase.google.com/docs/firestore/manage-data/add-data
export const createUserDocOrSignInUserFromAuth = async (authObj: User, additionalName = {}) => {
  const userCollectionRef = collection(db, 'users'); //reference to collection named 'users' inside firestore db
  const userDocRef = doc(userCollectionRef, authObj.uid); // create reference to document instance inside user collection with authObj's uid (will create it if it doesnt exist )
  const userSnapshot = await getDoc(userDocRef); // get the actual data inside the document instance

  if(!userSnapshot.exists()){
    const {email, displayName} = authObj;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalName,
      })
    } catch (error) {
      console.log(`Whoops! Looks like there was an error creating the user: ${error}`)
    }
  }
  console.log(userDocRef);
  console.log(userSnapshot);
  // console.log(userSnapshot.data);
  console.log(userSnapshot.data());
  return userDocRef;

};

//https://firebase.google.com/docs/firestore/query-data/queries
export const getCategoriesAndDocuments = async () => {
  const categoriesCollectionRef = collection(db, 'categories');
  const q = query(categoriesCollectionRef);

  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot);
  // console.log(querySnapshot.docs);

  const categoriesMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const {categoryName, items} = docSnapshot.data();
    accumulator[categoryName] = items;
    return accumulator;
  }, {} as CategoryMap);

  return categoriesMap;

  // querySnapshot.forEach((document) => {
  //   // console.log(document);
  //   console.log(document.data());
  //   return document.data();
  // });
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const onUserAuthStateChangedListener = (callbackFunc: NextOrObserver<User>) => onAuthStateChanged(auth, callbackFunc);

export const signOutAuthUser = () => signOut(auth);