export type NSPlatforms = {
	spoorNummer: string;
};

export type NSStationNames = {
	lang: string;
	middel: string;
	kort: string;
};

export type NSStation = {
	UICCode: string;
	stationType: string;
	EVACode: string;
	code: string;
	sporen: NSPlatforms[];
	namen: NSStationNames;
	land: string;
	lat: number;
	lng: number;
	radius: number;
	naderenRadius: number;
	ingangsDatum: string;
};
