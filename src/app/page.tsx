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
				<header className={styles.header}>
					<h1 className={styles.title}>
						Victor Crest<span className={styles.age}>26</span>
					</h1>
					<p className={styles.location}>London</p>
				</header>
				<hr className={styles.horizontalLine} />
				<footer className={styles.footer}>
					<div>
						<h3 className={styles.figure}>80K</h3>
						<h2 className={styles.figureTitle}>Followers</h2>
					</div>
					<div>
						<h3 className={styles.figure}>803K</h3>
						<h2 className={styles.figureTitle}>Likes</h2>
					</div>
					<div>
						<h3 className={styles.figure}>1.4K</h3>
						<h2 className={styles.figureTitle}>Photos</h2>
					</div>
				</footer>
			</section>
		</main>
	);
}
