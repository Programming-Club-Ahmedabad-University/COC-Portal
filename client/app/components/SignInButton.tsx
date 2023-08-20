"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignInButton() {
  const { data: session } = useSession();

  // if the user does exist:
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">
          {session.user.name} ({session.user.email})
        </p>

        <button
          className="bg-sky-600 text-white p-2 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  // if the user does not exist:
  return (
    <div className="flex gap-4 ml-auto">
      <button
        className="bg-sky-600 text-white p-2 rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}

export default SignInButton;
