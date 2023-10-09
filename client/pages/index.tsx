import styles from "./styles/index.module.css";
import RootLayout from "./Layout";
import ScoreCard from "./components/ScoreCard/ScoreCard";

export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <ScoreCard />
      </main>
    </RootLayout>
  );
}
