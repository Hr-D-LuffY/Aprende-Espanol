const POSSESSIVES = [
	{
		id: "mi",
		es: "Mi",
		en: "My",
		person: "1st",
		number: "singular",
		note: "No gender change: mi libro / mi casa",
		examples: [
			{ q: "¿De quién es esto?", a: "Es mi libro." },
			{ q: "Whose is this?", a: "It is my book." },
		],
	},

	{
		id: "tu",
		es: "Tu",
		en: "Your (informal)",
		person: "2nd",
		number: "singular",
		note: "No accent: tu = your, tú = you (different meaning)",
		examples: [
			{ q: "¿Es tu casa?", a: "Sí, es mi casa." },
			{ q: "Is it your house?", a: "Yes, it is my house." },
		],
	},

	{
		id: "su",
		es: "Su",
		en: "His / Her / Their / Your (formal)",
		person: "3rd",
		number: "both",
		note: "One form for all third-person possession",
		examples: [
			{ q: "¿Es su coche?", a: "Sí, es su coche." },
			{ q: "Is it his/her car?", a: "Yes, it is his/her car." },
		],
	},

	{
		id: "nuestro",
		es: "Nuestro / Nuestra",
		en: "Our",
		person: "1st",
		number: "plural",
		note: "Nosotro = mixed/M group · Nosotra = all female",
		examples: [
			{ q: "¿Es nuestro problema?", a: "Sí, es nuestro problema." },
			{ q: "Is it our problem?", a: "Yes, it is our problem." },
		],
	},

	{
		id: "vuestro",
		es: "Vuestro / Vuestra",
		en: "Your (Spain plural)",
		person: "2nd",
		number: "plural",
		note: "Used mainly in Spain · Latin America uses Ustedes instead",
		examples: [
			{ q: "¿Es vuestro libro?", a: "Sí, es vuestro libro." },
			{ q: "Is it your book?", a: "Yes, it is your book." },
		],
	},
];
const PERSON_COLOR = {
	"1st": "#f59e0b",
	"2nd": "#a1a1aa",
	"3rd": "#52525b",
};

export { POSSESSIVES, PERSON_COLOR };
