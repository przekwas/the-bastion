function Button({ color, className, onClick, children }) {
	return (
		<button className={`btn-${color} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
