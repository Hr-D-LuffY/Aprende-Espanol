const IRREGULAR_CATEGORIES = {
	irregular_full: {
		label: "Fully Irregular",
		description:
			"Every form is unpredictable — no pattern, no rules. Must be memorized completely.",
		example: "ir → voy, vas, va, vamos, vais, van",
	},

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
		spelling_change_CER_CIR: {
		label: "Spelling: -CER/-CIR",
		description: 'Yo form changes C → ZC before "o".',
		example: "conocer → conozco",
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

	spelling_change_UAR_IAR: {
		label: "Stress-Shift Verbs",
		description:
			"Stem vowel u or i takes an accent mark in all forms except nosotros and vosotros.",
		example: "enviar → envío, envías, envía, enviamos, enviáis, envían",
	},
};

export { IRREGULAR_CATEGORIES };
