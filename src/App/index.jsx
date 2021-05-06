import { Router } from 'react-router';
import { history } from '../shared/utils/browser-history';
import { AuthProvider, Navbar } from '../shared/components';
import Routes from './Routes';

function App() {
	return (
		<Router history={history}>
			<AuthProvider>
				<Navbar />
				<Routes />
			</AuthProvider>
		</Router>
	);
}

export default App;
