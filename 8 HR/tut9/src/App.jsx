import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
// ! need to add react-router-dom, react-redux, @reduxjs/toolkit
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Link to={"/"} className="Link">
						Home
					</Link>
					<Link to={"/login"} className="Link">
						Login
					</Link>
					<Link to={"/contact"} className="Link">
						Contact
					</Link>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
