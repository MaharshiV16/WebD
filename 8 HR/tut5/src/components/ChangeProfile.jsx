import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function ChangeProfile(props) {
	const { setUserName } = useContext(AppContext);
	const [newUserName, setNewUserName] = useState("");
	return (
		<div>
			<input
				type="text"
				onChange={(event) => {
					setNewUserName(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					setUserName(newUserName);
				}}
			>
				Change User Name
			</button>
		</div>
	);
}

export default ChangeProfile;
