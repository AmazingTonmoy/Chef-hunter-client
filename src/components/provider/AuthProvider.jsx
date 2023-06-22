import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,updateProfile, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState(true);

    // provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()


//    Register Section
const createUser = (name, email, password, photoURL) => {
    
    return createUserWithEmailAndPassword(auth, email, password)

  };
//   email & pass log in section
   
    const signIn =(email,password) =>{
       
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google log in

    const googleLogIn =() =>{
        
        const auth = getAuth(app);

        
        return signInWithPopup(auth,googleProvider)
    }

    // github log in
    const githubLogIn =() =>{
       
        return signInWithPopup(auth,githubProvider)
    }


    // log out section
    
    const logOut = ()=>{
        return signOut(auth)
    }



    // observing
    useEffect(()=>{

        const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
               setUser(currentUser)
               setLoading(false)
           });
           return () => unsubscribe()
           
   
       },[])

    //    passing data

    const info = {
        user,
        auth,
        googleProvider,
        loading,
        createUser,
        signIn,
        googleLogIn,
        githubLogIn,
        logOut
    }

 

    

    return (
      <AuthContext.Provider value={info}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;