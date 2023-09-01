import React from "react";
import styles from "./interest.module.css";
import Link from "next/link";

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.selectTitle}>Choose a Interest</h1>
			<div className={styles.items}>
				<Link
					href="/interest/music"
					className={styles.item}
				>
					<span className={styles.title}>Music</span>
				</Link>
				<Link
					href="/interest/movies"
					className={styles.item}
				>
					<span className={styles.title}>Movies</span>
				</Link>
				<Link
					href="/interest/anime"
					className={styles.item}
				>
					<span className={styles.title}>Anime</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
