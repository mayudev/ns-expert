export type NSTrip = {
	idx: number;
	plannedDurationInMinutes: number;
	actualDurationInMinutes: number;
	transfers: number;
	status: string;
	messages: string[];
	legs: NSTripLeg[];
	crowdForecast: string;
	//fareRoute
	fares: NSFare[];
	//fareLegs
	productFare?: NSProductFare;
	// skipped properties
	routeId?: string;
};

export type NSFare = {
	priceInCents: number;
	product: string;
	travelClass: string;
	discountType: string;
};

export type NSStop = {
	name: string;
	lng: number;
	lat: number;
	countryCode: string;
	uicCode: string;
	stationCode: string;
	plannedTimeZoneOffset: number;
	notes: string[];
};

export type NSOriginDestinationStop = NSStop & {
	type: string;
	plannedTrack: string;
	actualTrack: string;
	checkinStatus: string;
	plannedDateTime: string;
};

export type NSIntermediaryStop = NSStop & {
	actualDepartureTrack?: string;
	plannedDepartureTrack?: string;
	plannedArrivalTrack?: string;
	actualArrivalTrack?: string;
	plannedDepartureDateTime?: string;
	plannedArrivalDateTime?: string;
	cancelled: boolean;
	borderStop: boolean;
	passing: boolean;
};

export type NSTripLeg = {
	idx: string;
	name: string;
	travelType: string;
	direction: string;
	partCancelled: boolean;
	cancelled: boolean;
	changePossible: boolean;
	crowdForecast: string;
	origin: NSOriginDestinationStop;
	destination: NSOriginDestinationStop;
	product: NSTripLegProduct;
	stops: NSIntermediaryStop[];
};

export type NSTripLegProduct = {
	number: string;
	categoryCode: string;
	displayName: string;
	type: string;
};

export type NSProductFare = {
	priceInCents: number;
	priceInCentsExcludingSupplement: number;
	buyableTicketPriceInCents: number;
	buyableTicketPriceInCentsExcludingSupplement: number;
	product: string;
	travelClass: string;
	discountType: string;
	type: string;
	realtime: boolean;
	routeId: string;
};
