import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../src/Hookes/useAxiosPublic";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const Logout = () => {
        setLoading(true)
        signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser)
            console.log('current User', currentUser);
            if(currentUser){
                // get token
                const userEmail = {email: currentUser.email}
                axiosPublic.post('/jwt',userEmail)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('Access-token',res.data.token);
                    }
                })
            }
            else{
                // remove token
                localStorage.removeItem('Access-token');
            }
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        Logout,
        updateUserProfile,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;