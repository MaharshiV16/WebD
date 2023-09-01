import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Home() {
	const { userName, setUserName } = useContext(AppContext);
	return (
		<div>
			<h2>This is Home Page</h2>
			<h2>User Name : {userName}</h2>
		</div>
	);
}

export default Home;
