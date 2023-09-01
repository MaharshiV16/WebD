import { useState } from "react";
import "./App.css";
import Text from "./Text";

function App() {
	const [text, setText] = useState(false);

	return (
		<div className="App">
			<button
				onClick={() => {
					setText(!text);
				}}
			>
				Show Text
			</button>
			{text && <Text />}
		</div>
	);
}

export default App;
