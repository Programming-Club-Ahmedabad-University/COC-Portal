import React from "react";
import RootLayout from "./Layout";
import styles from "./styles/landingPage.module.css";
import CodeDivider from "./components/CodeDivider/CodeDivider";

function landingPage() {
	return (
		<>
			<RootLayout>
				<div className={styles.headLine}>
					Welcome to the ultimate Competitive Programming Extravaganza!
				</div>

				<CodeDivider />
			</RootLayout>
		</>
	);
}

export default landingPage;
