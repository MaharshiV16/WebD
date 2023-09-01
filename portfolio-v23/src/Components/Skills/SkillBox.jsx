import React from "react";

const SkillBox = (props) => {
	const { name, level, icon } = props;
	return (
		<div className="skills__data">
			<i className={icon + " skills__icon"}></i>
			<div>
				<h3 className="skills__name">{name}</h3>
				<span className="skills__level">{level}</span>
			</div>
		</div>
	);
};

export default SkillBox;
