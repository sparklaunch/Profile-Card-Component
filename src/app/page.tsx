import Image from "next/image";
import backgroundPattern from "../shared/assets/images/background-pattern.svg";
import bottomBackground from "../shared/assets/images/bottom-background.svg";
import topBackground from "../shared/assets/images/top-background.svg";
import styles from "./Home.module.css";

export default function Main() {
	return (
		<main className={styles.main}>
			<div className={styles.backgrounds}>
				<Image
					src={topBackground}
					alt=""
					className={styles.topBackground}
				/>
				<Image
					src={bottomBackground}
					alt=""
					className={styles.bottomBackground}
				/>
			</div>
			<section className={styles.card}>
				<Image
					src={backgroundPattern}
					alt=""
					className={styles.backgroundPattern}
				/>
			</section>
		</main>
	);
}
