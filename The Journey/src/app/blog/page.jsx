import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
	const res = await fetch("https://mv-blog.vercel.app/api/posts", { next: { revalidate: 2 } });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

// const getData = async () => {
// 	const res = await import("../api/posts/route.js");
// 	return await (await res.GET()).json();
// };

const Blog = async () => {
	const data = await getData();
	console.log(data);
	return (
		<div className={styles.mainContainer}>
			{data.map((item) => (
				<Link
					href={`/blog/${item._id}`}
					className={styles.container}
					key={item.id}
				>
					<div className={styles.imageContainer}>
						<Image
							src={item.image}
							alt=""
							width={400}
							height={250}
							className={styles.image}
						/>
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;
