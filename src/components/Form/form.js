import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./styles.scss";

export default function Form({ onAddTask }) {
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// verify that the user had entered something in the description field
		if (description === "") {
			setErrorMsg("Please enter a description");
		} else {
			// this calls the function from App.js
			onAddTask(description, status);

			// clear form by resetting the state
			setDescription("");
			setStatus(false);

			setErrorMsg("");
		}
	};

	return (
		<form
			className='form-component'
			onSubmit={handleFormSubmit}
		>
			<h2 className='form-new-task'>Add a new task:</h2>
			{/* if the error message is not empty, prompt user to fill in description */}
			{errorMsg !== "" && <div className='errorMsg'>{errorMsg}</div>}
			<div className='details'>
				<label className='form-description'>
					Description:
					<input
						type='text'
						maxLength={150}
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				</label>

				<label className='form-status'>
					Status:
					<select
						value={status}
						onChange={(event) => setStatus(event.target.value)}
					>
						<option value={false}>Open</option>
						<option value={true}>Completed</option>
					</select>
				</label>
				<button
					type='submit'
					className='form-add-button'
				>
					<AiFillPlusCircle />
				</button>
			</div>
		</form>
	);
}
