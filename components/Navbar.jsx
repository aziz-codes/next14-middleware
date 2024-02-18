"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
      {pathName === "/" ? null : (
        <div className="h-14 flex w-full border-b items-center px-2 justify-between">
          <h4>Navbar</h4>
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
