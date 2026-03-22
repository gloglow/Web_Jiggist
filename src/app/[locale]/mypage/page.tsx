'use client'

import { logout } from "@/repositories/auth";

export default function Mypage() {
  return (
    <button
      onClick={logout}
    >
      logout
    </button>
  );
}