import { useState } from 'react';

export function useForm(callback) {
	const [values, setValues] = useState({});

	const handleChanges = e => {
		setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		callback();
	};

	return {
		values,
		handleChanges,
		handleSubmit
	};
}
