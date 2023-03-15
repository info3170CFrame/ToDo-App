import { NavLink } from "react-router-dom";
import "./styles.scss";

function MainMenu() {
	return (
		<nav className='main'>
			<NavLink to='/'>Tasks</NavLink>
			<NavLink to='/add'>Add</NavLink>
			<NavLink to='/help'>Help</NavLink>
		</nav>
	);
}
export default MainMenu;
