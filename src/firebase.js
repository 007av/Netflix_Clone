
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDnBvhPwysLZJH2eV1235C87WrpLV9a4js",
  authDomain: "netflix-clone-19190.firebaseapp.com",
  projectId: "netflix-clone-19190",
  storageBucket: "netflix-clone-19190.firebasestorage.app",
  messagingSenderId: "1097655588356",
  appId: "1:1097655588356:web:56362a88795c5022774751",
  measurementId: "G-Z1C38XJH1K"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const singup = async (name , email , password)=>{
    try{
      const res =  await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    }catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const login = async (email , password)=>{
    try {
       await signInWithEmailAndPassword(auth, email ,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export{auth, db, login, singup, logout};