import { BasePage } from '../../components';

function NotFound() {
	return (
		<BasePage>
			<div className="flex flex-col items-center justify-center">
				<img
					src="https://cdn.discordapp.com/attachments/414983096652267524/852200185240748092/404.png"
					alt="404 error not found"
					className="max-w-sm"
				/>
				<div className="text-2xl text-center">
					We live in a world of uncertainty. But certainly, the page you were looking for
					isn’t here. Perhaps this halfling has stolen it and hidden it in another place.
					Try searching for what you were looking for in another realm.
				</div>
			</div>
		</BasePage>
	);
}

export default NotFound;
