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
