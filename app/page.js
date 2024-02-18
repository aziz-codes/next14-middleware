"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <h4>session </h4>
      ) : (
        <h4>There is no session so must login first</h4>
      )}
    </div>
  );
};
export default Home;
