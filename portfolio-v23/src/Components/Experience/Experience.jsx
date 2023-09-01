import React, { useState } from "react";
import { Education, EduData } from "./Education";
import { Work, WorkData } from "./Work";
import "./Experience.css";

const Experience = () => {
	const [toggleState, setToggleState] = useState(2);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="section experience qualification">
			<h2 className="section__title">Experience</h2>
			<span className="section__subtitle">My Journey</span>
			<div className="experience__container container">
				<div className="experience__tabs">
					<Education state={toggleState} function={setToggleState} />
					<Work state={toggleState} function={setToggleState} />
				</div>
				<div className="experience__sections">
					<EduData state={toggleState} />
					<WorkData state={toggleState} />
				</div>
			</div>
		</section>
	);
};

export default Experience;
