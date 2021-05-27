import * as baseService from './base';

async function getAll() {
	try {
		const characters = await baseService.get('/api/bastion/characters');
		return characters;
	} catch (error) {
		throw error;
	}
}

async function getOne(id) {
	try {
		const characterDetail = await baseService.get('/api/bastion/characters/' + id);
		return characterDetail;
	} catch (error) {
		throw error;
	}
}

async function addNew(payload) {
	try {
		const { id } = await baseService.post('/api/bastion/characters', payload);
		return id;
	} catch (error) {
		throw error;
	}
}

async function editOne(id, payload) {
	try {
		await baseService.put('/api/bastion/characters/' + id, payload);
		return true;
	} catch (error) {
		throw error;
	}
}

async function destroyOne(id) {
	try {
		await baseService.destroy('/api/bastion/characters/' + id);
		return true;
	} catch (error) {
		throw error;
	}
}

export { getAll, getOne, addNew, editOne, destroyOne };
