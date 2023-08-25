import styles from "./styles/index.module.css";
import SignInButton from "./components/SignInButton/SignInButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="text-xl">
        <SignInButton />
      </div>
    </main>
  );
}
