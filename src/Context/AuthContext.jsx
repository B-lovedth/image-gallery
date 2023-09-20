import {useContext,useEffect,createContext, useState} from 'react';
import {auth} from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext)
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [query,setQuery] = useState("Random");

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        return auth.signOut();
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    },[])
    const authValue ={
        currentUser,
        signIn,
        logOut,
        query,
        setQuery
    }
    return(
        <AuthContext.Provider value={authValue} >
            {!loading && children}
        </AuthContext.Provider>
    )
}