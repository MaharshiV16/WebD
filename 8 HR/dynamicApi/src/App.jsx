import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [data, setData] = useState(null);
	const getAge = () => {
		Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
			setData(response.data);
		});
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="Ex. Maharshi..."
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
      <button onClick={getAge}>Predict Age</button>
      <h2>Name: {data?.name}</h2>
			<h2>Predicted Age: {data?.age}</h2>
		</div>
	);
}

export default App;
