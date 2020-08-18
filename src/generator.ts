function* createRangeGenerator(step: number, max: number) {
	let n: number = step * step;
	while (n <= max) {
		yield n;
		n += step;
	}
}

const sieve = (limit: number): number[] => {
	let range: number[] = [...Array(limit + 1).keys()].slice(2);
	for (let i = 2; i <= Math.sqrt(limit); i++) {
		const toFilter: number[] = [];
		for (const n of createRangeGenerator(i, limit)) toFilter.push(n);
		range = range.filter((x) => !toFilter.includes(x));
	}
	return range;
};

export default sieve;
