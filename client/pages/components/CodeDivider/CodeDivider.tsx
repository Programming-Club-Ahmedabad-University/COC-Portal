import React from "react";
import styles from "./CodeDivider.module.css";
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

function CodeDivider() {
	return (
		<Box position="relative" padding="5" className={styles.divCont}>
			<div className={styles.longg}>
				<div className={styles.divider}> </div>
				<div className={styles.txt}>{"</>"}</div>
				<div className={styles.divider}> </div>
			</div>
		</Box>
	);
}

export default CodeDivider;
