import React from "react";
import SkillBox from "./SkillBox";
import { softSkills } from "./data";

const SoftSkills = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Soft Skills</h3>
			<div className="skills__box">
				<div className="skills__group">
					{softSkills.map((skill) => {
						return <SkillBox name={skill.name} level={skill.level} key={skill.name} icon={skill.icon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default SoftSkills;
