"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Link from "next/link";

const Footer = () => {
	const { mode } = useContext(ThemeContext);
	const fill = mode === "dark" ? "invert(1)" : "";
	return (
		<div className={styles.footer}>
			<div>© The Journey. All rights reserved.</div>
			<div className={styles.social}>
				<Link
					href="https://maharshi.vercel.app/"
					target="blank"
				>
					<Image
						src="/site.png"
						alt="website"
						width={20}
						height={20}
						className={styles.icon}
						style={{
							filter: fill,
						}}
					/>
				</Link>
				<Link
					href="https://github.com/MaharshiV16"
					target="blank"
				>
					<Image
						src="/github.png"
						alt="github"
						width={28}
						height={28}
						className={styles.icon}
						style={{
							filter: fill,
						}}
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/maharshi-vashistha"
					target="blank"
				>
					<Image
						src="/linkedin.png"
						alt="linkedin"
						width={25}
						height={25}
						className={styles.icon}
					/>
				</Link>
				<Link
					href="https://www.instagram.com/_lil.halfblood_/"
					target="blank"
				>
					<Image
						src="/instagram.png"
						alt="instagram"
						width={25}
						height={25}
						className={styles.icon}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
