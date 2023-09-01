import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<TopComponent />
		</div>
	);
}

const TopComponent = () => {
	const [state, setState] = useState("Hello World");
	return (
		<div>
			<MiddleComponent state={state} />
		</div>
	);
};

const MiddleComponent = (props) => {
	return (
		<div>
			<BottomComponent state={props.state} />
		</div>
	);
};

const BottomComponent = (props) => {
	return <div>{props.state}</div>;
};

export default App;
