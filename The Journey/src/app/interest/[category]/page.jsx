import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./category.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
	const data = items[cat];
	if (data) {
		return data;
	} else {
		return notFound();
	}
};

const Category = ({ params }) => {
	const data = getData(params.category);

	return (
		<div className={styles.category}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			{data.map((item) => (
				<div
					className={styles.item}
					key={item.id}
				>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
					</div>
					<div className={styles.imgContainer}>
						<Image
							src={item.image}
							fill={true}
							className={styles.img}
							alt=""
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;
