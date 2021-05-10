import * as baseService from './base';

async function validate() {
	try {
        await baseService.get('/auth/validate');
	} catch (error) {
		throw error;
	}
}

export {
    validate
}