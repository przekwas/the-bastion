import { useEffect, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { BasePage, PageTitle, LoaderCard, Button } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import * as botService from '../../services/bot';

function Validate() {
	const history = useHistory();
	const { state } = useLocation();
	const { authenticated, signin } = useAuth();
	const [validating, setValidating] = useState(false);
	const [randomCode, setRandomCode] = useState('');

	useEffect(() => {
		botService
			.generateValidation(state)
			.then(() => setValidating(true))
			.catch(e => history.push('/fuck', e.message));
	}, []);

	function handleClick(e) {
		e.preventDefault();
		botService
			.validateConfirm({ random_code: randomCode, user_id: state.user_id })
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

	// already logged in check
	if (authenticated) {
		return <Redirect to="/admin" />;
	}

	return (
		<BasePage>
			<div className="flex flex-col">
				<PageTitle text="Enter 4 Digit Code" />
				<div class="flex">
					<input
						onChange={e => setRandomCode(e.target.value)}
						value={randomCode}
						className="flex items-center w-12 h-16 mx-2 text-3xl font-thin text-center border rounded-lg"
						maxlength="1"
						max="9"
						min="0"
						inputmode="decimal"
					/>
				</div>

				<Button onClick={handleClick} color="blue" className="mt-5">
					Validate
				</Button>
			</div>
		</BasePage>
	);
}

export default Validate;
