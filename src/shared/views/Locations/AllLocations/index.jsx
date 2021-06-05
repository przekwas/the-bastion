import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BasePage, PageTitle, LoaderCard } from '../../../components';
import * as locationsService from '../../../services/locations';
import LocationCard from './LocationCard';

function AllLocations() {
	const history = useHistory();
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		locationsService
			.getAll()
			.then(data => setLocations(data))
			.catch(e => history.push('/fuck', e.message));
	}, [history]);

	if (!locations.length) return <LoaderCard length={3} />;

	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<PageTitle text="Locations" />
				<div>
					{locations.map(location => (
						<LocationCard key={location.id} location={location} />
					))}
				</div>
			</div>
		</BasePage>
	);
}

export default AllLocations;
