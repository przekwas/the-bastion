import { setToken } from '../utils/storage';
import * as baseService from './base';

async function login({ email, password }) {
	try {
		const token = await baseService.post('/auth/login', { email, password });
		setToken(token);
		return true;
	} catch (error) {
		return false;
	}
}

export {
    login
}