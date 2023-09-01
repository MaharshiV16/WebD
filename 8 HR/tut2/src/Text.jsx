import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Text.css";

function Text() {
	const [valueTxt, setValueTxt] = useState("");
	useEffect(() => {
		console.log("Component Mounted");
		return () => {
			console.log("Component Unmounted");
		};
	}, []);
	// ! Array of Dependencies
	// ! Empty means it will not be called on updating rather only on mounting
	return (
		<div className="txt">
			<input
				type="text"
				onChange={(e) => {
					setValueTxt(e.target.value);
				}}
			/>
			<div>{valueTxt}</div>
		</div>
	);
}

export default Text;
