import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BasePage } from '../../../components';
import CharacterCard from './CharacterCard';
import * as charactersService from '../../../services/characters';

function AllCharacters() {
	const history = useHistory();
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		charactersService
			.getAll()
			.then(data => setCharacters(data))
			.catch(e => history.push('/fuck', e.message));
	}, [history]);

	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<div className="self-center mb-5 text-2xl font-extrabold tracking-wide text-indigo-900">
					Characters
				</div>
				<div>
					{characters.map(character => (
						<CharacterCard key={character.id} character={character} />
					))}
				</div>
			</div>
		</BasePage>
	);
}

export default AllCharacters;
