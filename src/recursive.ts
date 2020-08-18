const sieve = (
	limit: number,
	range: number[] = [...Array(limit + 1).keys()].slice(2),
	primes: number[] = [],
): number[] => {
	if (range.length === 0) return primes;
	let n: number = range.shift()!;
	return sieve(
		limit,
		range.filter((num) => num % n),
		[...primes, n],
	);
};

export default sieve;
