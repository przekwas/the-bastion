import { useAuth } from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
	const { authenticated } = useAuth();

	return authenticated ? (
		<Route {...rest}>{children}</Route>
	) : (
		<Redirect
			to={{
				pathname: '/login',
				state: { error: 'You must be logged in to view this page.' }
			}}
		/>
	);
}

export default PrivateRoute;
