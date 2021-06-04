import { setToken } from '../utils/storage';
import * as baseService from './base';

async function generateValidation(payload) {
	try {
		const result = await baseService.post('/auth/bot/generate', payload);
		return result;
	} catch (error) {
		throw error;
	}
}

async function validateConfirm(payload) {
	try {
		const result = await baseService.post('/auth/bot/validate', payload);
		setToken(result);
		return true;
	} catch (error) {
		throw error;
	}
}

export { generateValidation, validateConfirm };
