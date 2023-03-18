import Header from "./components/Header/header";
import HomePage from "./pages/HomePage";
import Add from "./pages/Add";
import Help from "./pages/Help";
import Introduction from "./pages/Help/Introduction";
import AddTaskInfo from "./pages/Help/AddTaskInfo";
import RemoveTask from "./pages/Help/RemoveTask";
import ChangeStatus from "./pages/Help/ChangeStatus";
import PageNotFound from "./pages/PageNotFound";

import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";

export default function App() {
	// const [tasks, setTasks] = useState([
	// 	{
	// 		id: uuid(),
	// 		description: "Complete Lab 4",
	// 		complete: true,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		description: "Complete Quiz",
	// 		complete: false,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		description: "Complete discussion 8",
	// 		complete: true,
	// 	},
	// ]);
	// const handleClearTasks = () => {
	// 	setTasks([]);
	// };

	// const handleStatusChange = (id) => {
	// 	const taskStatus = [...tasks];
	// 	taskStatus.forEach((task) => {
	// 		if (task.id === id) {
	// 			task.complete = !task.complete;
	// 		}
	// 	});
	// 	setTasks(taskStatus);
	// };

	// const handleRemoveTask = (id) => {
	// 	const filteredTasks = tasks.filter((task) => task.id !== id);
	// 	setTasks(filteredTasks);
	// };

	// const handleAddTask = (description, status) => {
	// 	//using the spread operator allows us to make a copy of the existing array
	// 	// and add the new task, triggering a change and render
	// 	setTasks([
	// 		...tasks,
	// 		{ id: uuid(), description: description, done: status },
	// 	]);
	// 	alert("new task added");
	// };

	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/add'
					element={<Add />}
				/>
				<Route
					path='/help'
					element={<Help />}
				/>
				<Route
					path='/help/intro'
					element={<Introduction />}
				/>
				<Route
					path='/help/addtaskinfo'
					element={<AddTaskInfo />}
				/>
				<Route
					path='/help/removetask'
					element={<RemoveTask />}
				/>
				<Route
					path='/help/changestatus'
					element={<ChangeStatus />}
				/>
				<Route
					path='*'
					element={<PageNotFound />}
				/>
			</Routes>
		</>
	);
}
