import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../../shared/components';
import {
	Home,
	Login,
	Admin,
	Errors,
	AllCharacters,
	CharacterDetails,
	CharacterAdd,
	CharacterEdit,
	AllLocations,
	LocationDetails,
	LocationAdd,
	LocationEdit
} from '../../shared/views';

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			{/* locations routes */}
			<Route exact path="/locations">
				<AllLocations />
			</Route>
			<PrivateRoute exact path="/locations/add">
				<LocationAdd />
			</PrivateRoute>
			<Route exact path="/locations/:locationid">
				<LocationDetails />
			</Route>
			<PrivateRoute exact path="/locations/:locationid/edit">
				<LocationEdit />
			</PrivateRoute>

			{/* characters routes */}
			<Route exact path="/characters">
				<AllCharacters />
			</Route>
			<PrivateRoute exact path="/characters/add">
				<CharacterAdd />
			</PrivateRoute>
			<Route exact path="/characters/:characterid">
				<CharacterDetails />
			</Route>
			<PrivateRoute exact path="/characters/:characterid/edit">
				<CharacterEdit />
			</PrivateRoute>

			<Route exact path="/login">
				<Login />
			</Route>

			<PrivateRoute exact path="/admin">
				<Admin />
			</PrivateRoute>

			<Route exact path="/fuck">
				<Errors />
			</Route>
			<Route path="*">{() => <h1>404</h1>}</Route>
		</Switch>
	);
}

export default Routes;
