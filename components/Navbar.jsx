"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };
  return (
    <>
      {session && (
        <div className="h-14 flex w-full border-b items-center px-2 justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/users">Users</Link>
            <Link href="/account">Account</Link>
          </div>
          <img
            src={session.user.image}
            className="h-10 w-10 rounded-full border p-1"
            onClick={handleLogout}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
