export const RULES = [
	{
		id: "vowels",
		title: "Vowels never change",
		tag: "FOUNDATION",
		tagColor: "#f59e0b",
		summary: "Every vowel always makes the same sound, no exceptions.",
		content: [
			{
				type: "vowel-grid",
				items: [
					{
						letter: "A",
						sound: "ah",
						example: "casa",
						pron: "kah-sah",
						meaning: "house",
					},
					{
						letter: "E",
						sound: "eh",
						example: "vino",
						pron: "vee-noh",
						meaning: "wine",
					},
					{
						letter: "I",
						sound: "ee",
						example: "luna",
						pron: "loo-nah",
						meaning: "moon",
					},
					{
						letter: "O",
						sound: "oh",
						example: "libro",
						pron: "lee-broh",
						meaning: "book",
					},
					{
						letter: "U",
						sound: "oo",
						example: "tú",
						pron: "too",
						meaning: "you",
					},
				],
			},
		],
		tip: "This is your biggest advantage over English. Once you learn the 5 sounds, every word is readable.",
	},
	{
		id: "h",
		title: "H is always silent",
		tag: "SILENT LETTER",
		tagColor: "#6EE7B7",
		summary: "The letter H makes no sound at all in Spanish — ever.",
		content: [
			{
				type: "examples",
				items: [
					{ word: "hola", pron: "oh-lah", meaning: "hello" },
					{ word: "hombre", pron: "om-breh", meaning: "man" },
					{ word: "hablar", pron: "ah-blar", meaning: "to speak" },
					{ word: "hacer", pron: "ah-sehr", meaning: "to do/make" },
					{ word: "hijo", pron: "ee-hoh", meaning: "son" },
				],
			},
		],
		tip: "Think of H as invisible. If you see it, just skip it and read the rest.",
	},
	{
		id: "c",
		title: "C has two sounds",
		tag: "TWO SOUNDS",
		tagColor: "#93C5FD",
		summary:
			"C sounds like S before E or I, and like K before everything else.",
		content: [
			{
				type: "split",
				left: {
					label: "before E, I → S sound",
					items: [
						{ word: "cena", pron: "seh-nah", meaning: "dinner" },
						{ word: "cine", pron: "see-neh", meaning: "cinema" },
						{ word: "ciudad", pron: "see-oo-dahd", meaning: "city" },
					],
				},
				right: {
					label: "before A, O, U → K sound",
					items: [
						{ word: "casa", pron: "kah-sah", meaning: "house" },
						{ word: "cosa", pron: "koh-sah", meaning: "thing" },
						{ word: "cuna", pron: "koo-nah", meaning: "cradle" },
					],
				},
			},
		],
		tip: "CE and CI = S. CA, CO, CU = K. Same rule as Italian.",
	},
	{
		id: "g",
		title: "G has two sounds",
		tag: "TWO SOUNDS",
		tagColor: "#93C5FD",
		summary:
			"G sounds like the English H before E or I, and like a hard G everywhere else.",
		content: [
			{
				type: "split",
				left: {
					label: "before E, I → H sound",
					items: [
						{ word: "gente", pron: "hen-teh", meaning: "people" },
						{ word: "girar", pron: "hee-rahr", meaning: "to turn" },
						{ word: "general", pron: "heh-neh-rahl", meaning: "general" },
					],
				},
				right: {
					label: "before A, O, U → G sound",
					items: [
						{ word: "gato", pron: "gah-toh", meaning: "cat" },
						{ word: "goma", pron: "goh-mah", meaning: "eraser" },
						{ word: "gustar", pron: "goos-tahr", meaning: "to like" },
					],
				},
			},
			{
				type: "note-block",
				label: "Special case: GUE / GUI",
				body: "When G is followed by UE or UI, the U is silent and G stays hard.",
				items: [
					{ word: "guitarra", pron: "gee-tah-rah", meaning: "guitar" },
					{ word: "guerra", pron: "geh-rah", meaning: "war" },
					{ word: "guiso", pron: "gee-soh", meaning: "stew" },
				],
			},
		],
		tip: "GE and GI = H sound. GA, GO, GU = hard G. GUE/GUI = hard G with silent U.",
	},
	{
		id: "n",
		title: "Ñ = NY sound",
		tag: "UNIQUE LETTER",
		tagColor: "#C4B5FD",
		summary:
			'Ñ is its own letter in Spanish. It always sounds like "ny" as in "canyon".',
		content: [
			{
				type: "examples",
				items: [
					{ word: "niño", pron: "nee-nyoh", meaning: "boy" },
					{ word: "año", pron: "ah-nyoh", meaning: "year" },
					{
						word: "mañana",
						pron: "mah-nyah-nah",
						meaning: "morning / tomorrow",
					},
					{ word: "España", pron: "es-pah-nyah", meaning: "Spain" },
					{ word: "baño", pron: "bah-nyoh", meaning: "bathroom" },
				],
			},
		],
		tip: 'Think of it as N + Y merged into one letter. "Canyon" in English uses the same sound.',
	},
	{
		id: "r",
		title: "R and RR — the trill",
		tag: "TRICKY",
		tagColor: "#FCA5A5",
		summary:
			"Single R is a soft tap. Double RR is a strong trill. Both are different sounds.",
		content: [
			{
				type: "split",
				left: {
					label: "Single R → soft tap",
					items: [
						{ word: "pero", pron: "peh-roh", meaning: "but" },
						{ word: "cara", pron: "kah-rah", meaning: "face" },
						{ word: "faro", pron: "fah-roh", meaning: "lighthouse" },
					],
				},
				right: {
					label: "Double RR → strong trill",
					items: [
						{ word: "perro", pron: "peh-rroh", meaning: "dog" },
						{ word: "tierra", pron: "tee-eh-rah", meaning: "earth" },
						{ word: "arroz", pron: "ah-rroth", meaning: "rice" },
					],
				},
			},
			{
				type: "note-block",
				label: "R at start of word",
				body: "R at the beginning of a word is always trilled like RR.",
				items: [
					{ word: "rojo", pron: "rroh-hoh", meaning: "red" },
					{ word: "rosa", pron: "rroh-sah", meaning: "rose" },
				],
			},
		],
		tip: "Pero = but / Perro = dog. One R vs two R changes the meaning entirely.",
	},
	{
		id: "ll",
		title: "LL sounds like Y",
		tag: "NOTE",
		tagColor: "#FCD34D",
		summary:
			'Double L (LL) is not two L sounds — it makes a Y sound like in "yes".',
		content: [
			{
				type: "examples",
				items: [
					{ word: "lluvia", pron: "yoo-bee-ah", meaning: "rain" },
					{ word: "llegar", pron: "yeh-gahr", meaning: "to arrive" },
					{ word: "calle", pron: "kah-yeh", meaning: "street" },
					{ word: "pollo", pron: "poh-yoh", meaning: "chicken" },
					{ word: "ella", pron: "eh-yah", meaning: "she" },
				],
			},
		],
		tip: 'LL = Y sound. "Ella" (she) sounds like "eh-yah", not "el-la".',
	},
	{
		id: "qu",
		title: "QU = K sound, U is silent",
		tag: "NOTE",
		tagColor: "#FCD34D",
		summary:
			"QU is always followed by E or I. The U is silent and it just makes a K sound.",
		content: [
			{
				type: "examples",
				items: [
					{ word: "queso", pron: "keh-soh", meaning: "cheese" },
					{ word: "querer", pron: "keh-rehr", meaning: "to want/love" },
					{ word: "quién", pron: "kyen", meaning: "who" },
					{ word: "aquí", pron: "ah-kee", meaning: "here" },
					{ word: "pequeño", pron: "peh-keh-nyoh", meaning: "small" },
				],
			},
		],
		tip: 'QUE = "keh", QUI = "kee". The U is never heard.',
	},
	{
		id: "accent",
		title: "Accent marks change stress",
		tag: "STRESS",
		tagColor: "#6EE7B7",
		summary:
			"An accent mark (á é í ó ú) tells you to stress that syllable. It can also change meaning.",
		content: [
			{
				type: "examples",
				items: [
					{
						word: "mamá",
						pron: "mah-MAH",
						meaning: "mom (stress on last syllable)",
					},
					{
						word: "música",
						pron: "MOO-see-kah",
						meaning: "music (stress on first)",
					},
					{
						word: "él / el",
						pron: "el",
						meaning: "he vs. the (accent changes meaning)",
					},
					{ word: "sí / si", pron: "see", meaning: "yes vs. if" },
					{ word: "tú / tu", pron: "too", meaning: "you vs. your" },
				],
			},
		],
		tip: "No accent? Default stress is on the second-to-last syllable for most words.",
	},
];
