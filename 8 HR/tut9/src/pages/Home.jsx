import React from "react";
import { useSelector } from "react-redux";

function Home() {
	const userName = useSelector((state) => state.user.value.userName);
	return (
		<div>
			<h2>{userName}</h2>
			<p>This is Home Page</p>
		</div>
	);
}

export default Home;
