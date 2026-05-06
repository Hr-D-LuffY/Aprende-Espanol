const DISTANCE_GROUPS = [
	{
		id: "near",
		label: "Near",
		sublabel: "este / esta / esto",
		marker: "●",
		desc: "Right here — something close to the speaker",
		items: [
			{
				spanish: "Este",
				gender: "M",
				meaning: "This",
				example: "Este libro",
				ex_en: "This book",
			},
			{
				spanish: "Esta",
				gender: "F",
				meaning: "This",
				example: "Esta mesa",
				ex_en: "This table",
			},
			{
				spanish: "Esto",
				gender: "NEU",
				meaning: "This",
				example: "¿Qué es esto?",
				ex_en: "What is this?",
			},
			{
				spanish: "Estos",
				gender: "M·PL",
				meaning: "These",
				example: "Estos días",
				ex_en: "These days",
			},
			{
				spanish: "Estas",
				gender: "F·PL",
				meaning: "These",
				example: "Estas flores",
				ex_en: "These flowers",
			},
		],
	},
	{
		id: "mid",
		label: "There",
		sublabel: "ese / esa / eso",
		marker: "◉",
		desc: "Near the listener — something at a medium distance",
		items: [
			{
				spanish: "Ese",
				gender: "M",
				meaning: "That",
				example: "Ese coche",
				ex_en: "That car",
			},
			{
				spanish: "Esa",
				gender: "F",
				meaning: "That",
				example: "Esa silla",
				ex_en: "That chair",
			},
			{
				spanish: "Eso",
				gender: "NEU",
				meaning: "That",
				example: "¿Por qué eso?",
				ex_en: "Why that?",
			},
			{
				spanish: "Esos",
				gender: "M·PL",
				meaning: "Those",
				example: "Esos chicos",
				ex_en: "Those guys",
			},
			{
				spanish: "Esas",
				gender: "F·PL",
				meaning: "Those",
				example: "Esas ideas",
				ex_en: "Those ideas",
			},
		],
	},
	{
		id: "far",
		label: "Far",
		sublabel: "aquel / aquella / aquello",
		marker: "○",
		desc: "Over there — distant from both speaker and listener",
		items: [
			{
				spanish: "Aquel",
				gender: "M",
				meaning: "That",
				example: "Aquel hombre",
				ex_en: "That man (far)",
			},
			{
				spanish: "Aquella",
				gender: "F",
				meaning: "That",
				example: "Aquella ciudad",
				ex_en: "That city (far)",
			},
			{
				spanish: "Aquello",
				gender: "NEU",
				meaning: "That",
				example: "¿Qué es aquello?",
				ex_en: "What is that?",
			},
			{
				spanish: "Aquellos",
				gender: "M·PL",
				meaning: "Those",
				example: "Aquellos tiempos",
				ex_en: "Those times (far)",
			},
			{
				spanish: "Aquellas",
				gender: "F·PL",
				meaning: "Those",
				example: "Aquellas montañas",
				ex_en: "Those mountains",
			},
		],
	},
];

const LOCATION_WORDS = [
	{ spanish: "Aquí", meaning: "Here", note: "near the speaker" },
	{ spanish: "Allí", meaning: "There", note: "near the listener or far" },
	{ spanish: "Allá", meaning: "Over there", note: "more distant, vague" },
	{
		spanish: "Hay",
		meaning: "There is / are",
		note: "existence — singular & plural",
	},
];

const GENDER_COLORS = {
	M: { dot: "bg-[#93C5FD]", text: "text-[#93C5FD]", label: "Masc" },
	F: { dot: "bg-[#FCA5A5]", text: "text-[#FCA5A5]", label: "Fem" },
	NEU: { dot: "bg-[#C4B5FD]", text: "text-[#C4B5FD]", label: "Neut" },
	"M·PL": { dot: "bg-[#93C5FD]", text: "text-[#93C5FD]", label: "Masc·Pl" },
	"F·PL": { dot: "bg-[#FCA5A5]", text: "text-[#FCA5A5]", label: "Fem·Pl" },
};

export { DISTANCE_GROUPS, LOCATION_WORDS, GENDER_COLORS };
