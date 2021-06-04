import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import {
	GiScrollUnfurled,
	GiLockedFortress,
	GiCoronation,
	GiCheckMark,
	GiFamilyTree,
	GiSundial,
	GiKing,
	GiRobe
} from 'react-icons/gi';
import { Button, FormLabel, FormInput, BasePage, InputGroup, Toast, Modal } from '../../components';
import * as usersService from '../../services/user';

function Register() {
	const history = useHistory();
	const { authenticated } = useAuth();
	const { values, handleChanges, handleSubmit } = useForm(handleRegister);
	const [confirmError, setConfirmError] = useState(null);

	function handleRegister() {
		if (!validateInputs()) return;

		delete values.confirmPassword;
		usersService
			.register(values)
			.then(user_id =>
				history.push('/validate', {
					user_id,
					discord_name: values.discord_name,
					email: values.email
				})
			)
			.catch(e => history.push('/fuck', e.message));
	}

	// error toasts to help validate
	function validateInputs() {
		let validationCheck = null,
			toastMessage = null;

		if (!values.email) {
			toastMessage = 'Email input is required';
			validationCheck = false;
		} else if (!values.username) {
			toastMessage = 'Username input is required';
			validationCheck = false;
		} else if (!values.first_name) {
			toastMessage = 'First Name input is required';
			validationCheck = false;
		} else if (!values.last_name) {
			toastMessage = 'Last Name input is required';
			validationCheck = false;
		} else if (!values.discord_name) {
			toastMessage = 'Discord Name input is required';
			validationCheck = false;
		} else if (!values.password) {
			toastMessage = 'Password input is required';
			validationCheck = false;
		} else if (!values.confirmPassword) {
			toastMessage = 'Compare Password input is required';
			validationCheck = false;
		} else {
			validationCheck = true;
		}

		toastMessage && Toast.error(toastMessage);
		return validationCheck;
	}

	// modal for copying discord tag
	function handleModalHelp() {
		Modal.fire({
			title: 'Examplename#1234',
			text: 'click to copy it on desktop, or go to user settings on mobile',
			imageUrl:
				'https://cdn.discordapp.com/attachments/414983096652267524/850212578542092288/Untitled.png',
			imageAlt: 'how to copy correct discord name'
		});
	}

	// compare password validation
	useEffect(() => {
		if (!values.password || !values.confirmPassword) return;

		if (values.password !== values.confirmPassword) {
			setConfirmError('passwords do not match');
		} else if (values.password.length < 4) {
			setConfirmError('that is a weak af password, do better idiot');
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
				<small className="self-center text-xs font-light text-red-500">
					* all fields required *
				</small>
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
							placeholder="falstad@stormhammer.com"
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
							placeholder="Aegrim_Ironblood"
						/>
					</InputGroup>
					<small className="self-start text-xs font-light text-indigo-500">
						numbers 0-9, letters a-z, _ and . only (underscore and period)
					</small>
				</div>
				<div className="w-full mb-6">
					<FormLabel htmlFor="last_name">Discord Name</FormLabel>
					<InputGroup>
						<GiRobe className="mx-2 text-3xl" />
						<FormInput
							value={values.discord_name || ''}
							onChange={handleChanges}
							type="text"
							name="discord_name"
							autoComplete="on"
							placeholder="Hammerdown#1234"
						/>
					</InputGroup>
					<small className="self-start text-xs font-light text-indigo-500">
						copy from discord, like{' '}
						<span
							className="font-semibold text-blue-500 underline cursor-pointer"
							onClick={handleModalHelp}>
							this
						</span>
					</small>
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
							placeholder="Falstad"
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
							placeholder="Stormhammer"
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
							placeholder="imreallytheking"
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
							placeholder="imreallytheking"
						/>
					</InputGroup>
					{confirmError && <small className="text-red-500">{confirmError}</small>}
				</div>
				<Button
					color="blue"
					className="flex items-center justify-center w-2/3 my-5"
					onClick={handleSubmit}>
					<GiCoronation className="mr-2 text-2xl" />
					Register
				</Button>
			</form>
		</BasePage>
	);
}

export default Register;
