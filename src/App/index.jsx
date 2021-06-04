import { Router } from 'react-router';
import { history } from '../shared/utils/browser-history';
import { AuthProvider, Navbar } from '../shared/components';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';

function App() {
	// tailwind debug screen plugin
	process.env.REACT_APP_DEBUG_SCREENS && document.body.classList.add(process.env.REACT_APP_DEBUG_SCREENS);

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
