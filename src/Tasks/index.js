import { useSelector, useDispatch } from "react-redux";
import { clearTasks } from "../redux/taskSlice";
import * as database from "../database";

import Task from "./Task/task";
import "./styles.scss";
import { MdDeleteSweep } from "react-icons/md";

export default function Tasks() {
	let tasks = useSelector((state) => state.task.tasks);
	const dispatch = useDispatch();

	const clear = (event) => {
		event.preventDefault();
		database.clear();
		dispatch(clearTasks());
	};

	if (tasks.length === 0) {
		return <div>Nothing to do...</div>;
	}

	return (
		<div className='main-tasks'>
			{tasks.map((task, index) => (
				<Task
					key={index}
					task={task}
				/>
			))}

			<button
				onClick={clear}
				className='clear-button'
			>
				<MdDeleteSweep />
				Clear All Tasks
				<MdDeleteSweep />
			</button>
		</div>
	);
}
