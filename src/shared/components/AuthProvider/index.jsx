import { useState, useEffect } from 'react';
import { AuthContext } from '../../utils/auth-context';
import LoaderCard from '../LoaderCard';

function AuthProvider({ children }) {
	const [authState, setAuthState] = useState({
		authenticated: false,
		checking: true
	});

	useEffect(() => {
		setAuthState({
			authenticated: false,
			checking: false
		});
	}, []);

	if (authState.checking) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen px-2 lg:px-0">
				<LoaderCard />
				<LoaderCard />
				<LoaderCard />
			</main>
		);
	}

	return <AuthContext.Provider value={authState.authenticated}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
