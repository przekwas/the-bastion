import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import { GiScrollUnfurled, GiLockedFortress, GiCoronation, GiCheckMark, GiFamilyTree, GiSundial, GiKing } from 'react-icons/gi';
import { Button, FormLabel, FormInput, BasePage, InputGroup } from '../../components';
import * as usersService from '../../services/user';

function Register() {
	const history = useHistory();
	const { signin, authenticated } = useAuth();
	const { values, handleChanges, handleSubmit } = useForm(handleRegister);
	const [confirmError, setConfirmError] = useState(null);

	function handleRegister() {
		delete values.confirmPassword;
		usersService
			.register(values)
			.then(() => signin('/admin'))
			.catch(e => history.push('/fuck', e.message));
	}

	// compare password validation
	useEffect(() => {
		if (!values.password || !values.confirmPassword) return;

		if (values.password !== values.confirmPassword) {
			setConfirmError('passwords do not match');
		} else {
			setConfirmError(null);
		}
	}, [values.password, values.confirmPassword]);

	// already logged in check
	if (authenticated) {
		return <Redirect to="/admin" />;
	}

	return (
		<BasePage>
			<form className="flex flex-col items-center justify-center w-full">
				<div className="w-full mb-6">
					<FormLabel htmlFor="email">Email</FormLabel>
					<InputGroup>
						<GiScrollUnfurled className="mx-2 text-3xl" />
						<FormInput
							value={values.email || ''}
							onChange={handleChanges}
							type="email"
							name="email"
							autoComplete="email"
						/>
					</InputGroup>
				</div>
				<div className="w-full mb-6">
					<FormLabel htmlFor="username">Username</FormLabel>
					<InputGroup>
						<GiKing className="mx-2 text-3xl" />
						<FormInput
							value={values.username || ''}
							onChange={handleChanges}
							type="username"
							name="username"
							autoComplete="username"
						/>
					</InputGroup>
				</div>
				<div className="w-full mb-6">
					<FormLabel htmlFor="first_name">First Name</FormLabel>
					<InputGroup>
						<GiSundial className="mx-2 text-3xl" />
						<FormInput
							value={values.first_name || ''}
							onChange={handleChanges}
							type="text"
							name="first_name"
							autoComplete="given-name"
						/>
					</InputGroup>
				</div>
				<div className="w-full mb-6">
					<FormLabel htmlFor="last_name">Last Name</FormLabel>
					<InputGroup>
						<GiFamilyTree className="mx-2 text-3xl" />
						<FormInput
							value={values.last_name || ''}
							onChange={handleChanges}
							type="text"
							name="last_name"
							autoComplete="family-name"
						/>
					</InputGroup>
				</div>
				<div className="w-full mb-6">
					<FormLabel htmlFor="password">Password</FormLabel>
					<InputGroup>
						<GiLockedFortress className="mx-2 text-3xl" />
						<FormInput
							value={values.password || ''}
							onChange={handleChanges}
							type="password"
							name="password"
							autoComplete="new-password"
						/>
					</InputGroup>
					{confirmError && <small className="text-red-500">{confirmError}</small>}
				</div>
				<div className="w-full mb-6">
					<FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
					<InputGroup>
						<GiCheckMark className="mx-2 text-3xl" />
						<FormInput
							value={values.confirmPassword || ''}
							onChange={handleChanges}
							type="password"
							name="confirmPassword"
							autoComplete="new-password"
						/>
					</InputGroup>
					{confirmError && <small className="text-red-500">{confirmError}</small>}
				</div>
				<Button
					color="blue"
					className="flex items-center justify-center w-2/3 mt-5"
					onClick={handleSubmit}>
					<GiCoronation className="mr-2 text-2xl" />
					Register
				</Button>
			</form>
		</BasePage>
	);
}

export default Register;
