import { signOut, useSession } from "next-auth/react";
import UserCard from "./components/UserCard/UserCard";
import { Button } from "@nextui-org/react";
import style from "./styles/Dashboard.module.css";
import Layout from "./Layout";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <Layout>
        <div className={style.container}>
          <h1 className={style.title}>Dashboard</h1>

          <div>
            <UserCard user={session?.user} />
          </div>

          <div>
            <Button
              color="primary"
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
            >
              Sign out
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
}
