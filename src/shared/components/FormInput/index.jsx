import React from 'react';

function FormInput({ ...rest }) {
	return (
		<input
			{...rest}
			className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-white rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
		/>
	);
}

export default FormInput;
