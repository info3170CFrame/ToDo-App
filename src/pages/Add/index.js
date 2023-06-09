import PageContainer from "../../components/PageContainer";
import Form from "../../components/Form/form.js";
import Tasks from "../../Tasks";

export default function Add() {
	return (
		<PageContainer title='Add a new task'>
			<Form />
			<Tasks />
		</PageContainer>
	);
}
