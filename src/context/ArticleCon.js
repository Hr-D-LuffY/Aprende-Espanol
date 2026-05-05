const DEFINITE_CONTENT = {
	label: "THE",
	rows: [
		{ gender: "Masculine", singular: "El", plural: "Los" },
		{ gender: "Feminine", singular: "La", plural: "Las" },
	],
	examples: [
		{ es: "el pollo", en: "the chicken" },
		{ es: "la casa", en: "the house" },
		{ es: "los pollos", en: "the chickens" },
		{ es: "las casas", en: "the houses" },
	],
	sentences: [
		{ es: "La casa de papel", en: "The house of paper" },
		{ es: "El amigo de Ronaldo", en: "The friend of Ronaldo" },
	],
};

const INDEFINITE_CONTENT = {
	label: "A / AN / SOME",
	rows: [
		{ gender: "Masculine", singular: "Un", plural: "Unos" },
		{ gender: "Feminine", singular: "Una", plural: "Unas" },
	],
	examples: [
		{ es: "un libro", en: "a book" },
		{ es: "una fruta", en: "a fruit" },
		{ es: "unos amigos", en: "some friends" },
		{ es: "unas casas", en: "some houses" },
	],
	sentences: [
		{ es: "Tengo un gato", en: "I have a cat" },
		{ es: "Hay unas flores aquí", en: "There are some flowers here" },
	],
};

export { DEFINITE_CONTENT, INDEFINITE_CONTENT };
