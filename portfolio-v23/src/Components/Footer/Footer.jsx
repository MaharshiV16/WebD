import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">mv.</h1>
				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Projects
						</a>
					</li>
					<li>
						<a href="#contact" className="footer__link">
							Contact me
						</a>
					</li>
				</ul>
				<div className="footer__social">
					<a href="https://www.instagram.com/_lil.halfblood_/" className="footer__social-link" target="_blank">
						<i className="uil uil-instagram"></i>
					</a>
					<a href="https://www.linkedin.com/in/maharshi-vashistha-953bbb202/" className="footer__social-link" target="_blank">
						<i className="uil uil-linkedin-alt"></i>
					</a>
					<a href="https://github.com/MaharshiV16" className="footer__social-link" target="_blank">
						<i className="uil uil-github-alt"></i>
					</a>
				</div>
				<span className="footer__copy">&#169; Maharshi Vashistha. All rights reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
