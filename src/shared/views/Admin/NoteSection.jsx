import { GiBarbute, GiSextant, GiClockwork, GiStabbedNote } from 'react-icons/gi';
import NoteCard from './NoteCard';

function NoteSection() {
	return (
		<div className="flex flex-col flex-wrap -mx-2 lg:flex-row">
			<div className="w-full px-2 my-2 lg:w-1/2">
				<NoteCard
					icon={
						<GiBarbute className="p-1 mr-5 text-6xl text-green-100 bg-green-500 rounded-full" />
					}
					label="characters added"
					value="15"
					color="green"
					to="/characters/add"
				/>
			</div>
			<div className="w-full px-2 my-2 lg:w-1/2">
				<NoteCard
					icon={
						<GiSextant className="p-1 mr-5 text-6xl text-indigo-100 bg-indigo-500 rounded-full" />
					}
					label="locations added"
					value="24"
					color="indigo"
					to="/locations/add"
				/>
			</div>
			<div className="w-full px-2 my-2 lg:w-1/2">
				<NoteCard
					icon={
						<GiClockwork className="p-1 mr-5 text-6xl text-blue-100 bg-blue-500 rounded-full" />
					}
					label="events added"
					value="124"
					color="blue"
					to="/events/add"
				/>
			</div>
			<div className="w-full px-2 my-2 lg:w-1/2">
				<NoteCard
					icon={
						<GiStabbedNote className="p-1 mr-5 text-6xl text-pink-100 bg-pink-500 rounded-full" />
					}
					label="misc notes added"
					value="1105"
					color="pink"
					to="/notes/add"
				/>
			</div>
		</div>
	);
}

export default NoteSection;
