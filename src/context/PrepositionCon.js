const PREPOSITIONS = [
	{
		id: "para",
		label: "Para",
		short: "for / in order to",
		tag: "Future · Purpose",
		tagColor: "amber",
		summary: "Purpose · Destination · Intention · Opinion · Time deadline",
		afterPrep: [
			["Tú", "Ti"],
			["Yo", "Mí"],
		],
		uses: [
			{
				title: "Purpose / Destination / Intention",
				examples: [
					{ es: "Es para ti", en: "It's for you" },
					{ es: "Es para mí", en: "It's for me" },
					{ es: "Este libro es para ti", en: "This book is for you" },
					{ es: "Este regalo es para Praptee", en: "This gift is for Praptee" },
				],
			},
			{
				title: "Towards (direction)",
				examples: [
					{ es: "Vamos para la casa", en: "We're heading home" },
					{ es: "Ellos van para la feria", en: "They are going to the fair" },
				],
			},
			{
				title: "Expressing Opinion",
				examples: [
					{ es: "Para mí, es una buena idea", en: "For me, it's a good idea" },
				],
			},
			{
				title: "With Time Phrases (by / deadline)",
				examples: [
					{
						es: "Tienes que estar listo para las 3 de la tarde",
						en: "You have to be ready by 3 PM",
					},
				],
			},
		],
	},
	{
		id: "por",
		label: "Por",
		short: "for / because of / by",
		tag: "Past · Cause",
		tagColor: "blue",
		summary:
			"Because of · Exchange · Transport · Means · Through · Time periods",
		afterPrep: [
			["Tú", "Ti"],
			["Yo", "Mí"],
		],
		uses: [
			{
				title: "Because of / Cause",
				examples: [
					{
						es: "Eso pasó por tu culpa",
						en: "That happened because of your fault",
					},
					{ es: "Este pescado es por ti", en: "This fish is for you (cause)" },
				],
			},
			{
				title: "In Exchange For",
				examples: [
					{ es: "Cambio este por otro", en: "I exchange this one for another" },
				],
			},
			{
				title: '"By" — Transport',
				examples: [
					{ es: "Voy por avión", en: "I go by plane" },
					{
						es: "Voy a la universidad a pie",
						en: "I go to the university on foot",
					},
				],
			},
			{
				title: '"By" — Means of Communication',
				examples: [
					{ es: "Hablamos por teléfono", en: "We speak by phone" },
					{ es: "Escribo por bolígrafo", en: "I write by pen" },
				],
			},
			{
				title: "Along & Through",
				examples: [
					{
						es: "Voy para la escuela por el parque",
						en: "I go to school through the park",
					},
				],
			},
			{
				title: "Time / Periods of the Day",
				examples: [
					{ es: "Bailo por la noche", en: "I dance at night" },
					{ es: "Trabajo por la mañana", en: "I work in the morning" },
				],
			},
		],
	},
	{
		id: "en",
		label: "En",
		short: "in / on / at",
		tag: "Location · Time",
		tagColor: "green",
		summary: "Location · Time · Mode of transport (inside)",
		uses: [
			{
				title: "Location (in / at)",
				examples: [
					{ es: "Estoy en casa", en: "I am at home" },
					{ es: "El libro está en la mesa", en: "The book is on the table" },
					{ es: "Vivo en España", en: "I live in Spain" },
				],
			},
			{
				title: "Time (in / on)",
				examples: [
					{ es: "Llegamos en enero", en: "We arrive in January" },
					{ es: "Nació en 1990", en: "He was born in 1990" },
				],
			},
			{
				title: "Mode of Transport (inside / enclosed)",
				examples: [
					{ es: "Voy en coche", en: "I go by car" },
					{ es: "Viajamos en tren", en: "We travel by train" },
				],
			},
		],
	},
	{
		id: "de",
		label: "De",
		short: "of / from / about",
		tag: "Origin · Possession",
		tagColor: "rose",
		summary: "Origin · Possession · Material · Topic · Time (from)",
		uses: [
			{
				title: "Origin / From",
				examples: [
					{ es: "Soy de Bangladesh", en: "I am from Bangladesh" },
					{ es: "El vuelo es de Madrid", en: "The flight is from Madrid" },
				],
			},
			{
				title: "Possession / Belonging",
				examples: [
					{ es: "El libro de María", en: "María's book" },
					{ es: "La puerta de la casa", en: "The door of the house" },
				],
			},
			{
				title: "Material / Description",
				examples: [
					{ es: "Una mesa de madera", en: "A wooden table" },
					{ es: "Un vaso de agua", en: "A glass of water" },
				],
			},
			{
				title: "Topic / About",
				examples: [
					{ es: "Hablamos de política", en: "We talk about politics" },
				],
			},
			{
				title: "Time — From",
				examples: [
					{
						es: "Trabajo de lunes a viernes",
						en: "I work from Monday to Friday",
					},
				],
			},
		],
	},
	{
		id: "a",
		label: "A",
		short: "to / at",
		tag: "Direction · Time",
		tagColor: "violet",
		summary: "Direction · Time (at) · Personal 'a' · Distance",
		uses: [
			{
				title: "Direction / To",
				examples: [
					{ es: "Voy a la escuela", en: "I go to school" },
					{ es: "Vamos a España", en: "We go to Spain" },
					{ es: "Ella va al mercado", en: "She goes to the market" },
				],
			},
			{
				title: "Time — At",
				examples: [
					{ es: "Llego a las tres", en: "I arrive at three" },
					{ es: "La clase empieza a las nueve", en: "Class starts at nine" },
				],
			},
			{
				title: "Personal 'A' (before a person)",
				examples: [
					{ es: "Veo a María", en: "I see María" },
					{ es: "Llamo a mi madre", en: "I call my mother" },
				],
			},
			{
				title: "Distance",
				examples: [
					{ es: "Está a dos kilómetros", en: "It's two kilometres away" },
				],
			},
		],
	},
	{
		id: "con",
		label: "Con",
		short: "with",
		tag: "Company · Manner",
		tagColor: "teal",
		summary: "Company · Manner · Ingredient / Content",
		uses: [
			{
				title: "Company / Together With",
				examples: [
					{ es: "Voy con mi amigo", en: "I go with my friend" },
					{ es: "Ella come con su familia", en: "She eats with her family" },
					{ es: "Hablo contigo", en: "I speak with you" },
				],
			},
			{
				title: "Manner / How",
				examples: [
					{ es: "Lo hace con cuidado", en: "He does it with care" },
					{ es: "Habla con respeto", en: "She speaks with respect" },
				],
			},
			{
				title: "Content / Ingredient",
				examples: [
					{ es: "Un café con leche", en: "A coffee with milk" },
					{ es: "Pan con mantequilla", en: "Bread with butter" },
				],
			},
		],
	},
	{
		id: "sin",
		label: "Sin",
		short: "without",
		tag: "Absence",
		tagColor: "zinc",
		summary: "Absence of something or someone",
		uses: [
			{
				title: "Without (person / thing)",
				examples: [
					{ es: "Café sin azúcar", en: "Coffee without sugar" },
					{ es: "Salgo sin dinero", en: "I leave without money" },
					{ es: "No puedo vivir sin ti", en: "I can't live without you" },
				],
			},
			{
				title: "Without + Verb (sin + infinitive)",
				examples: [
					{
						es: "Se fue sin decir nada",
						en: "He left without saying anything",
					},
					{ es: "Comes sin pensar", en: "You eat without thinking" },
				],
			},
		],
	},
	{
		id: "sobre",
		label: "Sobre",
		short: "on / about / over",
		tag: "Surface · Topic",
		tagColor: "amber",
		summary: "On top of · Topic / About · Approximately",
		uses: [
			{
				title: "On Top of / Over",
				examples: [
					{ es: "El libro está sobre la mesa", en: "The book is on the table" },
					{
						es: "El avión vuela sobre las nubes",
						en: "The plane flies over the clouds",
					},
				],
			},
			{
				title: "About / Regarding (topic)",
				examples: [
					{ es: "Hablamos sobre el proyecto", en: "We talk about the project" },
					{
						es: "Un documental sobre la naturaleza",
						en: "A documentary about nature",
					},
				],
			},
			{
				title: "Approximately (time / quantity)",
				examples: [
					{ es: "Llego sobre las tres", en: "I'll arrive around three" },
					{
						es: "Cuesta sobre veinte euros",
						en: "It costs about twenty euros",
					},
				],
			},
		],
	},
	{
		id: "entre",
		label: "Entre",
		short: "between / among",
		tag: "Position · Shared",
		tagColor: "green",
		summary: "Between two things · Among a group · Shared action",
		uses: [
			{
				title: "Between (two things / people)",
				examples: [
					{
						es: "El banco está entre la farmacia y el parque",
						en: "The bank is between the pharmacy and the park",
					},
					{ es: "Entre tú y yo", en: "Between you and me" },
				],
			},
			{
				title: "Among (a group)",
				examples: [
					{ es: "Estaba entre la multitud", en: "He was among the crowd" },
					{ es: "Entre todos lo hicimos", en: "Among all of us, we did it" },
				],
			},
		],
	},
	{
		id: "desde",
		label: "Desde",
		short: "from / since",
		tag: "Origin · Duration",
		tagColor: "blue",
		summary: "From a place · Since a time · Duration up to now",
		uses: [
			{
				title: "From (place)",
				examples: [
					{ es: "Viajo desde Madrid", en: "I travel from Madrid" },
					{
						es: "Desde aquí puedo ver el mar",
						en: "From here I can see the sea",
					},
				],
			},
			{
				title: "Since (time)",
				examples: [
					{
						es: "Estudio español desde enero",
						en: "I have been studying Spanish since January",
					},
					{ es: "Vivo aquí desde 2020", en: "I have lived here since 2020" },
				],
			},
			{
				title: "Desde … Hasta (From … To)",
				examples: [
					{ es: "Trabajo desde las 9 hasta las 5", en: "I work from 9 to 5" },
					{ es: "Desde lunes hasta viernes", en: "From Monday to Friday" },
				],
			},
		],
	},
	{
		id: "hasta",
		label: "Hasta",
		short: "until / up to",
		tag: "Limit · End point",
		tagColor: "rose",
		summary: "Until a time · Up to a place · Farewell expressions",
		uses: [
			{
				title: "Until (time)",
				examples: [
					{ es: "Estudio hasta las diez", en: "I study until ten" },
					{ es: "Espera hasta mañana", en: "Wait until tomorrow" },
				],
			},
			{
				title: "Up To / As Far As (place)",
				examples: [
					{ es: "Caminé hasta la plaza", en: "I walked as far as the square" },
					{
						es: "El tren va hasta Barcelona",
						en: "The train goes as far as Barcelona",
					},
				],
			},
			{
				title: "Farewell Expressions",
				examples: [
					{ es: "¡Hasta luego!", en: "See you later!" },
					{ es: "¡Hasta mañana!", en: "See you tomorrow!" },
					{ es: "¡Hasta pronto!", en: "See you soon!" },
				],
			},
		],
	},
];

export default PREPOSITIONS;
