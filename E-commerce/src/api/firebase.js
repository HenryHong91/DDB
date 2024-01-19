
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,GithubAuthProvider  ,GoogleAuthProvider,FacebookAuthProvider,signInWithEmailAndPassword , signOut, onAuthStateChanged} from "firebase/auth";
import { getDatabase, ref, get, set,remove } from "firebase/database";

import {v4 as uuid} from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_API_DOMAIN,
  databaseURL:  process.env.REACT_APP_FIREBASE_API_URL,
  projectId: process.env.REACT_APP_FIREBASE_API_ID,

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const Googleprovider = new GoogleAuthProvider();
const Facebookprovider = new FacebookAuthProvider();
const GitHubprovider = new GithubAuthProvider();
const database=getDatabase(app);



export function GoogleLogin(setModalIsOpen){
  return signInWithPopup(auth, Googleprovider).then(()=>setModalIsOpen(false))
     .catch((console.error))
}
export function FacebookLogin(setModalIsOpen){
  return signInWithPopup(auth, Facebookprovider)
  .then(()=>setModalIsOpen(false))

}
export function GithubLogin(setModalIsOpen){
  return signInWithPopup(auth, GitHubprovider)
  .then(()=>setModalIsOpen(false))

}

export function EmailLogin(setModalIsOpen,email,password){
  return signInWithEmailAndPassword(auth, email, password).then(()=>setModalIsOpen(false))
}

export  function LogOut(){
  signOut(auth).catch(console.error)



}

export function onUserStateChanged(callback){

  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    
    callback(updatedUser);
  
  });
}

async function adminUser(user) {
  return get(ref(database, 'admin')) //
    .then((snapshot) => {
      
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
       
      }
      return user;
      
    });
}

export async function addNewProduct(product,image){
    const id = uuid()
 return set(ref(database,`products/${id}`), {
      ...product,id,price:parseInt(product.price),image,option:product.option.split(',')
})
}

export async function getProducts(){

  return( 
    get(ref(database,'products')).then((snapshot)=>{
      if(snapshot.exists()){
        return Object.values(snapshot.val());
      }
      return [];
    })
  )
}

export async function getCart(userId){
  return get(ref(database,`carts/${userId}`))
    .then((snapshot)=>{
      const items = snapshot.val() || {};
      
      return Object.values(items);
    })
  
}

export async function addOrUpdateToCart(userId,product){
  return set(ref(database,`carts/${userId}/${product.id}`),product)
}

export async function removeFromCart(userId,productId){
  return remove(ref(database,`carts/${userId}/${productId}`))
}

export async function removeFromData(productId){
  alert("product will be Dele")  
 remove(ref(database,`products/${productId}`))
}