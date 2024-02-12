export const formatCents = (cents: number) => {
	const eur = Math.floor(cents / 100);
	const ec = Math.floor(cents % 100);

	return `${eur}.${ec < 10 ? '0' + ec : ec}€`;
};

export const discount20 = (cents: number) => {
	return cents * 0.8;
};

export const discount40 = (cents: number) => {
	return cents * 0.6;
};
