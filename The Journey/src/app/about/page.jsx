import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./about.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.imgContainer}>
				<Image
					src="https://i.imgur.com/c5g8tOo.png"
					fill={true}
					alt=""
					className={styles.img}
				/>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who Am I?</h1>
					<p className={styles.desc}>
						I am Maharshi Vashistha. Journeying through the corridors of time, the digits 20bcs004 stand as an emblematic
						testament to the euphoric highs and the tenacious lows that have etched their mark on the canvas of my college life.
						Welcome to my world, where my roll-number becomes more than a mere collection of digits, but a symbol of
						transformation, resilience, and the unwavering spirit that propelled me through the enchanting labyrinth of NIT
						Hamirpur.
						<br />
						<br />
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>What I Do?</h1>
					<p className={styles.desc}>
						I love to create exceptional web experiences that leave a lasting impression. With a firm command of C++ and ReactJS,
						I bring well-designed, intuitive, and practical websites to life. I embrace fresh ideas and the challenge of making my
						mark as a developer. I strive for growth, crafting impactful online solutions.
					</p>
					<Button
						text="Contact"
						url="contact"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
