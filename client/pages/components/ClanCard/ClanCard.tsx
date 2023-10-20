import React from "react";
import styles from "./ClanCard.module.css";
import Image from "next/image";
import classNames from "classnames";

import Title from "../Title/Title";
import SubText from "../SubText/SubText";
import InfoText from "../InfoText/InfoText";

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
		<div className={classNames(styles.cardMini, styles[getCol({ clan })])}>
			<div className={styles.cardInfo}>
				<Title content={clan} />
				<InfoText content="Lorem, ipsum dolor sit amet consectetur adipisicing" />
			</div>
			{/* Image */}
			<div className={styles[`pic${getCol({ clan })}`]}>
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
