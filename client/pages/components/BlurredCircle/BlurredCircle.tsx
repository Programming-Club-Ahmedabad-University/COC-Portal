import styles from "./BlurredCircle.module.css";
export default function BlurredCircle({
	color,

	top,
	left,
}: {
	color: string;

	top: string;
	left: string;
}) {
	return (
		<div
			className={styles.blurredCircle}
			style={{
				backgroundColor: color,

				left: left,
				top: top,
			}}
		></div>
	);
}
