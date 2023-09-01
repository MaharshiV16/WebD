import React from "react";

function User(props) {
	return (
		<div>
			<h1>Name: {props.userName}</h1>
			<h2>Age: {props.userAge}</h2>
		</div>
	);
}

export default User;
