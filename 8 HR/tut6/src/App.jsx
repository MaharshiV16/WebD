import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	// ! This uses default configs like update the data when tabs are changed
	// const client = new QueryClient();
	const client = new QueryClient({
		defaultOptions: {
			queries: { refetchOnWindowFocus: false },
		},
	});
	return (
		<div className="App">
			<QueryClientProvider client={client}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="*" element={<Home />} />
					</Routes>
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;
