import styles from "./BlurredCircle.module.css";
export default function BlurredCircle({
	color,
	
	radius,
	top,
	left,
}: {
	color: string;
	
	radius: string;
	top: string;
	left: string;
}) {
	return (
		<div
			className={styles.blurredCircle}
			style={{
				backgroundColor: color,
				
				borderRadius: radius,
				left: left,
				top: top,
			}}
		></div>
	);
}
