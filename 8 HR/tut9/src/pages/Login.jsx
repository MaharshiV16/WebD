import React from "react";
import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

function Login() {
	const [name, setName] = useState("");

	const dispatch = useDispatch();
	const userName = useSelector((state) => state.user.value.userName);

	return (
		<div>
			<h3>This is Login Page</h3>
			<h2>{userName}</h2>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					dispatch(login({ userName: name }));
					console.log(name);
				}}
			>
				LogIn
			</button>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				LogOut
			</button>
		</div>
	);
}

export default Login;
