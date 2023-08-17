import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="text-9xl">45</div>
			<Button color="primary">Click me</Button>
		</main>
	);
}
