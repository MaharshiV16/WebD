import { useState } from "react";
import "./App.css";
// eslint-disable-next-line
import User from "./components/user";

// * Compenents
// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<User userName="Maharshi" userAge={21}/>
// 				<User userName="Kshitij" userAge={20}/>
// 			</header>
// 		</div>
// 	);
// }
// *

// * CSS and Ternary Operatos
// function App() {
// 	const age = 19;
// 	const isGreen = true;
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				{age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
// 				<h1 style={{ color: isGreen ? "green" : "red" }}>Text Here</h1>
// 				{isGreen && <button>This is a Button</button>}
// 			</header>
// 		</div>
// 	);
// }
// *

// * Lists
// function App() {
// 	const names = [
// 		{ name: "Maharshi", age: 21 },
// 		{ name: "Kshitij", age: 20 },
// 		{ name: "Yajat", age: 21 },
// 	];
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				{names.map((user, key) => {
// 					return <User userName={user.name} userAge={user.age} />;
// 				})}
// 			</header>
// 		</div>
// 	);
// }
// *

// * States and UseState
function App() {
	const [age, setAge] = useState(0);
	const [text, setText] = useState("");
	const [isShown, setIsShown] = useState(true);

	const click1 = () => {
		setAge(age + 1);
	};
	const click2 = () => {
		setAge(age - 1);
	};
	const click3 = () => {
		setAge(0);
	};
	const change = (event) => {
		setText(event.target.value);
	};
	const textClick = () => {
		setIsShown(!isShown);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>{age}</h1>
				<button className="btn" onClick={click1}>
					Increase
				</button>
				<button className="btn" onClick={click2}>
					Decrease
				</button>
				<button className="btn" onClick={click3}>
					Set To 0
				</button>
				<input type="text" className="btn" onChange={change} />
				<button className="btn" onClick={textClick}>
					Show Text ?
				</button>
				{/* <h3 style={{ display: !isShown && "none" }}>{text}</h3> */}
				{isShown && <h3>{text}</h3>}
			</header>
		</div>
	);
}
// *

export default App;
