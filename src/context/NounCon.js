const MASCULINE_RULES = [
	{
		num: "Rule 01",
		title: "Ends in -O",
		tag: "-o",
		words: [
			{ es: "libro", pron: "lee-bro", en: "book" },
			{ es: "pollo", pron: "po-yo", en: "chicken" },
			{ es: "perro", pron: "pe-rro", en: "dog (M)" },
			{ es: "pueblo", pron: "pweh-blo", en: "village" },
			{ es: "bolígrafo", pron: "bo-lee-gra-fo", en: "pen" },
			{ es: "amigo", pron: "a-mee-go", en: "friend (M)" },
			{ es: "cocinero", pron: "ko-see-neh-ro", en: "cook (M)" },
			{ es: "ingeniero", pron: "in-he-nye-ro", en: "engineer (M)" },
		],
	},
	{
		num: "Rule 02",
		title: "Ends in a Consonant",
		tag: "usually",
		words: [
			{ es: "árbol", pron: "ar-bol", en: "tree" },
			{ es: "amor", pron: "a-mor", en: "love" },
			{ es: "doctor", pron: "doc-tor", en: "doctor" },
			{ es: "papel", pron: "pa-pel", en: "paper" },
		],
	},
	{
		num: "Rule 03",
		title: "Ends in -MA",
		tag: "Greek origin",
		words: [
			{ es: "programa", pron: "pro-gra-ma", en: "program" },
			{ es: "problema", pron: "pro-ble-ma", en: "problem" },
			{ es: "sistema", pron: "sis-te-ma", en: "system" },
			{ es: "mapa", pron: "ma-pa", en: "map" },
		],
	},
];

const FEMININE_RULES = [
	{
		num: "Rule 01",
		title: "Ends in -A",
		tag: "-a",
		words: [
			{ es: "casa", pron: "kah-sa", en: "house" },
			{ es: "vida", pron: "vee-da", en: "life" },
			{ es: "isla", pron: "ees-la", en: "island" },
			{ es: "chica", pron: "chee-ka", en: "girl" },
			{ es: "gata", pron: "ga-ta", en: "cat (F)" },
			{ es: "perra", pron: "pe-rra", en: "dog (F)" },
			{ es: "mesa", pron: "meh-sa", en: "table" },
			{ es: "puerta", pron: "pwer-ta", en: "door" },
		],
	},
	{
		num: "Rule 02",
		title: "Ends in -CIÓN / -SIÓN",
		tag: "-ción / -sión",
		words: [
			{ es: "canción", pron: "kan-see-on", en: "song" },
			{ es: "situación", pron: "see-tua-see-on", en: "situation" },
			{ es: "información", pron: "in-for-ma-see-on", en: "information" },
			{ es: "decisión", pron: "deh-see-see-on", en: "decision" },
		],
	},
	{
		num: "Rule 03",
		title: "Ends in -DAD / -TAD / -TUD",
		tag: "-dad / -tad / -tud",
		words: [
			{ es: "ciudad", pron: "see-oo-dad", en: "city" },
			{ es: "universidad", pron: "oo-nee-ver-see-dad", en: "university" },
			{ es: "actitud", pron: "ac-tee-tood", en: "attitude" },
			{ es: "facultad", pron: "fa-cool-tad", en: "faculty" },
		],
	},
	{
		num: "Rule 04",
		title: "Many -Z nouns",
		tag: "-z",
		words: [
			{ es: "luz", pron: "looz", en: "light" },
			{ es: "voz", pron: "bohs", en: "voice" },
			{ es: "paz", pron: "pahs", en: "peace" },
			{ es: "nariz", pron: "na-rees", en: "nose" },
		],
	},
	{
		num: "Rule 05",
		title: "Ends in -SIS",
		tag: "-sis",
		words: [
			{ es: "crisis", pron: "kree-sis", en: "crisis" },
			{ es: "tesis", pron: "teh-sis", en: "thesis" },
			{ es: "síntesis", pron: "seen-teh-sis", en: "synthesis" },
			{ es: "análisis", pron: "a-na-lee-sis", en: "analysis" },
		],
	},
];

const GENDER_PAIRS = [
	{ m: "amigo", f: "amiga", en: "friend" },
	{ m: "cocinero", f: "cocinera", en: "cook" },
	{ m: "ingeniero", f: "ingeniera", en: "engineer" },
	{ m: "chico", f: "chica", en: "boy / girl" },
	{ m: "perro", f: "perra", en: "dog" },
	{ m: "gato", f: "gata", en: "cat" },
];

const CONSONANT_PAIRS = [
	{ m: "doctor", f: "doctora", en: "doctor" },
	{ m: "profesor", f: "profesora", en: "teacher" },
	{ m: "director", f: "directora", en: "director" },
];

const EXCEPTIONS = [
	{
		es: "mano",
		pron: "mah-no",
		en: "hand — ends in -o but Feminine",
		gender: "F",
	},
	{
		es: "día",
		pron: "dee-ah",
		en: "day — ends in -a but Masculine",
		gender: "M",
	},
	{
		es: "foto",
		pron: "fo-to",
		en: "photo — ends in -o but Feminine",
		gender: "F",
	},
	{
		es: "moto",
		pron: "mo-to",
		en: "motorcycle — ends in -o but Feminine",
		gender: "F",
	},
	{
		es: "problema",
		pron: "pro-ble-ma",
		en: "problem — ends in -a but Masculine",
		gender: "M",
	},
	{
		es: "mapa",
		pron: "ma-pa",
		en: "map — ends in -a but Masculine",
		gender: "M",
	},
];

export {
	MASCULINE_RULES,
	FEMININE_RULES,
	GENDER_PAIRS,
	CONSONANT_PAIRS,
	EXCEPTIONS,
};
