import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<Link className="link" to="/">
				Home
			</Link>
			<Link className="link" to="/menu">
				Menu
			</Link>
			<Link className="link" to="/profile">
				Profile
			</Link>
		</div>
	);
}

export default Navbar;
