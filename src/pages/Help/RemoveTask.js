import { NavLink } from "react-router-dom";

export default function RemoveTask() {
	return (
		<>
			<p>
				To remove a task Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut tristique et egestas quis. Suscipit tellus mauris a diam maecenas.
				Eget est lorem ipsum dolor sit amet consectetur. Cras sed felis eget
				velit aliquet sagittis id consectetur. Risus commodo viverra maecenas
				accumsan lacus.
			</p>
			<NavLink
				to='/help'
				className='back-button'
			>
				Back to Help Page
			</NavLink>
		</>
	);
}
