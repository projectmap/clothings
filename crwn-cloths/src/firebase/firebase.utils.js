import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
  

const config={
    
        apiKey: "AIzaSyBo5PczgeVOKZasFUmrtKk8vMt3Xrw6l2s",
        authDomain: "fir-project-dbb9d.firebaseapp.com",
        projectId: "fir-project-dbb9d",
        storageBucket: "fir-project-dbb9d.appspot.com",
        messagingSenderId: "120766439772",
        appId: "1:120766439772:web:bdfb530ab3d678d7766199",
        measurementId: "G-9FH7SGKTJ3"
      
};
export const createUserProfileDocument=async (userAuth,additionalData)=>{
        if(!userAuth) return;
        const userRef=firestore.doc(`users/${userAuth.uid}`);
        const snapShot=await userRef.get();
        if(!snapShot.exists){
                const {displayName,email}=userAuth;
                const createdAt=new Date();
               try{
                   await userRef.set({
                            displayName,email,createdAt,...additionalData
                    })
               }catch(e){
                       console.log(e.message);
               }


        } 
        return userRef;
};

firebase.initializeApp(config)
 export const auth=firebase.auth();
 export const firestore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:"select_account"});
  export  const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;