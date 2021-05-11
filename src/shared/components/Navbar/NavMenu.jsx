import NavItem from './NavItem';
import { useAuth } from '../../hooks/useAuth';

const NAV_LINKS = [
	{
		id: 1,
		exact: true,
		to: '/',
		text: 'Home'
	},
	{
		id: 2,
		exact: false,
		to: '/characters',
		text: 'Characters'
	},
	{
		id: 3,
		exact: false,
		to: '/locations',
		text: 'Locations'
	},
	{
		id: 4,
		exact: true,
		to: '/events',
		text: 'Events'
	},
	{
		id: 5,
		exact: true,
		to: '/admin',
		text: 'Admin'
	}
];

function NavMenu({ type }) {
	const { logout } = useAuth();
	
	return (
		<div className="w-full pt-6 xl:w-1/3 md:pt-0">
			<ul
				className={`flex ${
					type === 'col' ? 'flex-col' : 'flex-row'
				} items-center justify-around`}>
				{NAV_LINKS.map(item => (
					<NavItem key={`nav-item-${item.id}`} {...item} />
				))}
				<NavItem exact={true} to="/login" text="Login" />
				<li className="py-4 text-indigo-200">
					<button onClick={logout} className="px-4 py-2 font-medium rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none">
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
}

export default NavMenu;