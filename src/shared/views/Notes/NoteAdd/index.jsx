import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { GiAutoRepair } from 'react-icons/gi';
import { notesService } from '../../../services';

import {
	BasePage,
	FormLabel,
	FormInput,
	Button,
	Toast,
	PageTitle,
	MarkdownTooltip
} from '../../../components';

function NoteAdd() {
	const history = useHistory();
	const { values, handleChanges, handleSubmit } = useForm(handleAddEvent);

	function handleAddEvent() {
		if (!values.name) {
			Toast.error('Name input is required');
		} else if (!values.content) {
			Toast.error('Content input is required');
		} else {
			notesService
				.addNew(values)
				.then(id => history.push(`/notes/${id}`, values))
				.catch(e => history.push('/fuck', e.message));
		}
	}

	return (
		<BasePage>
			<form className="flex flex-col w-full">
				<PageTitle text="Add Note" />
				<div className="flex flex-col w-full mb-5 lg:flex-row">
					<div className="w-full mb-5">
						<FormLabel>Name</FormLabel>
						<FormInput
							placeholder="The Calamity"
							value={values.name || ''}
							name="name"
							onChange={handleChanges}
						/>
					</div>
				</div>
				<div className="w-full mb-5">
					<FormLabel>Content</FormLabel>
					<textarea
						className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-white rounded appearance-none h-72 lg:h-96 focus:outline-none focus:bg-white focus:border-purple-500"
						placeholder="This age encompasses the second war against the Betrayer Gods, which devastated civilization and in some cases rearranged the geography of the world. The age ends with the defeat of the Chained Oblivion and the construction of the Divine Gate ..."
						value={values.content || ''}
						name="content"
						onChange={handleChanges}
					/>
					<div className="flex items-center justify-between">
						<MarkdownTooltip />
						<small
							className={`text-sm ${
								values.content?.length >= 10000 ? 'text-red-500' : 'text-gray-400'
							}`}>
							{values.content ? values.content.length : 0} / 10000
						</small>
					</div>
				</div>
				<Button onClick={handleSubmit} color="blue" className="w-1/2 mx-auto mb-5">
					<span className="flex items-center justify-center ">
						<GiAutoRepair className="mr-2 text-2xl" /> Add Note
					</span>
				</Button>
			</form>
		</BasePage>
	);
}

export default NoteAdd;
