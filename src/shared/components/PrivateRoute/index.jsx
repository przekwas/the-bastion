import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../utils/auth-context';

function PrivateRoute({ children, ...rest }) {
	const authenticated = useContext(AuthContext);

	return authenticated ? (
		<Route {...rest}>{children}</Route>
	) : (
		<Redirect to={{ pathname: '/login', state: 'You must be logged in to view this page.' }} />
	);
}

export default PrivateRoute;
