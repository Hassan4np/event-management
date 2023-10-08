
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation } from "react-router-dom";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null);


const AuthRouter = ({ children }) => {
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(true)

    const UserSignup = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    console.log(user)
    //google login----->
    const UserGooglelogin = () => {
        return signInWithPopup(auth, provider)
    }

    //Login------>
    const UserLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Logout-------->
    const UserLogOut = () => {
        setloading(true)
        return signOut(auth)
    }

    //On state Change objarbe the state------>
    useEffect(() => {
        onAuthStateChanged(auth, (current) => {
            setuser(current)
            setloading(false)
        });

    }, []);


    const Authinfo = {
        UserLogin,
        UserSignup,
        UserLogOut,
        user,
        loading,
        UserGooglelogin,
    }
    return (
        <div>
            <AuthContext.Provider value={Authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthRouter;