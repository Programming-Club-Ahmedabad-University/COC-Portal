import toast from "react-hot-toast";
// @ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function myToast(
	message: string,
	type: "success" | "error" | "default" = "default"
) {
	const style = {
		borderRadius: "10px",
		background: "#333",
		color: "#fff",
	};

	const successIconTheme = {
		primary: "#0fff0f",
		secondary: "#000",
	};
	const errorIconTheme = {
		primary: "#f00",
		secondary: "#000",
	};
	if (type === "success") {
		return toast.success(message, { style, iconTheme: successIconTheme });
	} else if (type === "error") {
		return toast.error(message, { style, iconTheme: errorIconTheme });
	}
	return toast(message, { style });
}
