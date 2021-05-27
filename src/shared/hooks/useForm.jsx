import { useState } from 'react';

export function useForm(callback = () => {}, initialState = {}) {
	const [values, setValues] = useState(initialState);

	const handleChanges = e => {
		setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		callback();
	};

	return {
		values,
		setValues,
		handleChanges,
		handleSubmit
	};
}
