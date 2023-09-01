import React from "react";
import SkillBox from "./SkillBox";
import { dsa } from "./data";

const SoftwareDevelopment = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Software Development</h3>
			<div className="skills__box">
				<div className="skills__group">
					{dsa.map((skill) => {
						return <SkillBox name={skill.name} level={skill.level} key={skill.name} icon={skill.icon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default SoftwareDevelopment;
