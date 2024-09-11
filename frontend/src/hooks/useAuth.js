import { useState, useEffect, createContext, useContext } from 'react';
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import axios from './axios';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const setSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      // if (currentUser) {
      //   // get token and store client
      //   const userInfo = { email: currentUser.email };
      //   axios.post('/jwt', userInfo)
      //     .then(res => {
      //       if (res.data.token) {
      //         localStorage.setItem('access-token', res.data.token);
      //         setLoading(false);
      //       }
      //     })
      // }
      // else {
      //   localStorage.removeItem('access-token');
      //   setLoading(false);
      // }

    });
    return () => {
      return unsubscribe();
    }
  }, [axios])

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    googleSignIn,
    signIn,
    logOut,
  }


  return (
    <AuthContext.Provider value={{ authInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
