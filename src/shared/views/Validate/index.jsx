import { useEffect, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { BasePage, PageTitle, LoaderCard, Button, OTPInput } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import * as botService from '../../services/bot';

function Validate() {
	const history = useHistory();
	const { state } = useLocation();
	const { signin } = useAuth();
	const [validating, setValidating] = useState(false);
	const [randomCode, setRandomCode] = useState('');

	useEffect(() => {
		botService
			.generateValidation(state)
			.then(() => setValidating(true))
			.catch(e => history.push('/fuck', e.message));
	}, [history, state]);

	function handleClick(e) {
		e.preventDefault();
		botService
			.validateConfirm({ random_code: Number(randomCode), user_id: state.user_id })
			.then(() => signin('/admin'))
			.catch(e => history.push('/fuck', e.message));
	}

	// redirect if gotten here other than register click
	if (!state || !state.user_id || !state.discord_name) {
		return <Redirect to={{ pathname: '/fuck', state: 'routed to validation with no state' }} />;
	}

	// waiting on validation code
	if (!validating) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen px-2 lg:px-0">
				<LoaderCard />
			</main>
		);
	}

	return (
		<BasePage>
			<div className="flex flex-col items-center justify-center">
				<PageTitle text="Enter 4 Digit Code" />
				<OTPInput
					autoFocus
					isNumberInput
					length={4}
					className="my-5"
					inputClassName="w-16 h-16 mx-3 text-center text-3xl font-bold border-2 border-gray-700 rounded-lg"
					onChangeOTP={otp => setRandomCode(otp)}
				/>
				<Button onClick={handleClick} color="blue" className="w-full my-5">
					Validate
				</Button>
			</div>
		</BasePage>
	);
}

export default Validate;
