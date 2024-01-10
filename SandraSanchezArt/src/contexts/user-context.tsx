import { createContext, useState, useEffect, FC, ReactNode} from "react"; // bring in FC and ReactNode to fix type error in children
import { createUserDocOrSignInUserFromAuth, onUserAuthStateChangedListener } from "../utilities/firebase-utilities";
import {User} from 'firebase/auth';

type UserContextProps = {
    currentUser: User | null,
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
};

type UserProviderProps = {
    children: ReactNode;
}

export const UserContext = createContext<UserContextProps>({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider: FC<UserProviderProps> = ({children}) => { // this is what will wrap around whatever components that need data. Allow any children / child components to access data
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onUserAuthStateChangedListener((user) => {
            if(user){
                createUserDocOrSignInUserFromAuth(user);
            }

            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//type errors--

//1.) children has implicit `any` type

// 2.) `The type error reads: `Argument of type 'User | null' is not assignable to parameter of type 'SetStateAction<null>'.` when calling setCurrentUser(user)
// Type 'User' is not assignable to type 'SetStateAction<null>'.
// Type 'User' provides no match for the signature '(prevState: null): null'.ts(2345)`
