import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../utils/auth-context';
import { clearToken } from '../utils/storage';

export function useAuth() {
	const history = useHistory();
	const [authState, setAuthState] = useContext(AuthContext);

	const signin = path => {
		setAuthState({
			checking: false,
			authenticated: true
		});
		history.push(path);
	};

	const logout = () => {
		setAuthState({
			checking: false,
			authenticated: false
		});
		clearToken();
		history.push('/');
	};

	return {
		authenticated: authState.authenticated,
		signin,
		logout
	};
}
