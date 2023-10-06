import { useSession } from "next-auth/react";
import style from "./styles/Dashboard.module.css";
import Layout from "./Layout";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <Layout>
        <div className={style.container}>
          <h1 className={style.title}>Dashboard</h1>
        </div>
      </Layout>
    </>
  );
}
