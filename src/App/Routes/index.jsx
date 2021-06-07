import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../../shared/components';
import { Home, Login, Register, Admin, Errors, Validate, NotFound } from '../../shared/views';

import CharactersRoutes from './CharactersRoutes';
import LocationsRoutes from './LocationsRoutes';
import EventsRoutes from './EventsRoutes';
import NotesRoutes from './NotesRoutes';

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route path="/characters">
				<CharactersRoutes />
			</Route>

			<Route path="/locations">
				<LocationsRoutes />
			</Route>

			<Route path="/events">
				<EventsRoutes />
			</Route>

			<Route path="/notes">
				<NotesRoutes />
			</Route>

			<Route exact path="/login">
				<Login />
			</Route>

			<Route exact path="/register">
				<Register />
			</Route>

			<Route exact path="/validate">
				<Validate />
			</Route>

			<PrivateRoute exact path="/admin">
				<Admin />
			</PrivateRoute>

			<Route exact path="/fuck">
				<Errors />
			</Route>

			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	);
}

export default Routes;
