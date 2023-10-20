import React from "react";
import styles from "./SubText.module.css";
import { Text } from "@chakra-ui/react";

function SubText({ content }: { content: string }) {
	return <Text fontSize={"2xl"}>{content}</Text>;
}

export default SubText;
