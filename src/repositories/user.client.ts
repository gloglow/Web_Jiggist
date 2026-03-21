import { user } from "@/types/user";
import { db } from "../../lib/firebase/client";
import { doc, setDoc } from "firebase/firestore";

export async function createUser(user: user) {
  const ref = doc(db, "users", user.uid);

  try {
    await setDoc(ref, {
      ...user,
      createdAt: new Date().toISOString(),
    }, { merge: true }
    );
  } catch (error) {
    console.log(error);
  }

}