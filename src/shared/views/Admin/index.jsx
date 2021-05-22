import { Link } from 'react-router-dom';
import { BasePage } from '../../components';

function Admin() {
	return (
		<BasePage>
			<div>Admin</div>
            <Link to="/characters/add">Add Char</Link>
		</BasePage>
	);
}

export default Admin;