const sieve = (limit: number): number[] => {
	let range: number[] = [...Array(limit + 1).keys()].slice(2); // this magic thing generates a range of numbers from 2 to a limit (including limit hence the `+1`)
	let primes: number[] = [];
	// were using the fact that 0 is falsey and will break the loop and that we will eliminate all of the nums from that array eventually so it wont be an infinite loop
	while (range.length) {
		// shift function eliminates first element by default and returns it, so its perfect for the algo as we want to keep the starting points always
		// (that exclamation mark at the end is for TypeScript to shut up, its rightly mad cause shift can return undefined when there is nothing to delete and i specified that the array is for numbers only
		// but we take care of that by checking it in the while loop)
		let n: number = range.shift()!;
		primes.push(n); // we can do that because its the starting point and again, we want to keep the starting points always, and were sure they are correct because of the next steps
		// now we need to filter out the multiples of that number
		// we overwrite the value of range with new filtered one thats using (again...) falseyness of 0, so if something is not divisible by n with the rest of zero we'll keep it
		range = range.filter((num) => num % n);
	}
	return primes;
};

export default sieve;
