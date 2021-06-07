import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from '../../shared/components';
import { AllNotes, NoteDetails, NoteAdd, NoteEdit } from '../../shared/views';

function NotesRoutes() {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${path}`}>
				<AllNotes />
			</Route>
			<PrivateRoute exact path={`${path}/add`}>
				<NoteAdd />
			</PrivateRoute>
			<Route exact path={`${path}/:noteid`}>
				<NoteDetails />
			</Route>
			<PrivateRoute exact path={`${path}/:noteid/edit`}>
				<NoteEdit />
			</PrivateRoute>
		</Switch>
	);
}

export default NotesRoutes;
