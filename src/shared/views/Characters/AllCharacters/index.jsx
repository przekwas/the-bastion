import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BasePage, PageTitle, LoaderCard } from '../../../components';
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

	if (!characters.length) return <LoaderCard length={3} />;

	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<PageTitle text="Characters" />
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
