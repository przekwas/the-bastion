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
		exact: true,
		to: '/login',
		text: 'Login'
	},
	{
		id: 5,
		exact: true,
		to: '/admin',
		text: 'Admin'
	}
];

function NavMenu({ type }) {
	return (
		<div className="w-full pt-6 md:w-1/3 md:pt-0">
			<ul
				className={`flex ${
					type === 'col' ? 'flex-col' : 'flex-row'
				} items-center justify-around`}>
				{NAV_LINKS.map(item => (
					<NavItem key={`nav-item-${item.id}`} {...item} />
				))}
			</ul>
		</div>
	);
}

export default NavMenu;
