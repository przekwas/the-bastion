import { BasePage, PageTitle } from '../../components';
import NoteSection from './NoteSection';
import ProfileSection from './ProfileSection';

function Admin() {
	return (
		<BasePage>
			<div className="flex flex-col w-full">
				<PageTitle text="Admin Dashboard" />
				<ProfileSection />
				<NoteSection />
			</div>
		</BasePage>
	);
}

export default Admin;
