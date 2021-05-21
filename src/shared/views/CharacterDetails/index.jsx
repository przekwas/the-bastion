import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useLocation, useParams, useHistory, Link } from 'react-router-dom';
import { BasePage, LoaderCard } from '../../components';
import { GiReturnArrow } from 'react-icons/gi';
import * as charactersService from '../../services/characters';
import DisplayRow from './DisplayRow';

function CharacterDetails() {
	const history = useHistory();
	const { state } = useLocation();
	const { characterid } = useParams();
	const [details, setDetails] = useState(state ? state : null);

	useEffect(() => {
		charactersService
			.getOne(characterid)
			.then(data => setDetails(data))
			.catch(e => history.push('/fuck', e.message));
	}, [state, characterid]);

	if (!details) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen px-2 lg:px-0">
				<LoaderCard />
			</main>
		);
	}

	return (
		<BasePage>
			<div>
				<div className="flex items-center justify-start w-full mb-5 -mt-5">
					<Link
						to="/characters"
						className="flex items-center justify-center text-sm font-semibold underline">
						<GiReturnArrow className="mr-2" /> Go back
					</Link>
				</div>
				<div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded">
					<div className="flex items-center justify-center mb-5">
						<img
							className="object-cover w-full p-1 border border-gray-300 rounded-sm 2xl:w-3/4"
							src={details.avatar_url}
							alt="character avatar"
						/>
					</div>
					<DisplayRow label="name">
						<div className="text-lg">{details.name}</div>
					</DisplayRow>
					<DisplayRow label="race">
						<div className="text-lg">{details.race}</div>
					</DisplayRow>
					<DisplayRow label="class">
						<div className="text-lg">{details.class}</div>
					</DisplayRow>
					<DisplayRow label="specialty">
						<div className="text-lg">{details.misc}</div>
					</DisplayRow>
					<DisplayRow label="added by">
						<div className="flex flex-col items-baseline justify-start">
							<div className="text-lg">{details.username}</div>
							<div className="ml-2 text-sm font-semibold text-indigo-800">
								on {dayjs(details.created_at).format('DD/MM/YYYY')}
							</div>
						</div>
					</DisplayRow>
					{details.modified_by_username && (
						<>
							<DisplayRow label="modified by">
								<div className="flex flex-col items-baseline justify-start">
									<div className="text-lg">{details.modified_by_username}</div>
									<div className="ml-2 text-sm font-semibold text-indigo-800">
										on {dayjs(details.modified_at).format('DD/MM/YYYY')}
									</div>
								</div>
							</DisplayRow>
						</>
					)}
					<div className="my-5 tracking-wide">{details.content}</div>
				</div>
			</div>
		</BasePage>
	);
}

export default CharacterDetails;
