import * as baseService from './base';

async function getAll() {
	try {
		const events = await baseService.get('/api/bastion/events');
		return events;
	} catch (error) {
		throw error;
	}
}

async function getOne(id) {
	try {
		const eventDetail = await baseService.get('/api/bastion/events/' + id);
		return eventDetail;
	} catch (error) {
		throw error;
	}
}

async function addNew(payload) {
	try {
		const { id } = await baseService.post('/api/bastion/events', payload);
		return id;
	} catch (error) {
		throw error;
	}
}

async function editOne(id, payload) {
	try {
		await baseService.put('/api/bastion/events/' + id, payload);
		return true;
	} catch (error) {
		throw error;
	}
}

async function destroyOne(id) {
	try {
		await baseService.destroy('/api/bastion/events/' + id);
		return true;
	} catch (error) {
		throw error;
	}
}

export { getAll, getOne, addNew, editOne, destroyOne };
