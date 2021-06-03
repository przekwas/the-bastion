import { setToken } from '../utils/storage';
import * as baseService from './base';

async function login(payload) {
	try {
		const token = await baseService.post('/auth/login', payload);
		setToken(token);
	} catch (error) {
		throw error;
	}
}

async function register(payload) {
	try {
		const { user_id } = await baseService.post('/auth/register', payload);
		return user_id;
	} catch (error) {
		throw error;
	}
}

async function getProfile() {
	try {
		const result = await baseService.get('/api/users/profile');
		return result;
	} catch (error) {
		throw error;
	}
}

export { login, register, getProfile };
