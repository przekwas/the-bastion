import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function NoteCard({ note }) {
	return (
		<div className="px-4 py-6 mb-4 bg-gray-100 rounded">
			<div className="flex items-center justify-between mb-4">
				<div className="w-2/3">
					<Link
						className="text-lg font-semibold text-blue-600 underline cursor-pointer"
						to={{
							pathname: `/notes/${note.id}`,
							state: note
						}}>
						{note.name}
					</Link>
					<div className="flex flex-col text-xs font-semibold text-gray-500">
						<span>{note.name}</span>
					</div>
				</div>
			</div>
			<ReactMarkdown className="prose-sm prose" children={note.content.substring(0, 150)} />{' '}
			...
		</div>
	);
}

export default NoteCard;
