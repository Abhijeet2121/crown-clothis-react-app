import React from 'react';
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from '../util/Firebase/firebase';

export const UserContext = React.createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const value = { currentUser, setCurrentUser };

    React.useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};