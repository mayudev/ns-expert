import { NS_API_KEY } from '$env/static/private';
import { baseV3 } from '../../lib/server/api/ns.js';
import type { NSTrips } from '../../lib/server/types/ns/types.js';

export async function load({ params, request, fetch }) {
	const url = new URL(request.url).searchParams;

	const from = url.get('stationFrom');
	const to = url.get('stationTo');

	if (from && to) {
		const requrl = new URL(baseV3 + '/trips');
		requrl.searchParams.set('fromStation', from);
		requrl.searchParams.set('toStation', to);
		const res = await fetch(requrl, {
			headers: {
				'Ocp-Apim-Subscription-Key': NS_API_KEY
			}
		});
		const items = (await res.json()) as NSTrips;
		console.log('aweawa');
		return {
			trips: items.trips.map((trip) => ({
				plannedDuration: trip.plannedDurationInMinutes,
				actualDuration: trip.actualDurationInMinutes,
				crowded: trip.crowdForecast,
				routeId: trip.routeId,
				legs: trip.legs
			}))
		};
	}

	return { trips: [] };
}
