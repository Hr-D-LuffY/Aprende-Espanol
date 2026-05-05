const GENDER_PAIRS = [
	{ label: "Masculine", es: "chico bueno", en: "good boy" },
	{ label: "Feminine", es: "chica buena", en: "good girl" },
	{ label: "M. Plural", es: "chicos buenos", en: "good boys" },
	{ label: "F. Plural", es: "chicas buenas", en: "good girls" },
];

const PLURAL_EXAMPLES = [
	{
		es: "pollos grandes",
		pronunciation: "(po-yos gran-des)",
		en: "big chickens",
	},
	{
		es: "casas blancas",
		pronunciation: "(kah-sas blan-kas)",
		en: "white houses",
	},
	{
		es: "libros viejos",
		pronunciation: "(lee-bros byeh-hos)",
		en: "old books",
	},
];

const INVARIABLE_WORDS = [
	"grande",
	"verde",
	"feliz",
	"inteligente",
	"fácil",
	"joven",
];

const INVARIABLE_EXAMPLES = [
	{ es: "chica grande", pronunciation: "(chee-ka gran-deh)", en: "big girl" },
	{ es: "chico grande", pronunciation: "(chee-ko gran-deh)", en: "big boy" },
	{ es: "El hombre bueno", pronunciation: null, en: "The good man" },
	{ es: "Los chicos malos", pronunciation: null, en: "The bad boys" },
];

export { GENDER_PAIRS, PLURAL_EXAMPLES, INVARIABLE_EXAMPLES, INVARIABLE_WORDS };
