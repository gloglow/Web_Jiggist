'use server'
import { cookies } from "next/headers"
import { adminAuth } from "../../lib/firebase/admin";

export async function setAuthCookie(token: string){
  cookies().set("token", token, {
    httpOnly: true,
    secure: true,
  });
}

export async function getUser(){
  const token = cookies().get("token")?.value;

  if(!token){
    return null;
  }
  
  try{
    return await adminAuth.verifyIdToken(token);
  }catch{
    return null;
  }
}