import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { notesService } from '../../../services';

import { BasePage, PageTitle, LoaderCard } from '../../../components';
import NoteCard from './NoteCard';

function AllNotes() {
	const history = useHistory();
	const [notes, setNotes] = useState({ loading: true, data: [] });

	useEffect(() => {
		notesService
			.getAll()
			.then(data => setNotes({ loading: false, data }))
			.catch(e => history.push('/fuck', e.message));
	}, [history]);

	if (notes.loading) return <LoaderCard length={3} />;

	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<PageTitle text="Notes" />
				<div>
					{notes.data.map(note => (
						<NoteCard key={note.id} note={note} />
					))}
				</div>
			</div>
		</BasePage>
	);
}

export default AllNotes;
