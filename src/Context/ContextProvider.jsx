import React, { useEffect, useState } from 'react';
import { AuthCntext } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';



const googleProvider = new GoogleAuthProvider();
const ContextProvider = ({children}) => {
 const [user, setUser] = useState([]); 

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updeatProfile = (data) => {
        return updateProfile(auth.currentUser, data)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const loginUserNow = (email, password) => {
        return signInWithEmailAndPassword(auth, email,password)
    } 

    const logoutUser = () => {
        return signOut(auth);
    } 

    useEffect(()=> {
        const unsubcript = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        })

        return () => {
            unsubcript();
        }
    },[])
    const info = {
      creatUser,
      updeatProfile,
      googleLogin,
      user,
      loginUserNow,
      logoutUser
    }
    return (
       <AuthCntext.Provider value={info}>{children}</AuthCntext.Provider>
    );
};

export default ContextProvider;