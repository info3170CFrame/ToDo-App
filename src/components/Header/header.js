import { FcTodoList } from "react-icons/fc";
import MainMenu from "../MainMenu/MainMenu";
import "./styles.scss";

export default function Header() {
	return (
		<>
			<header className='main-header'>
				<FcTodoList className='list-icon' />
				<h1>To-Do App</h1>
				<div className='filler'></div>
				<div className='doneBy'>by Christine Frame</div>
			</header>
			<MainMenu />
		</>
	);
}
