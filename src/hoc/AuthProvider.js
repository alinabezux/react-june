import {createContext, useState} from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const logIn = (newUser, cb) => {
        setUser(newUser)
        cb();
    }

    const logOut = (cb) => {
        setUser(null)
        cb();
    }

    const valueAuth = {user, logIn, logOut};

    return (
        <div>
            <AuthContext.Provider value={valueAuth}>
                {children}
            </AuthContext.Provider>

        </div>
    );
}

export {AuthProvider, AuthContext}