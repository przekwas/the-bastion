import { useState, useEffect } from 'react';

const variant = {
	red: 'text-red-100 bg-red-500 border-red-900',
	green: 'text-green-100 bg-green-500 border-green-900'
};

function Alert({ children, color, className }) {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timerid = setTimeout(() => setShow(false), 5000);

		return () => {
			clearTimeout(timerid);
		};
	}, []);

	if (!show) {
		return null;
	}

	return (
		<small
			className={`block px-5 py-2 mt-5 text-center border rounded-lg shadow ${className} ${variant[color]}`}>
			{children}
		</small>
	);
}

export default Alert;
