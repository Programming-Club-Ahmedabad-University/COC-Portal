import styles from "./BlurredCircle.module.css";
export default function BlurredCircle({
	color,
	height,
	width,
	radius,
	top,
	left,
}: {
	color: string;
	height: string;
	width: string;
	radius: string;
	top: string;
	left: string;
}) {
	return (
		<div
			className={styles.blurredCircle}
			style={{
				backgroundColor: color,
				height: height,
				width: width,
				borderRadius: radius,
				left: left,
				top: top,
			}}
		></div>
	);
}
