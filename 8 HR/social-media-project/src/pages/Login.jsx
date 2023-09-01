import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const signIn = async () => {
		const result = await signInWithPopup(auth, provider);
		navigate("/");
	};

	return (
		<div>
			<h3>Sign in with Google to continue</h3>
			<button onClick={signIn}>Sign in</button>
		</div>
	);
}

export default Login;
