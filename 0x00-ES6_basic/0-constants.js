export function taskFirst() {
	const task = 'I preferr const when i can.';
}
export function getLast(){
	return 'is okay';
}

export function taskNext(){
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}
