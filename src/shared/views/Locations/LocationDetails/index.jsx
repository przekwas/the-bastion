import { BasePage } from '../../../components';
import { GiCrane } from 'react-icons/gi';

function LocationDetails() {
	return (
		<BasePage>
			<div className="flex items-center justify-between w-full text-4xl">
				<GiCrane />
				<span className="text-center">location details</span>
				<GiCrane />
			</div>
		</BasePage>
	);
}

export default LocationDetails;