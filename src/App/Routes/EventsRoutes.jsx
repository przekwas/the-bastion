import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from '../../shared/components';
import { AllEvents, EventDetails, EventAdd, EventEdit } from '../../shared/views';

function EventsRoutes() {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${path}`}>
				<AllEvents />
			</Route>
			<PrivateRoute exact path={`${path}/add`}>
				<EventAdd />
			</PrivateRoute>
			<Route exact path={`${path}/:eventid`}>
				<EventDetails />
			</Route>
			<PrivateRoute exact path={`${path}/:eventid/edit`}>
				<EventEdit />
			</PrivateRoute>
		</Switch>
	);
}

export default EventsRoutes;
