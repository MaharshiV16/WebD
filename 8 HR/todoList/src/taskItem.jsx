import React from "react";

function TaskItem(props) {
	return (
		<div>
			<div className="list-item" style={{color: props.completed ? "green": "white"}}>
				<h3>{props.name}</h3>
				<button onClick={() => props.doneTask(props.id)}>Done</button>
				<button onClick={() => props.deleteTask(props.id)}>X</button>
			</div>
		</div>
	);
}

export default TaskItem;
