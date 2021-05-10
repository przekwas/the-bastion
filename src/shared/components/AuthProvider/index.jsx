import { useState, useEffect } from 'react';
import { AuthContext } from '../../utils/auth-context';
import * as tokenService from '../../services/token';
import LoaderCard from '../LoaderCard';

function AuthProvider({ children }) {
	const [authState, setAuthState] = useState({
		authenticated: false,
		checking: true
	});

	useEffect(() => {
		tokenService
			.validate()
			.then(() => {
				setAuthState({
					authenticated: true,
					checking: false
				});
			})
			.catch(() => {
				setAuthState({
					authenticated: false,
					checking: false
				});
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

	return (
		<AuthContext.Provider value={[authState, setAuthState]}>{children}</AuthContext.Provider>
	);
}

export default AuthProvider;
