import { useForm } from '../../../hooks/useForm';
import { BasePage, FormLabel, FormInput, Button, Toast } from '../../../components';

function CharacterAdd() {
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
			console.log(values);
		}
	}

	return (
		<BasePage>
			<form className="flex flex-col w-full">
				<div className="flex flex-col w-full mb-5 lg:flex-row">
					<div className="w-full mb-5 lg:pr-2">
						<FormLabel>Name</FormLabel>
						<FormInput
							placeholder="Dwarf"
							value={values.name || ''}
							name="name"
							onChange={handleChanges}
						/>
					</div>
					<div className="w-full">
						<FormLabel>Race</FormLabel>
						<FormInput
							placeholder="Fighter"
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
							placeholder="Dwarf"
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
						placeholder="http://imgur.com/1234"
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
						<small className="text-gray-400">
							<a
								className="text-blue-500 underline"
								target="_blank"
								href="https://www.markdownguide.org/cheat-sheet/"
								rel="noopener noreferrer">
								Markdown
							</a>{' '}
							is supported.
						</small>
						<small
							className={`text-sm ${
								values.content?.length >= 10000 ? 'text-red-500' : 'text-gray-400'
							}`}>
							{values.content ? values.content.length : 0} / 10000
						</small>
					</div>
				</div>
				<Button onClick={handleSubmit} color="blue" className="w-1/2 mx-auto mb-5">
					Add Character
				</Button>
			</form>
		</BasePage>
	);
}

export default CharacterAdd;
