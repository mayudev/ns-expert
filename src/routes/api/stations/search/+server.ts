import { error, json } from '@sveltejs/kit';
import { baseV2 } from '../../../../lib/api/ns/ns.js';
import { NS_API_KEY } from '$env/static/private';
import type { NSResponse } from '../../../../lib/api/ns/types.js';
import type { NSStation } from '../../../../lib/api/ns/stations.js';

export async function GET({ url, fetch }) {
	const q = url.searchParams.get('q');

	if (!q) {
		throw error(400, 'No q provided');
	}

	const requrl = new URL(baseV2 + '/stations');
	requrl.searchParams.set('q', q);

	const res = await fetch(requrl, {
		headers: {
			'Ocp-Apim-Subscription-Key': NS_API_KEY
		}
	});
	const item = (await res.json()) as NSResponse<NSStation[]>;

	const response = item.payload.map((station) => ({
		UICCode: station.UICCode,
		stationType: station.stationType,
		code: station.code,
		name: station.namen.lang
	}));

	return json(response);
}
