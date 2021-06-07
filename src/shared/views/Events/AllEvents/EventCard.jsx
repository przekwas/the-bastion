import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function EventCard({ event }) {
	return (
		<div className="px-4 py-6 mb-4 bg-gray-100 rounded">
			<div className="flex items-center justify-between mb-4">
				<div className="w-2/3">
					<Link
						className="text-lg font-semibold text-blue-600 underline cursor-pointer"
						to={{
							pathname: `/events/${event.id}`,
							state: event
						}}>
						{event.name}
					</Link>
					<div className="flex flex-col text-xs font-semibold text-gray-500">
						<span>{event.time}</span>
					</div>
					{event.location_id && (
						<div className="flex flex-col text-xs font-semibold text-gray-500">
							<span>{event.location_id}</span>
						</div>
					)}
				</div>
				<div className="flex items-center justify-end w-1/3">
					<img
						className="object-cover w-24 h-24 p-1 border border-gray-300 rounded-sm md:w-32 md:h-32"
						src={event.avatar_url}
						alt="event avatar"
					/>
				</div>
			</div>
			<ReactMarkdown className="prose-sm prose" children={event.content.substring(0, 150)} />{' '}
			...
		</div>
	);
}

export default EventCard;
