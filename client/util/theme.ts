import { extendTheme } from "@chakra-ui/react";

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

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: getColor("background"),
				color: getColor("text"),
			},
		},
	},
	components: {
		Button: {
			variants: {
				primary: {
					text: getColor("text"),
					bg: getColor("primary"),
				},
				secondary: {
					text: getColor("background"),
					bg: getColor("secondary"),
				},
			},
		},
		Menu: {
			baseStyle: {
				backgroundColor: getColor("background"),
				border: "1px solid black",
				textTransform: "uppercase",
			},
		},
		MenuButton: {
			baseStyle: {
				color: getColor("text"),
				textTransform: "uppercase",
			},
		},
	},
	colors,
});

export default theme;
