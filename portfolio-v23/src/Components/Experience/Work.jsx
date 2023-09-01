import React from "react";

const Work = (props) => {
	const handleClick = () => {
		props.function(2);
	};

	return (
		<div
			className={props.state === 2 ? "experience__button button--flex experience__active" : "experience__button button--flex"}
			onClick={handleClick}
		>
			<i className="uil uil-briefcase-alt experience__icon"></i> Professional
		</div>
	);
};

const WorkData = (props) => {
	return (
		<div className={props.state === 2 ? "experience__content experience__content-active" : "experience__content"}>
			<div className="experience__data">
				<div>
					<h3 className="experience__title">Research Intern</h3>
					<span className="experience__subtitle">IIT Bombay</span>
					<div className="experience__calendar">
						<i className="uil uil-calendar-alt"></i> Dec 2022 - Jan 2023
					</div>
				</div>
				<div>
					<span className="experience__rounder"></span>
					<span className="experience__line"></span>
				</div>
			</div>
			<div className="experience__data">
				<div></div>
				<div>
					<span className="experience__rounder"></span>
					<span className="experience__line"></span>
				</div>
				<div>
					<h3 className="experience__title">ReactJS Intern</h3>
					<span className="experience__subtitle">Fly Media Network</span>
					<div className="experience__calendar">
						<i className="uil uil-calendar-alt"></i> Apr 2022 - Jun 2022
					</div>
				</div>
			</div>
			<div className="experience__data">
				<div>
					<h3 className="experience__title">ReactJS Intern</h3>
					<span className="experience__subtitle">Alumni Cell Web Team</span>
					<div className="experience__calendar">
						<i className="uil uil-calendar-alt"></i> September 2021 - October 2021
					</div>
				</div>
				<div>
					<span className="experience__rounder"></span>
					<span className="experience__line"></span>
				</div>
			</div>
		</div>
	);
};

export { Work, WorkData };
