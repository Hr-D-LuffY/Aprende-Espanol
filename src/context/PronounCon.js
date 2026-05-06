const PRONOUNS = [
	{
		id: "yo",
		es: "Yo",
		en: "I",
		person: "1st",
		number: "singular",
		note: null,
		examples: [
			{ q: "¿Quién soy yo?", a: "Yo soy un estudiante." },
			{ q: "Who am I?", a: "I am a student." },
		],
	},
	{
		id: "tu",
		es: "Tú",
		en: "You (informal)",
		person: "2nd",
		number: "singular",
		note: "Accent on Tú distinguishes it from tu (your)",
		examples: [
			{ q: "¿Quién eres tú?", a: "Tú eres un profesor." },
			{ q: "Who are you?", a: "You are a professor." },
		],
	},
	{
		id: "el-ella",
		es: "Él / Ella",
		en: "He / She",
		person: "3rd",
		number: "singular",
		note: "Él = He · Ella = She (ey-ya)",
		examples: [
			{ q: "¿Quién es Taspia?", a: "Ella es una estudiante." },
			{ q: "Who is Taspia?", a: "She is a student." },
		],
	},
	{
		id: "nosotros",
		es: "Nosotros / Nosotras",
		en: "We",
		person: "1st",
		number: "plural",
		note: "Nosotros = mixed/M group · Nosotras = all female",
		examples: [
			{ q: "¿Quiénes son ustedes?", a: "Nosotros somos estudiantes." },
			{ q: "Who are you all?", a: "We are students." },
		],
	},
	{
		id: "vosotros",
		es: "Vosotros / Vosotras",
		en: "You all (Spain)",
		person: "2nd",
		number: "plural",
		note: "Used mainly in Spain · Latin America uses Ustedes instead",
		examples: [
			{ q: "¿Quiénes sois vosotros?", a: "Vosotros sois profesores." },
			{ q: "Who are you all?", a: "You all are professors." },
		],
	},
	{
		id: "ellos-ellas",
		es: "Ellos / Ellas",
		en: "They",
		person: "3rd",
		number: "plural",
		note: "Ellos = mixed/M group · Ellas = all female",
		examples: [
			{ q: "¿Quiénes son?", a: "Ellos son estudiantes." },
			{ q: "Who are they?", a: "They are students." },
		],
	},
];

const PERSON_COLOR = {
	"1st": "#f59e0b",
	"2nd": "#a1a1aa",
	"3rd": "#52525b",
};

export { PRONOUNS, PERSON_COLOR };
