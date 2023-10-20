import React from "react";
import styles from "./CodeDivider.module.css";
import { Heading } from "@chakra-ui/react";

function CodeDivider() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.divider}> </div>
			<Heading size={"md"}>{"</>"}</Heading>
			<div className={styles.divider}> </div>
		</div>
	);
}

export default CodeDivider;
