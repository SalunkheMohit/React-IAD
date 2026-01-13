import { createContext,useEffect, useState } from "react";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ users, setUsers ] = useState(null);
    const [ loading, setLoading] = useState(true);

    const login = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
             setUsers(currentUser);
             setLoading(false);
        });
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{ users, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}