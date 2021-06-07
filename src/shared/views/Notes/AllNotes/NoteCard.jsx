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
						<span>{note.race}</span>
						<span>
							{note.class}{' '}
							{note.specialty && <span> - {note.specialty}</span>}
						</span>
					</div>
				</div>
				<div className="flex items-center justify-end w-1/3">
					<img
						className="object-cover w-24 h-24 p-1 border border-gray-300 rounded-sm md:w-32 md:h-32"
						src={note.avatar_url}
						alt="note avatar"
					/>
				</div>
			</div>	
			<ReactMarkdown className="prose-sm prose" children={note.content.substring(0, 150)} /> ...
		</div>
	);
}

export default NoteCard;
