import { BasePage } from '../../../components';
import { GiCrane } from 'react-icons/gi';

function LocationAdd() {
	return (
		<BasePage>
			<div className="flex items-center justify-between w-full text-4xl">
				<GiCrane />
				<span className="text-center">location add</span>
				<GiCrane />
			</div>
		</BasePage>
	);
}

export default LocationAdd;