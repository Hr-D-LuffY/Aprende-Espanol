const RULES = [
	{
		id: "rule1",
		label: "Rule 1",
		pattern: "vowel + S",
		title: "Nouns ending in a vowel → add -S",
		desc: "Most Spanish nouns end in a vowel. Simply append -s to form the plural.",
		pairs: [
			{ from: "libro", to: "libros" },
			{ from: "casa", to: "casas" },
			{ from: "pollo", to: "pollos" },
			{ from: "chica", to: "chicas" },
			{ from: "mesa", to: "mesas" },
			{ from: "amigo", to: "amigos" },
		],
		note: null,
	},
	{
		id: "rule2",
		label: "Rule 2",
		pattern: "consonant + ES",
		title: "Nouns ending in a consonant → add -ES",
		desc: "When a noun ends in any consonant (other than Z), add -es to form the plural.",
		pairs: [
			{ from: "árbol", to: "árboles" },
			{ from: "doctor", to: "doctores" },
			{ from: "animal", to: "animales" },
			{ from: "hotel", to: "hoteles" },
			{ from: "ciudad", to: "ciudades" },
			{ from: "papel", to: "papeles" },
		],
		note: "Nouns ending in -s or -x with an unstressed final syllable don't change: el lunes → los lunes.",
	},
	{
		id: "rule3",
		label: "Rule 3",
		pattern: "Z → CES",
		title: "Nouns ending in -Z → change to -CES",
		desc: "The Z softens to C before the plural ending -es. The spelling changes but the sound is consistent.",
		pairs: [
			{ from: "luz", to: "luces" },
			{ from: "pez", to: "peces" },
			{ from: "voz", to: "voces" },
			{ from: "nariz", to: "narices" },
			{ from: "vez", to: "veces" },
			{ from: "cruz", to: "cruces" },
		],
		note: "The accent mark is sometimes added or dropped when the stress pattern shifts: lápiz → lápices.",
	},
];

export default RULES;
