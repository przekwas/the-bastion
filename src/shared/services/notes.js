import * as baseService from './base';

async function getAll() {
	try {
		const notes = await baseService.get('/api/bastion/notes');
		return notes;
	} catch (error) {
		throw error;
	}
}

async function getOne(id) {
	try {
		const noteDetail = await baseService.get('/api/bastion/notes/' + id);
		return noteDetail;
	} catch (error) {
		throw error;
	}
}

async function addNew(payload) {
	try {
		const { id } = await baseService.post('/api/bastion/notes', payload);
		return id;
	} catch (error) {
		throw error;
	}
}

async function editOne(id, payload) {
	try {
		await baseService.put('/api/bastion/notes/' + id, payload);
		return true;
	} catch (error) {
		throw error;
	}
}

async function destroyOne(id) {
	try {
		await baseService.destroy('/api/bastion/notes/' + id);
		return true;
	} catch (error) {
		throw error;
	}
}

export { getAll, getOne, addNew, editOne, destroyOne };
