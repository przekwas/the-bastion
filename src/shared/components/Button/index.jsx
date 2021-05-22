function Button({ color, className, onClick, children }) {
	let colorType = null;
	switch (color) {
		case 'blue':
			colorType = 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-400';
			break;
		case 'purple':
			colorType = 'bg-purple-500 hover:bg-purple-700 focus:ring-purple-400';
			break;
		case 'green':
			colorType = 'bg-green-500 hover:bg-green-700 focus:ring-green-400';
			break;
		default:
			colorType = 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-400';
			break;
	}
	return (
		<button className={`btn ${colorType} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
