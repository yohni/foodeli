import { VERCEL_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		spoonApiKey: VERCEL_API_KEY
	};
}
