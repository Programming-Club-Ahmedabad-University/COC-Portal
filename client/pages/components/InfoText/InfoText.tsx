import React from "react";
import styles from "./InfoText.module.css";
import { Text } from "@chakra-ui/react";

function InfoText({ content }: { content: string }) {
	return <Text fontSize={"lg"}>{content}</Text>;
}

export default InfoText;
