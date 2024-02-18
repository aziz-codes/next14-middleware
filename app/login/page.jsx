"use client";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        className="px-3 py-2 rounded-md bg-sky-500 text-white"
        onClick={() => signIn("github")}
      >
        Sign in with Github
      </button>
    </div>
  );
};

export default Login;
