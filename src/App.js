import Header from "./components/Header/header";
import HomePage from "./pages/HomePage";
import Add from "./pages/Add";
import Help from "./pages/Help";
import Introduction from "./pages/Help/Introduction";
import AddTaskInfo from "./pages/Help/AddTaskInfo";
import RemoveTask from "./pages/Help/RemoveTask";
import ChangeStatus from "./pages/Help/ChangeStatus";
import PageNotFound from "./pages/PageNotFound";
import * as database from "./database";
import { setTasks } from "./redux/taskSlice";
import { useDispatch } from "react-redux";
import Loading from "./components/Loading";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/index.scss";

export default function App() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		// load the db
		(async () => {
			const data = await database.loadFromFirebase();
			dispatch(setTasks(data));
			setIsLoading(false);
		})();
	});

	return (
		<>
			<Header />
			{isLoading ? (
				<Loading />
			) : (
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
					>
						<Route
							path='intro'
							element={<Introduction />}
						/>
						<Route
							path='addtaskinfo'
							element={<AddTaskInfo />}
						/>
						<Route
							path='removetask'
							element={<RemoveTask />}
						/>
						<Route
							path='changestatus'
							element={<ChangeStatus />}
						/>
					</Route>
					<Route
						path='*'
						element={<PageNotFound />}
					/>
				</Routes>
			)}
		</>
	);
}
