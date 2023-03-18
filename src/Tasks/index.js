import { useSelector, useDispatch } from "react-redux";
import { clearTasks } from "../redux/taskSlice";

import Task from "./Task/task";
import "./styles.scss";
import { MdDeleteSweep } from "react-icons/md";

export default function Tasks() {
	let tasks = useSelector((state) => state.task.tasks);
	const dispatch = useDispatch();

	const clear = () => {
		dispatch(clearTasks());
	};

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
