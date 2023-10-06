import styles from "./styles/index.module.css";
import RootLayout from "./Layout";

export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <div>Welcome ...</div>
      </main>
    </RootLayout>
  );
}
