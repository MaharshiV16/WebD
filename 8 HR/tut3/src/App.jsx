import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";

function App() {
	const [count, setCount] = useState(0);
	// ! path = "*" -> Takes the undefined route to the provided element
	return (
		<div className="App">
			<Router>
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
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
