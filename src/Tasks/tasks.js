import Task from "./Task/task";
import "./styles.scss";
import { MdDeleteSweep } from "react-icons/md";
// import { useSelector } from "react-redux";

export default function Tasks({
	tasks,
	onStatusChange,
	onRemoveTask,
	onClearTasks,
}) {
	return (
		<div className='main-tasks'>
			<h2>List of tasks:</h2>
			{tasks.map((task, index) => (
				<Task
					key={index}
					task={task}
					onStatusChange={onStatusChange}
					onRemoveTask={onRemoveTask}
				/>
			))}

			<button
				onClick={onClearTasks}
				className='clear-button'
			>
				<MdDeleteSweep />
				Clear All Tasks
				<MdDeleteSweep />
			</button>
		</div>
	);
}
