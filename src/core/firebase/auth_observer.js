// auth_observer.js
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const authObserver = (callback) => {
    const auth = getAuth();
    return onAuthStateChanged(auth, (user) => {
        callback(user);
    });
};

export default authObserver;
