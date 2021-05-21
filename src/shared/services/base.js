import { getToken } from '../utils/storage';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;

function makeFetch(url, info) {
	return fetch(ROOT_URL + url, info);
}

async function json(url, method = 'GET', body = {}) {
	const TOKEN = getToken();
	const headers = {
		'Content-Type': 'application/json'
	};
	const data = {
		method,
		headers,
		body: JSON.stringify(body)
	};

	if (method === 'GET') {
		delete headers['Content-Type'];
		delete data.body;
	}

	if (TOKEN) {
		headers['Authorization'] = `Bearer ${TOKEN}`;
	}

	try {
		const response = await makeFetch(url, data);
		if (response.ok) {
			return response.json();
		} else {
			const errorResponse = await response.json();
			console.log(errorResponse);
			throw new Error(errorResponse.error.message);
		}
	} catch (error) {
		console.log('[error in fetch]', error);
		throw error;
	}
}

function get(url) {
	return json(url);
}

function post(url, payload) {
	return json(url, 'POST', payload);
}

function put(url, payload) {
	return json(url, 'PUT', payload);
}

function destroy(url, payload) {
	return json(url, 'DELETE', payload);
}

export { get, post, put, destroy };
