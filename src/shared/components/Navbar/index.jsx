import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavBase from './NavBase';
import NavBrand from './NavBrand';
import NavMenu from './NavMenu';

function Navbar() {
	const isPageWide = useMediaQuery('(min-width: 1280px)');
	const [open, setOpen] = useState(false);

	useLayoutEffect(() => {
		setOpen(false);
	}, [isPageWide]);

	return (
		<NavBase>
			<div className="flex items-center justify-between md:container md:mx-auto">
				<NavBrand />
				{!isPageWide ? (
					<div className="text-4xl" onClick={() => setOpen(!open)}>
						<GiHamburgerMenu />
					</div>
				) : (
					<NavMenu type="row" />
				)}
			</div>
			{open && <NavMenu type="col" />}
		</NavBase>
	);
};

export default Navbar;
