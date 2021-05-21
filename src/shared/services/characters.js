import * as baseService from './base';

async function getAll() {
	try {
		const characters = await baseService.get('/ap/bastion/characters');
		return characters;
	} catch (error) {
		throw error;
	}
}

export { getAll };
