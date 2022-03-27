import React , {useContext ,  useState , useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { auth } from "../firebase";

const AuthContext = React.createContext();
export function useAuth (){ return useContext(AuthContext)}
export function AuthProvider ({children}) {
    const [loading , setLoading] = useState(true);
    const [user,setUser] = useState();
    
    const nav=useNavigate();

    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            nav('/chats');
        })
    },[user,nav]
);
    const varr ={user};
    return(
        <AuthContext.Provider value={varr}>
            {!loading && children}
        </AuthContext.Provider>
    )
}