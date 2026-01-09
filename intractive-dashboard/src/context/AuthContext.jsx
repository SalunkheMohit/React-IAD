import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ users, setUsers ] = useState(null);

    const login = (email) => setUsers({ email });
    const logout = () => setUsers(null);

    return (
        <AuthContext.Provider value={{ users, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}