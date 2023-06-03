import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    useEffect( () => {
        try {
                if (!user) {
                    axios.get('/profile').then(({ data }) => {
                        setUser(data);
                        setReady(true);
                    });
                } 
            }
            catch (err) {
                console.error(err);
            }
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}