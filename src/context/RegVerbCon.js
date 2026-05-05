const TABS = [
	{ id: "ar", label: "-AR", patternVerb: "hablar", stem: "habl" },
	{ id: "er", label: "-ER", patternVerb: "comer", stem: "com" },
	{ id: "ir", label: "-IR", patternVerb: "vivir", stem: "viv" },
];

const CONJUGATION_PATTERNS = {
	ar: [
		{ pronoun: "yo", ending: "o" },
		{ pronoun: "tú", ending: "as" },
		{ pronoun: "él/ella", ending: "a" },
		{ pronoun: "nosotros", ending: "amos" },
		{ pronoun: "vosotros", ending: "áis" },
		{ pronoun: "ellos", ending: "an" },
	],
	er: [
		{ pronoun: "yo", ending: "o" },
		{ pronoun: "tú", ending: "es" },
		{ pronoun: "él/ella", ending: "e" },
		{ pronoun: "nosotros", ending: "emos" },
		{ pronoun: "vosotros", ending: "éis" },
		{ pronoun: "ellos", ending: "en" },
	],
	ir: [
		{ pronoun: "yo", ending: "o" },
		{ pronoun: "tú", ending: "es" },
		{ pronoun: "él/ella", ending: "e" },
		{ pronoun: "nosotros", ending: "imos" },
		{ pronoun: "vosotros", ending: "ís" },
		{ pronoun: "ellos", ending: "en" },
	],
};

const ENDINGS_BY_TYPE = {
	ar: ["amos", "áis", "an", "as", "a", "o"],
	er: ["emos", "éis", "en", "es", "e", "o"],
	ir: ["imos", "ís", "en", "es", "e", "o"],
};
export { TABS, CONJUGATION_PATTERNS, ENDINGS_BY_TYPE };
