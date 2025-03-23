export const getRandomInt = (max: number, min?: number) => {
	if (min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	return Math.floor(Math.random() * (max + 1));
};
