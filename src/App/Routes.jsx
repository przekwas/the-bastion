import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../shared/components';
import { Login } from '../shared/views';

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				{() => <h1>home</h1>}
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<PrivateRoute exact path="/admin">
				{() => <h1>admin</h1>}
			</PrivateRoute>
			<PrivateRoute exact path="/profile">
				{() => <h1>profile</h1>}
			</PrivateRoute>
			<Route exact path="/characters">
				{() => <h1>character</h1>}
			</Route>
			<Route exact path="/characters/:characterid">
				{() => <h1>character</h1>}
			</Route>
			<Route exact path="/locations">
				{() => <h1>locations</h1>}
			</Route>
			<Route exact path="/locations/:locationid">
				{() => <h1>character</h1>}
			</Route>
			<Route exact path="/events">
				{() => <h1>events</h1>}
			</Route>
			<Route exact path="/events/:eventid">
				{() => <h1>events</h1>}
			</Route>
			<Route exact path="/fuck">
				{() => <h1>fuck</h1>}
			</Route>
			<Route path="*">{() => <h1>404</h1>}</Route>
		</Switch>
	);
}

export default Routes;
