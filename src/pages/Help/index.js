import PageContainer from "../../components/PageContainer";
import { NavLink, Outlet } from "react-router-dom";
import "./styles.scss";

export default function Help() {
	return (
		<PageContainer
			title='Help Page'
			className='help-page'
		>
			<article>Stuck? Try one of these links:</article>

			<aside>
				<NavLink to='/help/intro'>Introduction</NavLink>
				<NavLink to='/help/addtaskinfo'>Adding Tasks</NavLink>
				<NavLink to='/help/removetask'>Removing Tasks</NavLink>
				<NavLink to='/help/changestatus'>Changing Status</NavLink>
			</aside>
			<Outlet />
		</PageContainer>
	);
}
