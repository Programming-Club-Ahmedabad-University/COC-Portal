import { useSession } from "next-auth/react";
import UserCard from "./components/UserCard";
import style from "./styles/Dashboard.module.css";
import Layout from "./Layout";
import ScoreBoard from "./components/ScoreBoard";
import ScoreCard from "./components/ScoreCard";

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

          {/* leaderboard table here */}
          <div>
            <ScoreBoard />
          </div>

          <div>
            <ScoreCard />
          </div>
        </div>
      </Layout>
    </>
  );
}
