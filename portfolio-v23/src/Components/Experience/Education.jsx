import React from "react";

const Education = (props) => {
	const handleClick = () => {
		props.function(1);
	};

	return (
		<div
			className={props.state === 1 ? "experience__button button--flex experience__active" : "experience__button button--flex"}
			onClick={handleClick}
		>
			<i className="uil uil-graduation-cap experience__icon"></i> Educational
		</div>
	);
};

const EduData = (props) => {
	return (
		<div className={props.state === 1 ? "experience__content experience__content-active" : "experience__content"}>
			<div className="experience__data">
				<div>
					<h3 className="experience__title">B. Tech.</h3>
					<span className="experience__subtitle">NIT Hamirpur</span>
					<div className="experience__calendar">
						<i className="uil uil-calendar-alt"></i> 2020 - 2024
					</div>
				</div>
				<div>
					<span className="experience__rounder"></span>
					<div className="experience__line"></div>
				</div>
			</div>
			<div className="experience__data">
				<div></div>
				<div>
					<span className="experience__rounder"></span>
					<span className="experience__line"></span>
				</div>
				<div>
					<h3 className="experience__title">12th</h3>
					<span className="experience__subtitle">Jayshree Periwal High School</span>
					<div className="experience__calendar">
						<i className="uil uil-calendar-alt"></i> 2020
					</div>
				</div>
			</div>
			<div className="experience__data">
				<div>
					<h3 className="experience__title">10th</h3>
					<span className="experience__subtitle">Jayshree Periwal High School</span>
					<div className="experience__calendar">
						<i className="uil uil-calendar-alt"></i> 2018
					</div>
				</div>
				<div>
					<span className="experience__rounder"></span>
					<div className="experience__line"></div>
				</div>
			</div>
		</div>
	);
};

export { Education, EduData };
