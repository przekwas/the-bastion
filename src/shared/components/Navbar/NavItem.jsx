import { NavLink } from 'react-router-dom';

function NavItem({ text, ...rest }) {
	return (
		<li className="py-4 text-indigo-200">
			<NavLink
				{...rest}
				className="px-4 py-2 font-medium rounded-md hover:bg-indigo-600 hover:text-white"
				activeClassName="bg-indigo-700 text-white">
				{text}
			</NavLink>
		</li>
	);
}

export default NavItem;

/*

 { text: 'Home' }

 

 
*/
