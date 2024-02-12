import { auth, googleProvider } from "@/core/firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";


export const handleGoogleSignIn = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    localStorage.setItem('user', response.user);
    localStorage.setItem('token', response.user.getIdToken);
    return response.user;
}

export const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log(getUser());
    
};

export const getUser = async () => {
    localStorage.getItem('user');
}
