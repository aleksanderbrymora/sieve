interface SieveType {
	primes: number[];
	list: boolean[];
	calc: (num: number) => number[];
}

const sieve: SieveType = {
	primes: [], // will hold booleans that initially will all be true (primes) but we will flip those booleans, when we do the algo, to false to signify that its not prime
	list: [], // will hold only primes; basically array that will have `true` values from primes array converted to numbers
	calc: function (num) {
		this.list = Array(num).fill(true); // Generate an array full of `true`, with length of passed in param;

		// flip `true` in primes to `false` for each non-prime
		// Remember to start with `2` and go up to a number and include it
		for (let i = 2; i <= num; i++) {
			// we start with a square of `i`, because as you remember we leave the first element alone
			for (let j = i * i; j <= num; j++) {
				// now we have to check if something has already been flipped or not AND if its not a prime, ie its divisible by something
				if (this.list[j] && j % i === 0) {
					// if it is we flip the boolean
					this.list[j] = false;
				}
			}
		}

		// Then its just the matter of converting every `true` to a number
		for (let i = 2; i <= num; i++) {
			if (this.list[i]) {
				this.primes.push(i);
			}
		}

		return this.primes; // Share that hard calculation with the whole world
	},
};

export default sieve;
