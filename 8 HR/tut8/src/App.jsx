import { useState } from "react";
import "./App.css";
import { useToggle } from "./useToggle";

function App() {
	const [isVisible, toggleIsVisible] = useToggle(false);
	return (
		<div className="App">
			<button
				onClick={() => {
					toggleIsVisible();
				}}
			>
				{isVisible ? "Hide" : "Show"}
			</button>
			{isVisible && <p>Hidden Text</p>}
		</div>
	);
}

export default App;
