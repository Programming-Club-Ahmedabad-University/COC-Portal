import { Button } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import UserCard from "../UserCard/UserCard";

function SignInButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  // if the user does exist:
  if (session && session.user) {
    return (
      <>
        <UserCard user={session.user} />

        <Button color="primary" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }

  // if the user does not exist:
  return (
    <>
      <h1>Sign in here</h1>

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
