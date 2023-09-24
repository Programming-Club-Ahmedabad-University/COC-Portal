import styles from "./index.module.css";
import { Button } from "@nextui-org/button";
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
