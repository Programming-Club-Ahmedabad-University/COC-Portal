import React from "react";
import RootLayout from "./Layout";
import styles from "./styles/LandingPage.module.css";
import { Text } from "@chakra-ui/react";
import CodeDivider from "./components/CodeDivider/CodeDivider";
import Image from "next/image";
import ClanCard from "./components/ClanCard/ClanCard";
import { Heading } from "@chakra-ui/react";

function landingPage() {
	return (
		<RootLayout>
			<div className={styles.wrapper}>
				<Heading
					variant={"shining"}
					children="Welcome to the ultimate Competitive Programming Extravaganza!"
				/>

				<CodeDivider />

				{/* card */}
				<div className={styles.cardA}>
					<Image src="/images/barb.png" alt="barb" width={400} height={300} />
					<div className={styles.txt}>
						<Heading
							children="Lorem, ipsum dolor sit amet consectetur"
							variant={"shining"}
						/>
						<div>
							<Text
								children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
								nulla pellentesque dignissim enim sit amet venenatis urna
								cursus. Morbi tristique senectus et netus et malesuada fames."
							/>
						</div>
					</div>
				</div>

				<CodeDivider />

				{/* card */}
				<div className={styles.cardB}>
					<Image
						src="/images/builder.png"
						alt="build"
						width={500}
						height={221}
					/>
					<div className={styles.txt}>
						<Heading children="COC Auction is Live Now!" />
					</div>
					<div className={styles.subTxt}>
						<Text
							children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
						nulla pellentesque dignissim enim sit amet venenatis urna cursus.
						Morbi tristique senectus et netus et malesuada fames."
						/>
					</div>
				</div>

				<CodeDivider />

				{/* card */}
				<div className={styles.cardB}>
					<Heading
						variant={"shining"}
						children="4 Clans. 16 Teams. 1 Winner."
					/>

					<Text children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " />

					<div className={styles.cardGrid}>
						<ClanCard clan="Wizards" />
						<ClanCard clan="P.E.K.K.A.s" />
						<ClanCard clan="Barbarians" />
						<ClanCard clan="Giants" />
					</div>

					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
						nulla pellentesque
					</Text>
				</div>
			</div>
		</RootLayout>
	);
}

export default landingPage;