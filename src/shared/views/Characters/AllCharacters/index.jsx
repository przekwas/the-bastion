import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { charactersService } from '../../../services';

import { BasePage, PageTitle, LoaderCard } from '../../../components';
import CharacterCard from './CharacterCard';

function AllCharacters() {
	const history = useHistory();
	const [characters, setCharacters] = useState({ loading: true, data: [] });

	useEffect(() => {
		charactersService
			.getAll()
			.then(data => setCharacters({ loading: false, data }))
			.catch(e => history.push('/fuck', e.message));
	}, [history]);

	if (characters.loading) return <LoaderCard length={3} />;

	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<PageTitle text="Characters" />
				<div>
					{characters.data.map(character => (
						<CharacterCard key={character.id} character={character} />
					))}
				</div>
			</div>
		</BasePage>
	);
}

export default AllCharacters;
