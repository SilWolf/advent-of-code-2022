const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
const inputArgs = input.split('\n');

const main = (args) => {
	const MAX_SLOT = 3;
	const caloriesQueue = new Array(MAX_SLOT).fill(0);

	let currentCalories = 0;

	const parseIntOrThrow = (s) => {
		const result = parseInt(s);
		if (isNaN(result)) {
			throw new Error(`${s} is not a valid number string`);
		}

		return result;
	};

	const insertCalories = (n) => {
		const insertIndex = caloriesQueue.findIndex((calories) => calories < n);

		if (insertIndex !== -1) {
			caloriesQueue.splice(insertIndex, 0, n);
			caloriesQueue.pop();
		}
	};

	for (let i = 0; i < args.length; i++) {
		if (args[i]) {
			currentCalories += parseIntOrThrow(args[i]);
		} else {
			insertCalories(currentCalories);
			currentCalories = 0;
		}
	}

	if (currentCalories > 0) {
		insertCalories(currentCalories);
	}

	return caloriesQueue.reduce((prev, curr) => prev + curr, 0);
};

console.log(main(inputArgs));
