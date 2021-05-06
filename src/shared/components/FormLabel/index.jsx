import React from 'react';

function FormLabel({ children, ...rest }) {
	return (
		<label className="block mb-2 font-bold text-gray-500" {...rest}>
			{children}
		</label>
	);
}

export default FormLabel;
