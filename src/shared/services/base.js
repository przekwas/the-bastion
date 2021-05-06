import { getToken } from '../utils/storage';

function makeFetch(url, info) {
	return fetch(url, info);
}

async function json(url, method = 'GET', body = {}) {
	const TOKEN = getToken();
	const headers = new Headers({
		'Content-Type': 'application/json'
	});
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
			const contentType = response.headers.get('Content-Type');

			if (contentType.indexOf('application/json') > -1) {
				return response.json();
			}

			return response.statusText;
		} else {
			throw new Error('something is fucked');
		}
	} catch (error) {
		console.log('[error in fetch]', error.message);
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
