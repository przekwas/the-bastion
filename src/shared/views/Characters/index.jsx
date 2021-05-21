import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BasePage } from '../../components';
import * as charactersService from '../../services/characters';

function Characters() {
	const history = useHistory();
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		charactersService
			.getAll()
			.then(data => setCharacters(data))
			.catch(e => history.push('/fuck', e.message));
	}, []);

	return (
		<BasePage>
			<div>Derperp</div>
		</BasePage>
	);
}

export default Characters;
