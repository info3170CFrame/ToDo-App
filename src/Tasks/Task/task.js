import { useDispatch } from "react-redux";

import "./styles.scss";
import { AiFillDelete } from "react-icons/ai";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { deleteTask, changeStatus } from "../../redux/taskSlice";
import * as database from "../../database";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database/config";

export default function Task(props) {
	// const tasks = useSelector((state) => state.task.tasks);
	const dispatch = useDispatch();

	const handleStatusChange = async (event, id) => {
		event.preventDefault();
		const taskRef = doc(db, "tasks", id);
		const taskSnapshot = await getDoc(taskRef);
		const taskData = taskSnapshot.data();
		const currentStatus = taskData.status;
		const updatedStatus = !currentStatus;
		await database.update(id, updatedStatus);
		dispatch(changeStatus(props.task.id));
	};

	const handleRemoveTask = async (event) => {
		event.preventDefault();
		database.remove(props.task.id);
		dispatch(deleteTask(props.task.id));
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
					onClick={(event) => handleStatusChange(event, props.task.id)}
					className='status-button'
				>
					<div className='toggle-icon'>
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
