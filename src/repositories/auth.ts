import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../lib/firebase/client";
import { createUser, isExistUser } from "./user.client";
import { user } from "@/types/user";

export async function login(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  if (!isExistUser(user.uid) && user.email && user.displayName) {
    const userData: user = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      address: "",
      isAdminister: false
    };
    await createUser(userData);
  }

  return user;
}

export async function logout(){
  await signOut(auth);
}