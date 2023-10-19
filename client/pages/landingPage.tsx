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
				<div className={styles.cardA}>
					<Image src="/images/barb.png" alt="barb" width={782} height={500} />
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
				<div className={styles.cardB}>
					<Image
						src="/images/builder.png"
						alt="build"
						width={1050}
						height={521}
					/>
					<div className={styles.txt}>
						<div className={styles.titleB}>COC Auction is Live Now!</div>
					</div>
					<div className={styles.subTxtB}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
						nulla pellentesque dignissim enim sit amet venenatis urna cursus.
						Morbi tristique senectus et netus et malesuada fames.
					</div>
				</div>

				<CodeDivider />

				{/* card */}
				<div className={styles.cardB} >  </div>
			</RootLayout>
		</>
	);
}

export default landingPage;
