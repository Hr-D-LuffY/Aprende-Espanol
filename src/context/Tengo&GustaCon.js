const TENGO_CONJUGATIONS = [
	{ pronoun: "yo", form: "tengo", meaning: "I have" },
	{ pronoun: "tú", form: "tienes", meaning: "You have" },
	{ pronoun: "él / ella", form: "tiene", meaning: "He/She has" },
	{ pronoun: "nosotros", form: "tenemos", meaning: "We have" },
	{ pronoun: "vosotros", form: "tenéis", meaning: "You all have" },
	{ pronoun: "ellos / ellas", form: "tienen", meaning: "They have" },
];

const TENGO_EXAMPLES = [
	{ es: "Yo tengo un sueño.", en: "I have a dream." },
	{ es: "¿Cuánto dinero tienes?", en: "How much money do you have?" },
	{ es: "Él tiene un coche.", en: "He has a car." },
	{ es: "Nosotros tenemos la casa.", en: "We have a house." },
	{ es: "¿Cuántos años tienes?", en: "How old are you?" },
	{ es: "Tengo 20 años.", en: "I am 20 years old." },
];

const GUSTA_CONJUGATIONS = [
	{ pronoun: "me (yo)", form: "me gusta", meaning: "I like" },
	{ pronoun: "te (tú)", form: "te gusta", meaning: "You like" },
	{ pronoun: "le (él/ella)", form: "le gusta", meaning: "He/She likes" },
	{ pronoun: "nos (nosotros)", form: "nos gusta", meaning: "We like" },
	{ pronoun: "os (vosotros)", form: "os gusta", meaning: "You all like" },
	{ pronoun: "les (ellos)", form: "les gusta", meaning: "They like" },
];

const GUSTA_EXAMPLES = [
	{ es: "Me gusta la manzana.", en: "I like the apple." },
	{ es: "¿Qué te gusta?", en: "What do you like?" },
	{
		es: "Me gusta el té con azúcar y leche.",
		en: "I like tea with sugar and milk.",
	},
	{ es: "¿Qué te gusta mucho?", en: "What do you like most?" },
	{ es: "¿Cómo te gusta?", en: "How do you like it?" },
	{ es: "Le gusta el coche.", en: "He/She likes the car." },
	{ es: "¿A quién le gusta el té?", en: "Who likes tea?" },
	{ es: "A Priota le gusta el té.", en: "Priota likes tea." },
	{ es: "Nos gusta la música.", en: "We like music." },
	{ es: "Les gusta la casa.", en: "They like the house." },
];

const GUSTA_GUSTAN = [
	{ es: "Me gusta el café.", en: "I like coffee.", form: "gusta", tag: "singular", subject: "el café" },
	{ es: "Me gusta la música.", en: "I like music.", form: "gusta", tag: "singular", subject: "la música" },
	{ es: "Me gustan los libros.", en: "I like books.", form: "gustan", tag: "plural", subject: "los libros" },
	{ es: "Te gustan las películas.", en: "You like movies.", form: "gustan", tag: "plural", subject: "las películas" },
	{ es: "Le gusta el fútbol.", en: "He/She likes football.", form: "gusta", tag: "singular", subject: "el fútbol" },
	{ es: "Nos gustan los animales.", en: "We like animals.", form: "gustan", tag: "plural", subject: "los animales" },
];

export { TENGO_CONJUGATIONS, TENGO_EXAMPLES, GUSTA_CONJUGATIONS, GUSTA_EXAMPLES, GUSTA_GUSTAN };
