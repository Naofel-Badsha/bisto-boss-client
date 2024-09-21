import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //-----token---secure----------
  const axiosPublic = useAxiosPublic();
  

  //------New---user----create---------?
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //------Login---user----create---------?
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //-------Google----Singin----------?
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //-------LogOut-----user-------?
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      //------JWT----Security-------
      if(currentUser){
        //-----get token and store client-----
        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
            //------verify user and admin jokhon takbea tokhon------
            setLoading(false)
          }
        })
      }
      else{
        //-----Do----Something remove Token (if token stored in the client side: Loval storage, caching, in memory----
        localStorage.removeItem('access-token')
          //------verify user and admin jokhon takbea tokhon------
          setLoading(false)
      }
      //--------Normal user jokhon takbe tokon-------
      // setLoading(false)
    });
    return () => {
      unsubscribe();
    }
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    googleSingIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
