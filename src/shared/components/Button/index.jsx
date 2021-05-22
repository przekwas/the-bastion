function Button({ color, className, onClick, children }) {
	let type = null;
	switch (color) {
		case 'purple':
			type = 'bg-purple-500 hover:bg-purple-700 focus:ring-purple-400';
			break;
		case 'indigo':
			type = 'bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-400';
			break;
		case 'blue':
			type = 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-400';
			break;
		case 'pink':
			type = 'bg-pink-500 hover:bg-pink-700 focus:ring-pink-400';
			break;
		case 'gray':
			type = 'bg-gray-500 hover:bg-gray-700 focus:ring-gray-400';
			break;
		case 'red':
			type = 'bg-red-500 hover:bg-red-700 focus:ring-red-400';
			break;
		case 'yellow':
			type = 'bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-400';
			break;
		case 'green':
			type = 'bg-green-500 hover:bg-green-700 focus:ring-green-400';
			break;
		default:
			break;
	}
	return (
		<button
			className={`px-4 py-2 font-semibold rounded-lg shadow-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-75 ${type} ${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
