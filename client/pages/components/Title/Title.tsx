import React from "react";
import styles from "./Title.module.css";
import { Text } from "@chakra-ui/react";

function Title({ content }: { content: string }) {
	return (
		<div className={styles.title}>
			<Text fontSize={"4xl"}>{content}</Text>
		</div>
	);
}

export default Title;
