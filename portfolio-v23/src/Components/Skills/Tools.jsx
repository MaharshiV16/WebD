import React from "react";
import SkillBox from "./SkillBox";
import { tools } from "./data";

const Tools = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Tools</h3>
			<div className="skills__box">
				<div className="skills__group">
					{tools.map((skill) => {
						return <SkillBox name={skill.name} level={skill.level} key={skill.name} icon={skill.icon} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Tools;
