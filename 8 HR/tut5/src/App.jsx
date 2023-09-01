import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Navbar from "./Navbar";
import { useState, createContext } from "react";
// ! Creating Global Context
export const AppContext = createContext();

function App() {
	const [userName, setUserName] = useState("Maharshi");
	return (
		<div className="App">
			{/*  Means  We are "Providing" Context(data) to the content wrapped in it */}
			<AppContext.Provider value={{ userName, setUserName }}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="*" element={<Home />} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
