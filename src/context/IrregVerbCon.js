const TABS = [
	{ id: "ar", label: "-AR", patternVerb: "hablar", stem: "habl" },
	{ id: "er", label: "-ER", patternVerb: "comer", stem: "com" },
	{ id: "ir", label: "-IR", patternVerb: "vivir", stem: "viv" },
];

const IRREGULAR_CATEGORIES = {
	go_verb: {
		label: "Go Verbs",
		description: 'Yo form ends in "-go", rest conjugate normally.',
		example: "tener → tengo",
	},
	unique_yo_changes: {
		label: "Unique Yo Changes",
		description:
			"Only the yo form is irregular; all other forms follow regular patterns.",
		example: "saber → sé",
	},
	spelling_change_GUIR: {
		label: "Spelling: -GUIR",
		description: 'Drop the "u" in yo form to preserve the hard G sound.',
		example: "distinguir → distingo",
	},
	spelling_change_GER_GIR: {
		label: "Spelling: -GER/-GIR",
		description: 'Yo form changes G → J to preserve the soft sound before "o".',
		example: "coger → cojo",
	},
	spelling_change_CER_CIR: {
		label: "Spelling: -CER/-CIR",
		description: 'Yo form changes C → ZC before "o".',
		example: "conocer → conozco",
	},
	stem_IE: {
		label: "Stem: E → IE",
		description:
			"Stem vowel E changes to IE in all forms except nosotros and vosotros.",
		example: "querer → quiero",
	},
	stem_UE: {
		label: "Stem: O → UE",
		description:
			"Stem vowel O changes to UE in all forms except nosotros and vosotros.",
		example: "poder → puedo",
	},
	stem_I: {
		label: "Stem: E → I",
		description:
			"Stem vowel E changes to I in all forms except nosotros and vosotros. Only -IR verbs.",
		example: "pedir → pido",
	},
};

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

export { TABS, IRREGULAR_CATEGORIES, CONJUGATION_PATTERNS };
