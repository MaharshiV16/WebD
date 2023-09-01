"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkMoteToggle from "../DarkModeToggle/DarkMoteToggle";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Interests",
		url: "/interest",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 5,
		title: "Contact",
		url: "/contact",
	},
];

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Link
				href="/"
				className={styles.logo}
			>
				The Journey
			</Link>
			<div className={styles.links}>
				<DarkMoteToggle />
				{links.map((link) => (
					<Link
						href={link.url}
						key={link.id}
						className={styles.link}
					>
						{link.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
