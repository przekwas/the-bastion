import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { locationsService } from '../../../services';
import { GiAutoRepair } from 'react-icons/gi';

import {
	BasePage,
	FormLabel,
	FormInput,
	Button,
	Toast,
	PageTitle,
	MarkdownTooltip
} from '../../../components';

function LocationAdd() {
	const history = useHistory();
	const { values, handleChanges, handleSubmit } = useForm(handleAddLocation);

	function handleAddLocation() {
		if (!values.name) {
			Toast.error('Name input is required');
		} else if (!values.region) {
			Toast.error('Region input is required');
		} else if (!values.content) {
			Toast.error('Content input is required');
		} else {
			locationsService
				.addNew(values)
				.then(id => history.push(`/locations/${id}`, values))
				.catch(e => history.push('/fuck', e.message));
		}
	}

	return (
		<BasePage>
			<form className="flex flex-col w-full">
				<PageTitle text="Add Location" />
				<div className="flex flex-col w-full mb-5 lg:flex-row">
					<div className="w-full mb-5 lg:pr-2">
						<FormLabel>Name</FormLabel>
						<FormInput
							placeholder="Kraghammer"
							value={values.name || ''}
							name="name"
							onChange={handleChanges}
						/>
					</div>
					<div className="w-full">
						<FormLabel>Region</FormLabel>
						<FormInput
							placeholder="Tal'dorei"
							value={values.region || ''}
							name="region"
							onChange={handleChanges}
						/>
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
						placeholder="Kraghammer is an underground dwarven citadel that sits atop a mithral mine known as Greyspine Quarry ..."
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
						<GiAutoRepair className="mr-2 text-2xl" /> Add Location
					</span>
				</Button>
			</form>
		</BasePage>
	);
}

export default LocationAdd;
