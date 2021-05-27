import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useLocation, useParams, useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { GiReturnArrow, GiSettingsKnobs } from 'react-icons/gi';
import { BasePage, LoaderCard } from '../../../components';
import ReactMarkdown from 'react-markdown';
import DisplayRow from './DisplayRow';
import * as charactersService from '../../../services/characters';

function CharacterDetails() {
	const history = useHistory();
	const { state } = useLocation();
	const { characterid } = useParams();
	const { authenticated } = useAuth();
	const [details, setDetails] = useState(state ? state : null);
	const [options, setOptions] = useState(false);

	useEffect(() => {
		if (details) return;
		charactersService
			.getOne(characterid)
			.then(data => setDetails(data))
			.catch(e => history.push('/fuck', e.message));
	}, [state, details, characterid, history]);

	if (!details) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen px-2 lg:px-0">
				<LoaderCard />
			</main>
		);
	}

	return (
		<BasePage>
			<div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded">
				<div className="flex items-center justify-between w-full mb-5">
					<Link
						to="/characters"
						className="flex items-center justify-center text-sm font-semibold underline">
						<GiReturnArrow className="mr-2" /> Go back
					</Link>
					<button
						onClick={() => setOptions(!options)}
						className={`relative p-1 shadow-sm text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
							authenticated ? 'visible' : 'invisible'
						}`}>
						<GiSettingsKnobs className="text-xl" />
						{options && (
							<div
								className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabIndex="-1">
								<div className="py-1" role="none">
									<Link
										to={{
											pathname: `/characters/${details.id}/edit`,
											state: details
										}}
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-2">
										Edit
									</Link>
								</div>
							</div>
						)}
					</button>
				</div>
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
					<div className="text-lg">{details.specialty}</div>
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
				<div className="w-full my-5">
					<ReactMarkdown
						className="prose-sm prose prose-blue lg:prose lg:prose-blue"
						children={details.content}
					/>
				</div>
			</div>
		</BasePage>
	);
}

export default CharacterDetails;
