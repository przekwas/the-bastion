import { BasePage } from '../../components';
import { GiCrane } from 'react-icons/gi';

function Home() {
	return (
		<BasePage>
			<div className="flex items-center justify-between w-full text-4xl">
				<GiCrane />
				<span className="text-center">a proof of concept in progress lmao</span>
				<GiCrane />
			</div>
		</BasePage>
	);
}

export default Home;
