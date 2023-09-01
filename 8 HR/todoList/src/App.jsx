import { useState } from "react";
import "./App.css";
import TaskItem from "./taskItem";

function App() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");

	const inputChange = (event) => {
		setInput(event.target.value);
	};

	const clickBtn = () => {
		// const newList = [...tasks, input]
		setTasks([...tasks, { id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, name: input, isDone: false }]);
		console.log(tasks);
	};

	const removeElement = (taskId) => {
		const newTasks = tasks.filter((task) => {
			return task.id !== taskId;
		});
		setTasks(newTasks);
	};

	const taskCompleted = (taskId) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskId) {
					return { ...task, isDone: true };
				} else {
					return task;
				}
			}),
		);
	};

	return (
		<div className="App">
			<div className="header">
				<input type="text" onChange={inputChange} className="input" />
				<button onClick={clickBtn}>Add Task</button>
			</div>
			<div className="content">
				{tasks.map((task) => {
					return <TaskItem name={task.name} id={task.id} completed={task.isDone} deleteTask={removeElement} doneTask={taskCompleted} />;
				})}
			</div>
		</div>
	);
}

export default App;
