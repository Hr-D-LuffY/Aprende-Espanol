const QUESTION_WORDS = [
	{
		en: "Who",
		es: "¿Quién?",
		note: "People only",
		example: "¿Quién es ella?",
		ex_en: "Who is she?",
		category: "person",
	},
	{
		en: "Where",
		es: "¿Dónde?",
		note: "Location",
		example: "¿Dónde vives?",
		ex_en: "Where do you live?",
		category: "place",
	},
	{
		en: "When",
		es: "¿Cuándo?",
		note: "Time",
		example: "¿Cuándo llega?",
		ex_en: "When does it arrive?",
		category: "time",
	},
	{
		en: "Why",
		es: "¿Por qué?",
		note: "Two words — reason",
		example: "¿Por qué estudias?",
		ex_en: "Why do you study?",
		category: "reason",
	},
	{
		en: "What",
		es: "¿Qué?",
		note: "Things / general",
		example: "¿Qué quieres?",
		ex_en: "What do you want?",
		category: "thing",
	},
	{
		en: "What else",
		es: "¿Qué más?",
		note: "Additional info",
		example: "¿Qué más necesitas?",
		ex_en: "What else do you need?",
		category: "thing",
	},
	{
		en: "How",
		es: "¿Cómo?",
		note: "Manner / description",
		example: "¿Cómo estás?",
		ex_en: "How are you?",
		category: "manner",
	},
	{
		en: "How much",
		es: "¿Cuánto?",
		note: "Amount / quantity",
		example: "¿Cuánto cuesta?",
		ex_en: "How much does it cost?",
		category: "amount",
	},
	{
		en: "How many",
		es: "¿Cuántos?",
		note: "Countable plural",
		example: "¿Cuántos años tienes?",
		ex_en: "How many years old are you?",
		category: "amount",
	},
	{
		en: "Which",
		es: "¿Cuál?",
		note: "Singular selection",
		example: "¿Cuál prefieres?",
		ex_en: "Which do you prefer?",
		category: "select",
	},
	{
		en: "Which (pl.)",
		es: "¿Cuáles?",
		note: "Plural selection",
		example: "¿Cuáles son tus favoritos?",
		ex_en: "Which are your favorites?",
		category: "select",
	},
	{
		en: "How + adj",
		es: "¿Qué tan?",
		note: "Degree — how + adjective",
		example: "¿Qué tan lejos está?",
		ex_en: "How far is it?",
		category: "degree",
	},
];

const CATEGORY_COLORS = {
	person: "#FCA5A5",
	place: "#6EE7B7",
	time: "#93C5FD",
	reason: "#FCD34D",
	thing: "#f59e0b",
	manner: "#C4B5FD",
	amount: "#6EE7B7",
	select: "#93C5FD",
	degree: "#FCA5A5",
};

const KEY_NOTES = [
	{
		note: "¿Por qué?",
		detail:
			"is why (question). Porque is because (answer). Two different spellings.",
	},
	{
		note: "¿Cuál?",
		detail:
			"vs ¿Qué? — use Cuál when choosing from a set; Qué when asking for a definition.",
	},
	{
		note: "¿Cuánto?",
		detail: "changes gender: cuánto/cuánta/cuántos/cuántas to match the noun.",
	},
	{
		note: "Accent mark",
		detail:
			"All question words carry an accent mark. Without it, they become conjunctions: que, como, cuando…",
	},
];

export { KEY_NOTES, CATEGORY_COLORS, QUESTION_WORDS };
