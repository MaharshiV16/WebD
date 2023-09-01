import React, { useState } from "react";
import "./Header.css";

const Header = () => {
	// ! Change background header
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header");
		if (this.scrollY >= 200) header.classList.add("scroll-header");
		else header.classList.remove("scroll-header");
	});

	// ! Toggle Menu
	const [toggle, setToggle] = useState(false);

	const [activeNav, setActiveNav] = useState("#home");

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<header className="header">
			<nav className="nav container">
				<a className="nav__logo" href="/">
					mv.
				</a>
				<div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list">
						<li className="nav__item">
							<a
								className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
								href="#home"
								onClick={() => setActiveNav("#home")}
							>
								<i className="uil uil-estate nav__icon"></i> Home
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#about"
								className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
								onClick={() => setActiveNav("#about")}
							>
								<i className="uil uil-user nav__icon"></i> About
							</a>
						</li>

						<li className="nav__item">
							<a
								className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
								onClick={() => setActiveNav("#skills")}
								href="#skills"
							>
								<i className="uil uil-file-alt nav__icon"></i> Skills
							</a>
						</li>

						<li className="nav__item">
							<a
								className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}
								onClick={() => setActiveNav("#projects")}
								href="#projects"
							>
								<i className="uil uil-scenery nav__icon"></i> Projects
							</a>
						</li>

						<li className="nav__item">
							<a
								className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
								onClick={() => setActiveNav("#contact")}
								href="#contact"
							>
								<i className="uil uil-message nav__icon"></i> Contact
							</a>
						</li>
					</ul>
					<i
						className="uil uil-times nav__close"
						onClick={() => {
							handleToggle();
						}}
					></i>
				</div>
				<div
					className="nav__toggle"
					onClick={() => {
						handleToggle();
					}}
				>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
