"use client";

import { Button } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";

// prop to redirect to the dashboard

function SignInButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  // if the user does not exist:
  return (
    <>
      <h1>Sign in here</h1>

      <Button
        isLoading={loading}
        color="primary"
        onClick={async () => {
          setLoading(true);
          await signIn("google", {
            callbackUrl: "/dashboard",
          });
        }}
      >
        {loading ? "Signin In..." : "Sign in with Google"}
      </Button>
    </>
  );
}

export default SignInButton;
