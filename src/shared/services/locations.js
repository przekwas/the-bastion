import * as baseService from './base';

async function getAll() {
	try {
		const locations = await baseService.get('/api/bastion/locations');
		return locations;
	} catch (error) {
		throw error;
	}
}

async function getOne(id) {
	try {
		const locationDetail = await baseService.get('/api/bastion/locations/' + id);
		return locationDetail;
	} catch (error) {
		throw error;
	}
}

async function addNew(payload) {
	try {
		const { id } = await baseService.post('/api/bastion/locations', payload);
		return id;
	} catch (error) {
		throw error;
	}
}

async function editOne(id, payload) {
	try {
		await baseService.put('/api/bastion/locations/' + id, payload);
		return true;
	} catch (error) {
		throw error;
	}
}

async function destroyOne(id) {
	try {
		await baseService.destroy('/api/bastion/locations/' + id);
		return true;
	} catch (error) {
		throw error;
	}
}

export { getAll, getOne, addNew, editOne, destroyOne };
