import Image from "next/image";
import styles from "./home.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Beyond the Campus : The unfiltered tales</h1>
				<p className={styles.desc}>
					From epic late-night cram sessions to unforgettable friendships, Maharshi Vashistha invites you to relish the
					unvarnished truth behind the college years.
				</p>
				<Button
					url="/interest"
					text="My Interests"
				/>
			</div>
			<div className={styles.item}>
				<Image
					src="https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className={styles.img}
					width={150}
					height={150}
				/>
			</div>
		</div>
	);
}
