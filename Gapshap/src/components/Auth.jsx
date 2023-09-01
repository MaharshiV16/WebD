import React from "react";
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";

import Cookies from "universal-cookie";
const cookie = new Cookies();

const Auth = ({ setIsAuth }) => {
	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			cookie.set("auth-token", result.user.refreshToken);
			setIsAuth(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="auth">
			<div>
				<p className="auth-heading">Sign in with Google to continue</p>
			</div>
			<div>
				<button onClick={signInWithGoogle}>
					<i className="fa fa-google gicon"></i> Sign in with Google
				</button>
			</div>
		</div>
	);
};

export default Auth;
