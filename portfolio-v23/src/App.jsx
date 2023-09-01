import "./App.css";
// ! Component Imports
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScollToTop/ScrollToTop";

// ? Other Imports

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Skills />
				<Experience />
				<Contact />
			</main>
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
