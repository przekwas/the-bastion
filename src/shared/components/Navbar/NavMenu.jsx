import NavItem from './NavItem';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../';
import { GiDiceTwentyFacesOne } from 'react-icons/gi';

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
	}
];

function NavMenu({ type, closeMenu }) {
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
				confirmButton: 'btn bg-pink-500 hover:bg-pink-700 focus:ring-pink-400',
				cancelButton: 'btn bg-gray-500 hover:bg-gray-700 focus:ring-gray-400'
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
					<NavItem exact={true} to="/login" text="Login" closeMenu={closeMenu} />
				)}
			</ul>
		</div>
	);
}

export default NavMenu;
