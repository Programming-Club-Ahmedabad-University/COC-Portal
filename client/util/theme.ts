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

const MenuList = defineStyleConfig({
	// The styles all button have in common
	baseStyle: {
		backgroundColor: "red",
		minWidth: "100px",
		padding: "2em",
	},
});

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "#3030300f",

				color: getColor("text"),
			},
		},
	},
	components: {
		Button,
		MenuList,
	},
	colors,
});

export default theme;
