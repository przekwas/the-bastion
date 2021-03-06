import { useAuth } from '../../hooks/useAuth';
import { useLocation } from 'react-router';
import { Modal } from '../';
import { GiDiceTwentyFacesOne } from 'react-icons/gi';
import NavItem from './NavItem';

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
		exact: false,
		to: '/events',
		text: 'Events'
	},
	{
		id: 5,
		exact: false,
		to: '/notes',
		text: 'Notes'
	}
];

function NavMenu({ type, closeMenu }) {
	const { pathname } = useLocation();
	const { logout, authenticated } = useAuth();

	const handleLogout = () => {
		Modal.fire({
			iconHtml: <GiDiceTwentyFacesOne />,
			iconColor: 'rgb(245, 158, 11)',
			title: <div className="text-yellow-900">Are you sure?</div>,
			footer: <div className="text-indigo-900">You'll fail login saves if you do!</div>,
			showCancelButton: true,
			confirmButtonText: 'Logout',
			customClass: {
				footer: 'logout-modal-footer',
				popup: 'logout-modal-popup',
				confirmButton: 'btn-pink',
				cancelButton: 'btn-gray'
			}
		}).then(result => {
			if (result.isConfirmed) {
				logout();
				closeMenu();
			}
		});
	};

	return (
		<div className="w-full pt-6 xl:w-1/3 md:pt-0">
			<ul
				className={`flex ${
					type === 'col' ? 'flex-col' : 'flex-row'
				} items-center justify-around`}>
				{NAV_LINKS.map(item => (
					<NavItem key={`nav-item-${item.id}`} {...item} closeMenu={closeMenu} />
				))}
				{authenticated ? (
					<>
						<NavItem exact to="/admin" text="Admin" closeMenu={closeMenu} />
						<li className="text-indigo-200 ">
							<button
								onClick={handleLogout}
								className="px-4 py-2 font-medium rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none">
								Logout
							</button>
						</li>
					</>
				) : (
					<NavItem
						exact={true}
						to={{
							pathname: '/login',
							state: { from: pathname }
						}}
						text="Login"
						closeMenu={closeMenu}
					/>
				)}
			</ul>
		</div>
	);
}

export default NavMenu;
