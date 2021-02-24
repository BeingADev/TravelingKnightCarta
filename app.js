function boardTours(move) {
	const alpha = "ABCDEFGH";
	move =
		move[1] - 1 + (alpha.indexOf(move[0].toUpperCase()) << (alpha.length / 2));

	return [-18, -33, -31, -14, 18, 33, 31, 14]
		.map((a) => move + a)
		.filter((f) => !(f & 0x88))
		.map((o) => alpha[o >> (alpha.length / 2)] + ((o & 7) + 1));
}

console.log(boardTours("A2"));
