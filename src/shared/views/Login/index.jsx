import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import { GiScrollUnfurled, GiLockedFortress } from 'react-icons/gi';
import { Button, FormLabel, FormInput } from '../../components';
import InputGroup from './LoginGroup';
import * as usersService from '../../services/user';

function Login() {
	const history = useHistory();
	const { success } = useAuth();
	const { values, handleChanges, handleSubmit } = useForm(handleLogin);

	function handleLogin() {
		usersService
			.login(values)
			.then(() => success('/profile'))
			.catch(e => history.push('/fuck', e.message));
	}

	return (
		<div className="flex items-center justify-center px-2 mx-auto mt-10 md:px-0 md:w-2/3 lg:w-1/2 xl:w-1/3">
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
				<Button color="blue" className="w-2/3 mt-4" onClick={handleSubmit}>
					Login
				</Button>
			</form>
		</div>
	);
}

export default Login;
