import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./styles-components/navbar.css";

function Navbar() {
	const [user, loading, error] = useAuthState(auth);

	const SignOut = async () => {
		await signOut(auth);
	};

	return (
		<div className="navbar">
			<Link to="/" className="Link">
				Home
			</Link>
			{user ? (
				<Link to="/create" className="Link">
					Create Post
				</Link>
			) : (
				<Link to="/login" className="Link">
					Login
				</Link>
			)}
			<div className="user">
				<img src={user?.photoURL} className="user-img" />
				<p className="user-content">{user?.displayName}</p>
				{user && (
					<button className="user-btn" onClick={SignOut}>
						Log Out
					</button>
				)}
			</div>
		</div>
	);
}

export default Navbar;
