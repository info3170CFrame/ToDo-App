import "./styles.scss";
import { AiFillDelete } from "react-icons/ai";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

export default function Task(props) {
	const handleStatusChange = () => {
		const id = props.task.id;
		props.onStatusChange(id);
	};
	const handleRemoveTask = () => {
		const id = props.task.id;
		props.onRemoveTask(id);
	};
	const handleToggle = () => {
		const id = props.task.id;
		props.onToggle(id);
	};
	return (
		<div className='each-task'>
			<h3 className='task-title'>{props.task.description}</h3>
			<div className='task-id'>Id: {props.task.id}</div>
			<div className='task-status'>
				<strong>Status:</strong>
				<span className={props.task.complete ? "complete" : "open"}>
					{props.task.complete ? "Complete" : "Open"}
				</span>
			</div>
			<div className='task-buttons'>
				<button
					onClick={handleStatusChange}
					className='status-button'
				>
					<div
						className='toggle-icon'
						onClick={handleToggle}
					>
						{props.task.complete ? <FaToggleOn /> : <FaToggleOff />}
						Change Status
					</div>
				</button>
				<button
					onClick={handleRemoveTask}
					className='remove-button'
				>
					<AiFillDelete />
					Remove Task
				</button>
			</div>
		</div>
	);
}
