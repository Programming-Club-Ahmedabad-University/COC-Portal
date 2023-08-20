"use client";

import { Button } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignInButton() {
  const { data: session } = useSession();

  // if the user does exist:
  if (session && session.user) {
    return (
      <>
        <p className="text-sky-600">
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
      <Button color="primary" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}

export default SignInButton;
