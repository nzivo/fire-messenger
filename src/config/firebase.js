// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsuVXcyVZN2778a0ASL2sX408iwDU07d4",
  authDomain: "fire-message-3f873.firebaseapp.com",
  projectId: "fire-message-3f873",
  storageBucket: "fire-message-3f873.appspot.com",
  messagingSenderId: "707595366536",
  appId: "1:707595366536:web:7ea9cddbd120f82d9fef3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Firebase signup method
const handleAuthError = (error) => {
  const errorMessage = error.code.split("/")[1].split("-").join(" ");
  toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
  console.error(error);
};

const signup = async (username, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userData = {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey there, I am using fire message",
      lastSeen: Date.now(),
    };

    await Promise.all([
      setDoc(doc(db, "users", user.uid), userData),
      setDoc(doc(db, "chats", user.uid), { chatData: [] }),
    ]);
  } catch (error) {
    handleAuthError(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    handleAuthError(error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    handleAuthError(error);
  }
};

const resetPassword = async (email) => {
  console.log(email);
  if (!email) {
    toast.error("Enter your email");
    return null;
  }
  try {
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));
    const querySnap = await getDocs(q);
    if (!querySnap.empty) {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset Email Sent");
    } else {
      toast.error("Email doesn't exist");
    }
  } catch (error) {
    toast.error(error);
  }
};

export { signup, login, logout, auth, db, handleAuthError, resetPassword };
