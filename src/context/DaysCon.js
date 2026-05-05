const KEY_RULES = [
	{
		tag: "always lowercase",
		rule: "lunes, enero",
		note: "not: Lunes, Enero",
		accent: true,
	},
	{
		tag: "on a specific day",
		rule: [{ text: "el", accent: true }, { text: " lunes" }],
		note: "on Monday (singular)",
	},
	{
		tag: "every / recurring",
		rule: [{ text: "los", accent: true }, { text: " lunes" }],
		note: "on Mondays (plural)",
	},
];

const DAYS = [
	{
		es: "lunes",
		en: "Monday",
		abbr: "lun.",
		note: "week starts here in Spanish",
	},
	{ es: "martes", en: "Tuesday", abbr: "mar." },
	{ es: "miércoles", en: "Wednesday", abbr: "mié." },
	{ es: "jueves", en: "Thursday", abbr: "jue." },
	{ es: "viernes", en: "Friday", abbr: "vie." },
	{ es: "sábado", en: "Saturday", abbr: "sáb.", note: "weekend" },
	{ es: "domingo", en: "Sunday", abbr: "dom.", note: "weekend" },
];

const MONTHS = [
	{ es: "enero", en: "January", season: "winter" },
	{ es: "febrero", en: "February", season: "winter" },
	{ es: "marzo", en: "March", season: "spring" },
	{ es: "abril", en: "April", season: "spring" },
	{ es: "mayo", en: "May", season: "spring" },
	{ es: "junio", en: "June", season: "summer" },
	{ es: "julio", en: "July", season: "summer" },
	{ es: "agosto", en: "August", season: "summer" },
	{ es: "septiembre", en: "September", season: "autumn" },
	{ es: "octubre", en: "October", season: "autumn" },
	{ es: "noviembre", en: "November", season: "autumn" },
	{ es: "diciembre", en: "December", season: "winter" },
];

const SEASONS = {
	winter: {
		es: "invierno",
		color: "text-[#60a5fa]",
		border: "border-[#60a5fa]/20",
		bg: "bg-[#60a5fa]/5",
	},
	spring: {
		es: "primavera",
		color: "text-[#4ade80]",
		border: "border-[#4ade80]/20",
		bg: "bg-[#4ade80]/5",
	},
	summer: {
		es: "verano",
		color: "text-[var(--accent)]",
		border: "border-[#f59e0b]/30",
		bg: "bg-[var(--accent)]/5",
	},
	autumn: {
		es: "otoño",
		color: "text-[#f97316]",
		border: "border-[#f97316]/20",
		bg: "bg-[#f97316]/5",
	},
};

const DAY_EXAMPLES = [
	{ es: "Hoy es lunes.", en: "Today is Monday." },
	{ es: "Mañana es martes.", en: "Tomorrow is Tuesday." },
	{ es: "El lunes tengo clase.", en: "On Monday I have class." },
	{ es: "Los lunes tengo clase.", en: "On Mondays I have class." },
	{ es: "¿Qué día es hoy?", en: "What day is today?" },
	{ es: "El fin de semana no trabajo.", en: "I don't work on weekends." },
];

const MONTH_EXAMPLES = [
	{ es: "Mi cumpleaños es en enero.", en: "My birthday is in January." },
	{ es: "Estamos en marzo.", en: "We are in March." },
	{ es: "¿En qué mes estamos?", en: "What month are we in?" },
	{
		es: "Las clases empiezan en septiembre.",
		en: "Classes start in September.",
	},
	{ es: "En diciembre hace frío.", en: "In December it's cold." },
	{ es: "Feliz Eid a todos — en abril.", en: "Happy Eid to all — in April." },
];

const DATE_EXAMPLES = [
	{ es: "Hoy es el 5 de mayo.", en: "Today is May 5th." },
	{
		es: "Mi cumpleaños es el 12 de octubre.",
		en: "My birthday is October 12th.",
	},
	{ es: "El examen es el 20 de junio.", en: "The exam is on June 20th." },
];



export { KEY_RULES, DAYS, MONTHS, SEASONS, DAY_EXAMPLES, MONTH_EXAMPLES, DATE_EXAMPLES };
