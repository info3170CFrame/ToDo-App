import { useDispatch } from "react-redux";

import "./styles.scss";
import { AiFillDelete } from "react-icons/ai";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { deleteTask, changeStatus } from "../../redux/taskSlice";
import * as database from "../../database";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database/config";
import { useState } from "react";

export default function Task(props) {
	const dispatch = useDispatch();
	const [status, setStatus] = useState(props.task.status);

	const handleStatusChange = async (event, id) => {
		event.preventDefault();
		const taskRef = doc(db, "tasks", id);
		const taskSnapshot = await getDoc(taskRef);
		const taskData = taskSnapshot.data();
		const currentStatus = taskData.status;
		const updatedStatus = !currentStatus;
		await database.update(id, updatedStatus);
		dispatch(changeStatus(id, updatedStatus));
		setStatus(updatedStatus);
		const updatedTask = { ...props.task, status: updatedStatus };
		props.onTaskUpdate(updatedTask);
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
				<span className={status ? "complete" : "open"}>
					{status ? "Complete" : "Open"}
				</span>
			</div>
			<div className='task-buttons'>
				<button
					onClick={(event) => handleStatusChange(event, props.task.id)}
					className='status-button'
				>
					<div className='toggle-icon'>
						{status ? <FaToggleOn /> : <FaToggleOff />}
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
