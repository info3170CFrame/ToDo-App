import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialTasks = [
	{
		id: uuid(),
		description: "Complete Lab 4",
		complete: true,
	},
	{
		id: uuid(),
		description: "Complete Quiz",
		complete: false,
	},
	{
		id: uuid(),
		description: "Complete discussion 8",
		complete: true,
	},
];

export const taskSlice = createSlice({
	name: "task",
	initialState: {
		tasks: initialTasks,
	},
	reducers: {
		clearTasks: (state, action) => {
			state.tasks = [];
		},
		deleteTask: (state, action) => {
			const id = action.payload;
			state.tasks = state.tasks.filter((task) => task.id !== id);
		},
		changeStatus: (state, action) => {
			const id = action.payload;
			state.tasks.forEach((task) => {
				if (task.id === id) {
					task.complete = !task.complete;
				}
			});
		},
		addTask: (state, action) => {
			const newTask = {
				id: uuid(),
				description: action.payload.description,
				done: action.payload.status,
			};
			state.tasks.push(newTask);
		},
	},
});

export const { clearTasks, deleteTask, changeStatus, addTask } =
	taskSlice.actions;
export default taskSlice.reducer;
