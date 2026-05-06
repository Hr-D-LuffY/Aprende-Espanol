const SLOTS = [
	{
		id: "subject",
		label: "Subject",
		abbr: "S",
		color: "#93C5FD",
		desc: "Who does the action. Can be dropped — the verb ending already shows it.",
		notes: [
			"Yo, tú, él, ella, nosotros, ellos",
			"Proper names: María, Carlos",
			"Often omitted in Spanish (pro-drop language)",
		],
	},
	{
		id: "verb",
		label: "Verb",
		abbr: "V",
		color: "#f59e0b",
		desc: "The action — always conjugated to match the subject.",
		notes: [
			"Habla = he/she speaks (not 'hablar')",
			"Verb carries the subject info via its ending",
			"Usually the most important word in the sentence",
		],
	},
	{
		id: "object",
		label: "Object",
		abbr: "O",
		color: "#6EE7B7",
		desc: "What the action is done to. Can be direct or indirect.",
		notes: [
			"Direct: what receives the action — veo el perro",
			"Indirect: who benefits — le doy el libro",
			"Objects often come after the verb in Spanish",
		],
	},
];

const EXAMPLES = [
	{
		id: "basic",
		label: "Basic SVO",
		parts: [
			{ slot: "subject", text: "El libro" },
			{ slot: "verb", text: "es" },
			{ slot: "object", text: "rojo" },
		],
		translation: "The book is red",
	},

	{
		id: "dropped",
		label: "Subject dropped",
		parts: [
			{ slot: "verb", text: "eres" },
			{ slot: "object", text: "bonita" },
		],
		translation: "You are beautiful",
		note: "Subject 'tú' is understood from the verb ending",
	},

	{
		id: "question",
		label: "Yes/No question",
		parts: [
			{ slot: "verb", text: "¿el libro" },
			{ slot: "subject", text: "es" },
			{ slot: "object", text: "rojo?" },
		],
		translation: "Is the book red?",
		note: "Just add ¿…? — word order stays the same",
	},

	{
		id: "neg",
		label: "Negation",
		parts: [
			{ slot: "subject", text: "El libro" },
			{ slot: "verb", text: "no es" },
			{ slot: "object", text: "rojo" },
		],
		translation: "The book is not red",
		note: "Put 'no' directly before the verb",
	},

	{
		id: "wh",
		label: "WH-question",
		parts: [
			{ slot: "wh", text: "¿Dónde" },
			{ slot: "verb", text: "vives" }, // (optional: you can also change this later)
			{ slot: "subject", text: "tú?" },
		],
		translation: "Where do you live?",
		note: "Question word → verb → subject",
	},
];

const SLOT_COLOR = {
	subject: "#93C5FD",
	verb: "#f59e0b",
	object: "#6EE7B7",
	wh: "#C4B5FD",
};

export { SLOTS, EXAMPLES, SLOT_COLOR };
