import styles from "./page.module.css";
import { Button } from "@nextui-org/button";
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
