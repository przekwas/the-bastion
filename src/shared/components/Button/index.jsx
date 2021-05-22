function Button({ color, className, onClick, children }) {
	const type = `btn-${color}`;
	return (
		<button className={`${type} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;