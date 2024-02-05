export const formathhmm = (datetime: string) => {
	const dt = new Date(datetime);

	let hh = dt.getHours().toString();
	let mm = dt.getMinutes().toString();

	if (hh.length == 1) hh = '0' + hh;
	if (mm.length == 1) mm = '0' + mm;

	return `${hh}:${mm}`;
};

export const formatDuration = (minutes: number) => {
	const hours = Math.floor(minutes / 60);
	const leftover = minutes % 60;

	const hourPart = hours === 0 ? '' : hours === 1 ? `1 hour` : `${hours} hours`;
	return `${hourPart} ${leftover} minutes`;
};
