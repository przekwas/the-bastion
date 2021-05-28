import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';

function Fab({ color, to }) {
	const fabColor = `bg-${color}-500 hover:bg-${color}-700`;
	return (
		<Link
			to={to}
			className={`${fabColor} flex items-center justify-center w-10 h-10 transition duration-200 ease-in rounded-full shadow active:shadow-lg mouse focus:outline-none`}>
			<GoPlus className="text-2xl text-gray-100" />
		</Link>
	);
}

export default Fab;
