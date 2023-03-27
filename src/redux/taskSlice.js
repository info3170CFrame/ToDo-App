import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
	name: "task",
	initialState: {
		tasks: [],
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
			state.tasks.push(action.payload);
		},
		setTasks: (state, action) => {
			state.tasks = action.payload;
		},
	},
});

export const { clearTasks, deleteTask, changeStatus, addTask, setTasks } =
	taskSlice.actions;
export default taskSlice.reducer;
