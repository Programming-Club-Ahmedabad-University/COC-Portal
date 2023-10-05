import styles from "./styles/index.module.css";
import SignInButton from "./components/SignInButton/SignInButton";
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
