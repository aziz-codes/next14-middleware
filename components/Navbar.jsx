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
      {!session ? (
        <h4>No session</h4>
      ) : (
        <div className="h-14 flex w-full border-b items-center px-2 justify-between">
          <button
            className="bg-sky-500 border-none rounded-md text-white px-2 py-1"
            onClick={handleLogout}
          >
            {session ? session.user.name : "Logout"}
          </button>
          <div className="flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/users">Users</Link>
            <Link href="/account">Account</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
