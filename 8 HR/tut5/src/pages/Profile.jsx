import React from "react";
import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

function Profile() {
	const { userName } = useContext(AppContext);
	return (
		<div>
			<h2>This is Profile Page</h2>
			<h2>User Name : {userName}</h2>
			<ChangeProfile />
		</div>
	);
}

export default Profile;
