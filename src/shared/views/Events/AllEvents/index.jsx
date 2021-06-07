import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BasePage, PageTitle, LoaderCard } from '../../../components';
import EventCard from './EventCard';
import * as eventsService from '../../../services/events';

function AllEvents() {
	const history = useHistory();
	const [events, setEvents] = useState([]);

	useEffect(() => {
		eventsService
			.getAll()
			.then(data => setEvents(data))
			.catch(e => history.push('/fuck', e.message));
	}, [history]);

	if (!events.length) return <LoaderCard length={3} />;

	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<PageTitle text="Events" />
				<div>
					{events.map(event => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			</div>
		</BasePage>
	);
}

export default AllEvents;

