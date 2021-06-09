import { useEffect } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useHistory, useLocation, useParams, Link } from 'react-router-dom';
import { eventsService } from '../../../services';
import { GiReturnArrow, GiSave, GiSparkyBomb, GiHolyHandGrenade } from 'react-icons/gi';

import {
	BasePage,
	FormLabel,
	FormInput,
	Button,
	Toast,
	Modal,
	PageTitle,
	MarkdownTooltip
} from '../../../components';

function EventEdit() {
	const history = useHistory();
	const { state } = useLocation();
	const { eventid } = useParams();
	const { values, setValues, handleChanges } = useForm();

	useEffect(() => {
		if (state) {
			setValues({
				name: state.name,
				time: state.region,
				avatar_url: state.avatar_url,
				content: state.content
			});
		} else {
			eventsService
				.getOne(eventid)
				.then(data => {
					setValues({
						name: data.name,
						time: data.time,
						avatar_url: data.avatar_url,
						content: data.content
					});
				})
				.catch(e => history.push('/fuck', e.message));
		}
	}, [state, eventid, history, setValues]);

	const handleEditLocation = e => {
		e.preventDefault();
		if (!values.name) {
			Toast.error('Name input is required');
		} else if (!values.content) {
			Toast.error('Content input is required');
		} else {
			eventsService
				.editOne(eventid, values)
				.then(() => history.push(`/events/${eventid}`))
				.catch(e => history.push('/fuck', e.message));
		}
	};

	const handleDeleteLocation = e => {
		e.preventDefault();
		Modal.fire({
			iconHtml: <GiHolyHandGrenade />,
			iconColor: 'rgb(252, 211, 77)',
			title: <div className="text-red-50">Are you sure?</div>,
			footer: <div className="text-yellow-50">Even Revivify can't save you after this.</div>,
			showCancelButton: true,
			confirmButtonText: 'Delete Forever',
			customClass: {
				footer: 'delete-modal-footer',
				popup: 'delete-modal-popup',
				confirmButton: 'btn-yellow',
				cancelButton: 'btn-gray'
			}
		}).then(result => {
			if (result.isConfirmed) {
				eventsService
					.destroyOne(eventid)
					.then(() => history.push(`/events`))
					.catch(e => history.push('/fuck', e.message));
			}
		});
	};

	return (
		<BasePage>
			<form className="flex flex-col w-full">
				<PageTitle text="Edit Character" />
				<div className="flex flex-col w-full mb-5 lg:flex-row">
					<div className="w-full mb-5 lg:pr-2">
						<FormLabel>Name</FormLabel>
						<FormInput
							placeholder="The Calamity"
							value={values.name || ''}
							name="name"
							onChange={handleChanges}
						/>
					</div>
					<div className="w-full">
						<FormLabel>Estimated Time</FormLabel>
						<FormInput
							placeholder="the third age of Exandria"
							value={values.time || ''}
							name="time"
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
				<div className="flex flex-col items-center justify-between my-5 md:flex-row">
					<Button
						onClick={e => e.preventDefault()}
						color="gray"
						className="w-full mb-5 md:mb-0 md:w-1/4">
						<Link
							to={{
								pathname: `/events/${eventid}`,
								state: state ? state : null
							}}
							className="flex items-center justify-center ">
							<GiReturnArrow className="mr-2 text-2xl" /> Back
						</Link>
					</Button>
					<Button
						onClick={handleEditLocation}
						color="indigo"
						className="w-full mb-5 md:mb-0 md:w-1/4">
						<span className="flex items-center justify-center ">
							<GiSave className="mr-2 text-2xl" /> Save
						</span>
					</Button>
					<Button
						onClick={handleDeleteLocation}
						color="red"
						className="w-full mb-5 md:mb-0 md:w-1/4">
						<span className="flex items-center justify-center ">
							<GiSparkyBomb className="mr-2 text-2xl" /> Delete
						</span>
					</Button>
				</div>
			</form>
		</BasePage>
	);
}

export default EventEdit;
