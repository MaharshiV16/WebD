import React from "react";
import styles from "./interest.module.css";

const Layout = ({ children }) => {
	return (
		<div>
			<h1 className={styles.mainTitle}>My Interests</h1>
			{children}
		</div>
	);
};

export default Layout;
