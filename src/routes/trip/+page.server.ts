import { NS_API_KEY } from '$env/static/private';
import { baseV3 } from '../../lib/server/api/ns.js';
import type { NSTrips } from '../../lib/server/types/ns/types.js';

export async function load({ params, request, fetch }) {
	const url = new URL(request.url).searchParams;

	const from = url.get('stationFrom');
	const to = url.get('stationTo');
	const datetime = url.get('dateTime');

	if (from && to && datetime) {
		const requrl = new URL(baseV3 + '/trips');
		requrl.searchParams.set('fromStation', from);
		requrl.searchParams.set('toStation', to);
		requrl.searchParams.set('dateTime', datetime);
		const res = await fetch(requrl, {
			headers: {
				'Ocp-Apim-Subscription-Key': NS_API_KEY
			}
		});
		const items = (await res.json()) as NSTrips;

		return {
			trips: items.trips
		};
	}

	return { trips: [] };
}
