const stationTypeMap = {
	STOPTREIN_STATION: 'regional station',
	KNOOPPUNT_INTERCITY_STATION: 'intercity station',
	MEGA_STATION: 'major station'
};

export function mapStationType(type: string) {
	if (type in stationTypeMap) {
		return stationTypeMap[type as keyof typeof stationTypeMap];
	} else {
		return 'train station';
	}
}
