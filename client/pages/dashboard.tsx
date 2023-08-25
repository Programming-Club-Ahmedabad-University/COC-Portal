import { signOut, useSession } from "next-auth/react";
import UserCard from "./components/UserCard/UserCard";
import { Button } from "@nextui-org/react";
import style from "./styles/Dashboard.module.css";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className={style.container}>
      Dashboard
      <UserCard user={session?.user} />
      <Button color="primary" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
}
