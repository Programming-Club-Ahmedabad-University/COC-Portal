import {
  Avatar,
  //   TODO: make the following:
  //   Navbar,
  //   NavbarBrand,
  //   NavbarContent,
  //   NavbarItem,
} from "@chakra-ui/react";

import { Popover, PopoverTrigger, Menu, Button } from "@chakra-ui/react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
export default function NavBar() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  let authBtn;
  const navItems = [
    {
      name: "Leaderboard",
      link: "/",
    },
  ];
  if (session && session.user) {
    if (session.user.role === "Admin") {
      navItems.push({
        name: "Leaderboard Config",
        link: "/Admin/LeaderboardConfig",
      });
    }
    authBtn = (
      <>
        <Popover>
          <PopoverTrigger>
            <Avatar src={session.user.image!} />
          </PopoverTrigger>
          <Menu aria-label="Static Actions">
            <div key="new" color="danger" onClick={() => signOut()}>
              Sign out
            </div>
          </Menu>
        </Popover>
      </>
    );
  } else {
    authBtn = (
      <Button
        isLoading={loading}
        color="primary"
        variant="flat"
        onClick={async () => {
          setLoading(true);
          await signIn("google");
        }}
      >
        {loading ? "Signin In..." : "Sign in with Google"}
      </Button>
    );
  }

  return (
    <div>
      <div>
        <p className="font-bold text-inherit">COC </p>
      </div>
      <div>
        {navItems.map((item) => (
          <div key={item.name}>
            <Link href={item.link}>
              <div
                className={
                  item.link != router.pathname
                    ? "text-foreground"
                    : "text-primary"
                }
              >
                {item.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {session && session.user && (
          <>
            <div>
              {session.user.name}
              <small>{session.user.role}</small>
            </div>
          </>
        )}
        <div>{authBtn}</div>
      </div>
    </div>
  );
}
