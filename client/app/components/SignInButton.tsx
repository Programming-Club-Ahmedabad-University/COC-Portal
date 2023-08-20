"use client";

import { Button } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

function SignInButton() {
  const { data: session } = useSession();
  // add loading here:

  const [loading, setLoading] = useState(false);

  // if the user does exist:
  if (session && session.user) {
    return (
      <>
        <p className="text-sm">
          {session.user.name} ({session.user.email})
        </p>

        <Button color="primary" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }

  // if the user does not exist:
  return (
    <>
      <Button
        isLoading={loading}
        spinner={
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        }
        color="primary"
        onClick={async () => {
          setLoading(true);
          await signIn("google");
        }}
      >
        {loading ? "Signin In..." : "Sign in with Google"}
      </Button>
    </>
  );
}

export default SignInButton;
