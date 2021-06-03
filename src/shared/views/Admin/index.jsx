import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BasePage, PageTitle, LoaderCard } from '../../components';
import NoteSection from './NoteSection';
import ProfileSection from './ProfileSection';
import * as userService from '../../services/user';

function Admin() {
	const history = useHistory();
	const [data, setData] = useState(null);

	useEffect(() => {
		if (data) return;
		userService
			.getProfile()
			.then(info => setData(info))
			.catch(e => history.push('/fuck', e.message));
	}, [history, data]);

	if (!data) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen px-2 lg:px-0">
				<LoaderCard />
			</main>
		);
	}

	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<PageTitle text="Admin Dashboard" />
				<ProfileSection {...data.profile} />
				<NoteSection {...data.counts} />
			</div>
		</BasePage>
	);
}

export default Admin;
