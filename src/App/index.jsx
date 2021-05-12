import { Router } from 'react-router';
import { history } from '../shared/utils/browser-history';
import { AuthProvider, Navbar } from '../shared/components';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';

function App() {
	return (
		<>
			<Router history={history}>
				<ToastContainer
					position="bottom-right"
					autoClose={3000}
					draggable={false}
					pauseOnHover={false}
				/>
				<AuthProvider>
					<Navbar />
					<Routes />
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
