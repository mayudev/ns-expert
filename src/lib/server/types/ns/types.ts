import type { NSTrip } from './trips';

export type NSResponse<T> = {
	payload: T;
};

export type NSTrips = {
	trips: NSTrip[];
};
