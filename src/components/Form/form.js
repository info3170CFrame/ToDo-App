import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import * as database from "../../database";
import "./styles.scss";

export default function Form() {
	// const form = useSelector((state) => state.form);
	const dispatch = useDispatch();

	const [description, setDescription] = useState("");
	const [status, setStatus] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [isSaving, setIsSaving] = useState(false);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// verify that the user had entered something in the description field
		if (description === "") {
			setErrorMsg("Please enter a description");
			setSuccessMessage("");
		} else {
			setIsSaving(true);
			const data = { description: description, status: status };
			const savedId = await database.save(data);
			setIsSaving(false);
			if (savedId) {
				data.id = savedId;

				dispatch(addTask(data));

				// clear form by resetting the state
				setDescription("");
				setStatus(false);

				setErrorMsg("");
				setSuccessMessage("New task submitted!");
			}
		}
	};

	if (isSaving) {
		return <div>Saving...</div>;
	}

	return (
		<form
			className='form-component'
			onSubmit={handleFormSubmit}
		>
			{/* if the error message is not empty, prompt user to fill in description */}
			{errorMsg !== "" && successMessage === "" && (
				<div className='errorMsg'>{errorMsg}</div>
			)}
			{successMessage !== "" && errorMsg === "" && (
				<div className='successMsg'>{successMessage}</div>
			)}
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
