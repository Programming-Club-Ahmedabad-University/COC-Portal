import React from "react";
import styles from "./ClanCard.module.css";
import { color } from "framer-motion";
import Image from "next/image";

function ClanCard({ clan }: { clan: string }) {
	function getCol({ clan }: { clan: string }): string {
		switch (clan) {
			case "Wizards":
				return "w";
			case "P.E.K.K.A.s":
				return "p";
			case "Barbarians":
				return "b";
			default:
				return "g";
		}
	}

	return (
		<div className={`${styles.cardMini} ${styles[getCol({ clan })]}`}>
			<div className={styles.cardInfo}>
				<div className={styles.title}>{clan}</div>
				<div className={styles.sub}>
					Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
				</div>
			</div>
			{/* Image */}
			<div className={styles.pic}>
				<Image
					src={`/images/troops/${getCol({ clan })}.png`}
					alt={clan}
					width={403}
					height={508}
				/>
			</div>
		</div>
	);
}

export default ClanCard;
