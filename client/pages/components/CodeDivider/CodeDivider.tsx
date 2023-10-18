import React from "react";
import styles from "./CodeDivider.module.css";
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

function CodeDivider() {
	return (
		<Box position="relative" padding="5" className={styles.divCont}>
			<div className={styles.longg}>
				<Divider borderWidth={"0.2em"} />
				<AbsoluteCenter bg={"hsl(0, 0%, 10%)"} color={"white"} px="3">
					<div className={styles.txt}>{"</>"}</div>
				</AbsoluteCenter>
			</div>
		</Box>
	);
}

export default CodeDivider;
