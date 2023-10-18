import React from "react";
import RootLayout from "./Layout";
import styles from "./styles/landingPage.module.css";

function landingPage() {
	return (
		<>
			<RootLayout>
				<div className={styles.headLine}>
					Welcome to the ultimate Competitive Programming Extravaganza!
				</div>
			</RootLayout>
		</>
	);
}

export default landingPage;
