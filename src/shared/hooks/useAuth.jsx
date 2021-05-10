import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../utils/auth-context';

export function useAuth() {
	const history = useHistory();
	const [authState, setAuthState] = useContext(AuthContext);

	const success = path => {
		setAuthState({
			checking: false,
			authenticated: true
		});
		history.push(path);
	};

	const logout = path => {
		setAuthState({
			checking: false,
			authenticated: false
		});
		history.push(path);
	};

	return {
		authenticated: authState.authenticated,
		success,
		logout
	};
}
