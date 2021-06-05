import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import {
	BasePage,
	FormLabel,
	FormInput,
	Button,
	Toast,
	PageTitle,
	MarkdownTooltip
} from '../../../components';
import { GiAutoRepair } from 'react-icons/gi';
import * as charactersService from '../../../services/characters';

function CharacterAdd() {
	const history = useHistory();
	const { values, handleChanges, handleSubmit } = useForm(handleAddCharacter);

	function handleAddCharacter() {
		if (!values.name) {
			Toast.error('Name input is required');
		} else if (!values.race) {
			Toast.error('Race input is required');
		} else if (!values.class) {
			Toast.error('Class input is required');
		} else if (!values.content) {
			Toast.error('Content input is required');
		} else {
			charactersService
				.addNew(values)
				.then(id => history.push(`/characters/${id}`, values))
				.catch(e => history.push('/fuck', e.message));
		}
	}

	return (
		<BasePage>
			<form className="flex flex-col w-full">
				<PageTitle text="Add Character" />
				<div className="flex flex-col w-full mb-5 lg:flex-row">
					<div className="w-full mb-5 lg:pr-2">
						<FormLabel>Name</FormLabel>
						<FormInput
							placeholder="Falstad Stormhammer"
							value={values.name || ''}
							name="name"
							onChange={handleChanges}
						/>
					</div>
					<div className="w-full">
						<FormLabel>Race</FormLabel>
						<FormInput
							placeholder="Dwarf"
							value={values.race || ''}
							name="race"
							onChange={handleChanges}
						/>
					</div>
				</div>

				<div className="flex flex-col w-full mb-5 lg:flex-row">
					<div className="w-full mb-5 lg:pr-2">
						<FormLabel>Class</FormLabel>
						<FormInput
							placeholder="Fighter"
							value={values.class || ''}
							name="class"
							onChange={handleChanges}
						/>
					</div>
					<div className="w-full">
						<FormLabel>Specialty</FormLabel>
						<FormInput
							placeholder="Battlemaster"
							value={values.specialty || ''}
							name="specialty"
							onChange={handleChanges}
						/>
						<small className="block text-right text-gray-400">optional</small>
					</div>
				</div>
				<div className="w-full mb-5">
					<FormLabel>Avatar URL</FormLabel>
					<FormInput
						placeholder="https://i.imgur.com/w1jkDyP.jpeg"
						value={values.avatar_url || ''}
						name="avatar_url"
						onChange={handleChanges}
					/>
					<div className="flex items-center justify-between text-gray-400">
						<small>copy a link from imgur or discord</small>
						<small>optional</small>
					</div>
				</div>
				<div className="w-full mb-5">
					<FormLabel>Content</FormLabel>
					<textarea
						className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-white rounded appearance-none h-72 lg:h-96 focus:outline-none focus:bg-white focus:border-purple-500"
						placeholder="The true heir to the Stormhammer throne ..."
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
						<GiAutoRepair className="mr-2 text-2xl" /> Add Character
					</span>
				</Button>
			</form>
		</BasePage>
	);
}

export default CharacterAdd;
