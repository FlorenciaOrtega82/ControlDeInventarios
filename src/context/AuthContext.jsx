import { createContext, useContext, useEffect, useState } from "react";
import { SiSession } from "react-icons/si";
import supabase from "../supabase/supabase.config";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log(event, session);
                if (session?.user == null) {
                    setUser(null);
                } else {
                    console.log("Data del usuario: ", session?.user);
                    setUser(session?.user);
                }
            }
        );
        return () => {
            authListener.subscription;
        };
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
export const UserAuth = () => {
    return useContext(AuthContext);
};
