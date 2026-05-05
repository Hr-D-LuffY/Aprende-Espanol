const BASIC_PAIRS = [
	{
		positive: "Yo hablo español.",
		negative: "Yo no hablo español.",
		en: "I don't speak Spanish.",
	},
	{
		positive: "Tengo dinero.",
		negative: "No tengo dinero.",
		en: "I don't have money.",
	},
	{
		positive: "Él tiene coche.",
		negative: "Él no tiene coche.",
		en: "He doesn't have a car.",
	},
	{
		positive: "Me gusta el café.",
		negative: "No me gusta el café.",
		en: "I don't like coffee.",
	},
	{
		positive: "Tienes novia.",
		negative: "No tienes novia.",
		en: "You don't have a girlfriend.",
	},
	{
		positive: "Nos gusta la música.",
		negative: "No nos gusta la música.",
		en: "We don't like music.",
	},
];

const DOUBLE_NEG = [
	{
		rule: "no + verb + nada",
		example: "No tengo nada.",
		note: "I have nothing. / I don't have anything.",
	},
	{
		rule: "no + verb + nadie",
		example: "No hay nadie aquí.",
		note: "There is nobody here.",
	},
	{
		rule: "no + verb + nunca",
		example: "No hablo nunca.",
		note: "I never speak.",
	},
	{
		rule: "no + verb + ningún/ninguna",
		example: "No tengo ningún problema.",
		note: "I have no problem.",
	},
];

const QUESTION_NEG = [
	{ es: "¿No tienes dinero?", en: "Don't you have money?" },
	{ es: "¿No te gusta?", en: "Don't you like it?" },
	{ es: "¿No hablas español?", en: "Don't you speak Spanish?" },
];

export { BASIC_PAIRS, DOUBLE_NEG, QUESTION_NEG };
