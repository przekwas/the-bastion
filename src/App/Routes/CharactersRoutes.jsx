import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from '../../shared/components';
import { AllCharacters, CharacterDetails, CharacterAdd, CharacterEdit } from '../../shared/views';

function CharactersRoutes() {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${path}`}>
				<AllCharacters />
			</Route>
			<PrivateRoute exact path={`${path}/add`}>
				<CharacterAdd />
			</PrivateRoute>
			<Route exact path={`${path}/:characterid`}>
				<CharacterDetails />
			</Route>
			<PrivateRoute exact path={`${path}/:characterid/edit`}>
				<CharacterEdit />
			</PrivateRoute>
		</Switch>
	);
}

export default CharactersRoutes;
