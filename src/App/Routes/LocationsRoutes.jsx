import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from '../../shared/components';
import { AllLocations, LocationDetails, LocationAdd, LocationEdit } from '../../shared/views';

function LocationsRoutes() {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${path}`}>
				<AllLocations />
			</Route>
			<PrivateRoute exact path={`${path}/add`}>
				<LocationAdd />
			</PrivateRoute>
			<Route exact path={`${path}/:locationid`}>
				<LocationDetails />
			</Route>
			<PrivateRoute exact path={`${path}/:locationid/edit`}>
				<LocationEdit />
			</PrivateRoute>
		</Switch>
	);
}

export default LocationsRoutes;
