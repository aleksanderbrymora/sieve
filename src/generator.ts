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
		// generator functions also have an iterator inside of them, so we can use for of to generate the array
		// great vid to understand whats happening https://www.youtube.com/watch?v=EzdgkEMvrvA
		for (const n of createRangeGenerator(i, limit)) toFilter.push(n);
		// got this from here https://stackoverflow.com/a/33034768/12654572
		// Its to get the difference between the arrays
		range = range.filter((x) => !toFilter.includes(x));
	}
	return range;
};

export default sieve;
