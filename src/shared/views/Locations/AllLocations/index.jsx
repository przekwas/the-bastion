import { BasePage } from '../../../components';
import { GiCrane } from 'react-icons/gi';

function AllLocations() {
	return (
		<BasePage>
			<div className="flex items-center justify-between w-full text-4xl">
				<GiCrane />
				<span className="text-center">all locations</span>
				<GiCrane />
			</div>
		</BasePage>
	);
}

export default AllLocations;