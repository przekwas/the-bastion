function Button({ color, className, onClick, children }) {
	return (
		<button className={`btn btn-${color} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
