import React from "react";
import RootLayout from "./Layout";
import styles from "./styles/landingPage.module.css";
import CodeDivider from "./components/CodeDivider/CodeDivider";
import Image from "next/image";

function landingPage() {
	return (
		<>
			<RootLayout>
				<div className={styles.headLine}>
					Welcome to the ultimate Competitive Programming Extravaganza!
				</div>

				<CodeDivider />

				{/* card */}
				<div className={styles.card}>
					<Image src="/images/barb.png" alt="logo" width={350} height={350} />
					<div className={styles.txt}>
						<div className={styles.title}>
							Lorem, ipsum dolor sit amet consectetur
						</div>
						<div>
							<div className={styles.subTxt}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
								nulla pellentesque dignissim enim sit amet venenatis urna
								cursus. Morbi tristique senectus et netus et malesuada fames.
							</div>
						</div>
					</div>
				</div>

				<CodeDivider />

				{/* card */}
				<div></div>

				<CodeDivider />

				{/* card */}
				<div></div>
			</RootLayout>
		</>
	);
}

export default landingPage;
