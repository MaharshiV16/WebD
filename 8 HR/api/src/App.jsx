import { useState } from "react";
import "./App.css";
import Axios from "axios";
import { useEffect } from "react";

function App() {
	const [fact, setFact] = useState("");

	// ? Basic way
	// fetch("https://catfact.ninja/fact")
	// 	.then((response) => response.json())
	//   .then((data) => console.log(data));

	// ? Usin Axios (Preffered)
	useEffect(() => {
		getFact;
	}, []);

	const getFact = () => {
		Axios.get("https://catfact.ninja/fact").then((res) => {
			setFact(res.data.fact);
		});
	};

	return (
		<div className="App">
			<button onClick={getFact}>Generate Cat Fact</button>
			<p>{fact}</p>
		</div>
	);
}

export default App;
