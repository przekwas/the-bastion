import { useEffect } from 'react';
import { Redirect, useHistory, useLocation, Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import { userService } from '../../services';
import { GiScrollUnfurled, GiLockedFortress, GiJusticeStar } from 'react-icons/gi';

import { Button, FormLabel, FormInput, BasePage, Toast, InputGroup } from '../../components';

function Login() {
	const history = useHistory();
	const { state } = useLocation();
	const { signin, authenticated } = useAuth();
	const { values, handleChanges, handleSubmit } = useForm(handleLogin);

	function handleLogin() {
		userService
			.login(values)
			.then(() => {
				// route to admin dashboard by default
				let route = '/admin';

				// check to see if they came from a specific page
				// to return to it after logging in
				if (state && state.from !== '/') {
					route = state.from;
				}

				signin(route);
			})
			.catch(e => history.push('/fuck', e.message));
	}

	// redirected check
	useEffect(() => {
		if (!state || !state.error) return;

		Toast.error(state.error);
	}, [state]);

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
							placeholder="falstad@stormhammer.com"
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
							placeholder="imreallytheking"
						/>
					</InputGroup>
				</div>
				<Button
					color="blue"
					className="flex items-center justify-center w-2/3 my-5"
					onClick={handleSubmit}>
					<GiJusticeStar className="mr-2 text-2xl" />
					Login
				</Button>
				<Link
					to="/register"
					className="block my-10 text-sm text-indigo-600 underline justify-self-end">
					Don't have an account? Create one!
				</Link>
			</form>
		</BasePage>
	);
}

export default Login;
