import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const colors = {
	text: "0 0% 100%",
	background: "0 0% 10%",
	primary: "0 69% 53%",
	secondary: "220 51% 84%",
	accent: "37 98% 47%",
};

type Colors = "text" | "background" | "primary" | "secondary" | "accent";

export function getColor(color: Colors, opacity?: number) {
	return `hsl(${colors[color]} / ${opacity ?? 1} )`;
}
const Button = defineStyleConfig({
	// The styles all button have in common
	baseStyle: {
		textTransform: "uppercase",
	},
	// Two sizes: sm and md

	// Two variants: outline and solid

	variants: {
		primary: {
			color: getColor("text"),
			bg: getColor("primary"),
		},
		secondary: {
			color: getColor("background"),
			bg: getColor("secondary"),
		},
	},
	// The default size and variant values
});

const Heading = defineStyleConfig({
	baseStyle: {
		fontFamily: "Clash fonts",
	},
	variants: {
		shining: {
			background:
				"linear-gradient(90deg, #D7A768, #FFF4B4, #F2AE3A, #FFF1BE, #F7A92E)",
			backgroundClip: "text",
		},
	},
	defaultProps: {
		size: "lg",
	},
});
const Text = defineStyleConfig({
	baseStyle: {
		fontSize: "ex",
		color: "#EBEBEB",
		fontFamily: "Clash fonts",
	},
});

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "#303030",

				color: getColor("text"),
			},
		},
	},
	components: {
		Button,
		Heading,
		Text,
	},
	colors,
});

export default theme;
