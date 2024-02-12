import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react"; // bring in FC and ReactNode to fix type error in children
import { createUserDocOrSignInUserFromAuth, onUserAuthStateChangedListener } from "../utilities/firebase-utilities";
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onUserAuthStateChangedListener((user) => {
            if (user) {
                createUserDocOrSignInUserFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return _jsx(UserContext.Provider, { value: value, children: children });
};
