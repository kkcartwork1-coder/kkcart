import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYg9AEJb5SiSHIKR6L5l3zSasmPN3b2uI",
  authDomain: "kkcart-a706f.firebaseapp.com",
  projectId: "kkcart-a706f",
  storageBucket: "kkcart-a706f.firebasestorage.app",
  messagingSenderId: "495366207857",
  appId: "1:495366207857:web:d60357d496b1a828e4ded0",
  measurementId: "G-MNKK33DXM3"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();