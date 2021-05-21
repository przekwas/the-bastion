import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import { GiScrollUnfurled, GiLockedFortress } from 'react-icons/gi';
import { Button, FormLabel, FormInput, BasePage, Toast } from '../../components';
import InputGroup from './InputGroup';
import * as usersService from '../../services/user';

function Login() {
	const history = useHistory();
	const { state } = useLocation();
	const { signin, authenticated } = useAuth();
	const { values, handleChanges, handleSubmit } = useForm(handleLogin, {
		email: 'test@test.com',
		password: 'password123'
	});

	function handleLogin() {
		usersService
			.login(values)
			.then(() => signin('/profile'))
			.catch(e => history.push('/fuck', e.message));
	}

	// already logged in check
	useEffect(() => {
		if (authenticated) {
			history.push('/profile');
		}
	}, [authenticated, history]);

	// redirected check
	useEffect(() => {
		if (!state) return;

		Toast.error(state);
	}, [state]);

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
					<FormLabel htmlFor="password">Password</FormLabel>
					<InputGroup>
						<GiLockedFortress className="mx-2 text-3xl" />
						<FormInput
							value={values.password || ''}
							onChange={handleChanges}
							type="password"
							name="password"
							autoComplete="current-password"
						/>
					</InputGroup>
				</div>
				<Button color="blue" className="w-2/3 mt-5" onClick={handleSubmit}>
					Login
				</Button>
			</form>
		</BasePage>
	);
}

export default Login;
