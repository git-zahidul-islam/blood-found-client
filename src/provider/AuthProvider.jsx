import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from '../hooks/useAxiosPublic'



export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()


    // all sign in and login
    const userCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // setLoading(false)
            // TODO: enable if and else open done
            if (currentUser) {
                // check user and fetch data
                const userData = { email: currentUser?.email }
                axiosPublic.post('/jwt', userData)
                    .then(res => {
                        console.log("token",res.data);
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false)
                        }
                    })
            } else {
                // TODO: remove token 
                localStorage.removeItem('access-token')
                setLoading(false)
            }

            console.log("currentUser", currentUser);

        })
        return () => {
            return unSubscribe()
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        setUser,
        userCreate,
        loginUser,
        logout,
        googleLogin,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;