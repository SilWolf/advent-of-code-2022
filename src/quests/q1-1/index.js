const fs = require('fs');

const main = () => {
	const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
	const args = input.split('\n');

	let maxCalories = 0;
	let currentCalories = 0;

	const parseIntOrThrow = (s) => {
		const result = parseInt(s);
		if (isNaN(result)) {
			throw new Error(`${s} is not a valid number string`);
		}

		return result;
	};

	for (let i = 0; i < args.length; i++) {
		if (args[i]) {
			currentCalories += parseIntOrThrow(args[i]);
		} else {
			if (currentCalories > maxCalories) {
				maxCalories = currentCalories;
			}
			currentCalories = 0;
		}
	}

	return maxCalories;
};

console.log(main());
