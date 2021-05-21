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

export { getAll, getOne };
