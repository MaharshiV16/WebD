import React from "react";
import Frontend from "./Frontend";
import SoftwareDevelopment from "./SoftwareDevelopment";
import Tools from "./Tools";
import SoftSkills from "./SoftSkills";
import "./Skills.css";

const Skills = () => {
	return (
		<section className="section skills" id="skills">
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">My Technical Level</span>
			<div className="skills__container container grid">
				<Frontend />
				<SoftwareDevelopment />
				<Tools />
				<SoftSkills />
			</div>
		</section>
	);
};

export default Skills;
