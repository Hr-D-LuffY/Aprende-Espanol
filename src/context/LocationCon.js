const PHRASES = [
	{ es: "¿De dónde eres?", en: "Where are you from?" },
	{ es: "¿Dónde está Messi?", en: "Where is Messi?" },
	{ es: "Messi está en la casa", en: "Messi is in the house" },
	{ es: "Mi cuaderno está aquí", en: "My notebook is here" },
	{ es: "Mi cuaderno está allí", en: "My notebook is there" },
	{
		es: "Bangladesh está en el sur de la India",
		en: "Bangladesh is in the south of India",
	},
];

const PLACES = [
	{ es: "Estación", en: "Station" },
	{ es: "Restaurante", en: "Restaurant" },
	{ es: "Hospital", en: "Hospital" },
	{ es: "Biblioteca", en: "Library" },
	{ es: "Aeropuerto", en: "Airport" },
	{ es: "Supermercado", en: "Supermarket" },
	{ es: "Iglesia", en: "Church" },
	{ es: "Parada de autobús", en: "Bus stop" },
	{ es: "Hotel", en: "Hotel" },
	{ es: "Cafetería", en: "Café" },
	{ es: "Farmacia", en: "Pharmacy" },
	{ es: "Mercado", en: "Market" },
	{ es: "Banco", en: "Bank" },
	{ es: "Parque", en: "Park" },
	{ es: "Escuela", en: "School" },
	{ es: "Correos", en: "Post office" },
];

const VOCAB = [
	{ word: "Derecha", trans: "Right" },
	{ word: "Izquierda", trans: "Left" },
	{ word: "Enfrente / Delante de", trans: "In front of" },
	{ word: "Detrás de", trans: "Behind" },
	{ word: "Arriba de", trans: "Above / Over" },
	{ word: "Abajo de", trans: "Under / Below" },
	{ word: "Cerca de", trans: "Near" },
	{ word: "Lejos de", trans: "Far from" },
	{ word: "Dentro de", trans: "Inside" },
	{ word: "Fuera de", trans: "Outside" },
	{ word: "Al lado de", trans: "Beside / Next to" },
	{ word: "Entre", trans: "Between" },
	{ word: "Alrededor de", trans: "Around" },
	{ word: "En medio de", trans: "In the middle of" },
	{ word: "En", trans: "In / On" },
	{ word: "A", trans: "To" },
	{ word: "Calle", trans: "Road / Street" },
	{ word: "Mochila", trans: "Bag" },
	{ word: "Pájaro", trans: "Bird" },
	{ word: "Jubilado", trans: "Retired person" },
	{ word: "Quien", trans: "Who" },
	{ word: "Donde", trans: "Where" },
	{ word: "Que", trans: "What" },
	{ word: "Mujer", trans: "Wife" },
	{ word: "Aquí", trans: "Here" },
	{ word: "Allí", trans: "There" },
];

const DIRECTIONS = [
	{ es: "El norte", en: "North" },
	{ es: "El sur", en: "South" },
	{ es: "El este", en: "East" },
	{ es: "El oeste", en: "West" },
];

const PLACE_SENTENCES = {
	Estación: {
		es: "La estación está cerca del hotel.",
		en: "The station is near the hotel.",
	},
	Restaurante: {
		es: "El restaurante está al lado del banco.",
		en: "The restaurant is next to the bank.",
	},
	Hospital: {
		es: "El hospital está lejos de aquí.",
		en: "The hospital is far from here.",
	},
	Biblioteca: {
		es: "La biblioteca está enfrente del parque.",
		en: "The library is in front of the park.",
	},
	Aeropuerto: {
		es: "El aeropuerto está en el norte de la ciudad.",
		en: "The airport is in the north of the city.",
	},
	Supermercado: {
		es: "El supermercado está detrás del banco.",
		en: "The supermarket is behind the bank.",
	},
	Iglesia: {
		es: "La iglesia está en el centro.",
		en: "The church is in the center.",
	},
	"Parada de autobús": {
		es: "La parada está a la derecha.",
		en: "The bus stop is on the right.",
	},
	Hotel: {
		es: "El hotel está cerca de la estación.",
		en: "The hotel is near the station.",
	},
	Cafetería: {
		es: "La cafetería está entre el banco y el parque.",
		en: "The café is between the bank and the park.",
	},
	Farmacia: {
		es: "La farmacia está a la izquierda del hospital.",
		en: "The pharmacy is to the left of the hospital.",
	},
	Mercado: {
		es: "El mercado está en el centro de la ciudad.",
		en: "The market is in the city center.",
	},
	Banco: {
		es: "El banco está al lado de la iglesia.",
		en: "The bank is next to the church.",
	},
	Parque: {
		es: "El parque está enfrente de la biblioteca.",
		en: "The park is in front of the library.",
	},
	Escuela: {
		es: "La escuela está lejos del aeropuerto.",
		en: "The school is far from the airport.",
	},
	Correos: {
		es: "Correos está dentro del edificio.",
		en: "The post office is inside the building.",
	},
};

const PREPS = [
	{
		tag: "A la derecha de",
		meaning: "to the right of",
		es: "El coche está a la derecha del árbol",
		en: "right of",
		pos: "right",
	},
	{
		tag: "A la izquierda de",
		meaning: "to the left of",
		es: "El coche está a la izquierda de la casa",
		en: "left of",
		pos: "left",
	},
	{
		tag: "Entre",
		meaning: "between",
		es: "El coche está entre el árbol y la casa",
		en: "between",
		pos: "between",
	},
	{
		tag: "Enfrente de",
		meaning: "in front of",
		es: "El coche está enfrente de la casa",
		en: "in front of",
		pos: "front",
	},
	{
		tag: "Arriba de",
		meaning: "above / over",
		es: "El pájaro está arriba del árbol",
		en: "above",
		pos: "above",
	},
	{
		tag: "Abajo de",
		meaning: "under / below",
		es: "El fútbol está abajo del árbol",
		en: "under",
		pos: "below",
	},
	{
		tag: "Cerca de",
		meaning: "near",
		es: "Mi casa está cerca del árbol",
		en: "near",
		pos: "near",
	},
	{
		tag: "Lejos de",
		meaning: "far from",
		es: "Mi casa está lejos del árbol",
		en: "far from",
		pos: "far",
	},
	{
		tag: "Al lado de",
		meaning: "beside / next to",
		es: "La regla está al lado del lápiz",
		en: "beside",
		pos: "beside",
	},
	{
		tag: "Dentro de",
		meaning: "inside",
		es: "Los zapatos están dentro de la caja",
		en: "inside",
		pos: "inside",
	},
	{
		tag: "Detrás de",
		meaning: "behind",
		es: "El coche está detrás de la casa",
		en: "behind",
		pos: "behind",
	},
	{
		tag: "Alrededor de",
		meaning: "around",
		es: "El coche está alrededor de la casa",
		en: "around",
		pos: "around",
	},
];

const GRAMMAR_NOTES = [
	{
		tag: "Rule",
		rule: [
			{ text: "De + el = Del", strong: true },
			{ text: ' — Never write "de el". Example: ' },
			{ text: "a la derecha del árbol", strong: true },
			{ text: " (to the right of the tree)." },
		],
	},
	{
		tag: "Ser vs Estar",
		rule: [
			{ text: "Location always uses " },
			{ text: "estar", strong: true },
			{ text: ", never ser. " },
			{ text: "¿Dónde estás?", strong: true },
			{ text: " Use ser for origin: " },
			{ text: "¿De dónde eres?", strong: true },
		],
	},
	{
		tag: "Questions",
		rule: [
			{ text: "¿Dónde está?", strong: true },
			{ text: " = Where is something? " },
			{ text: "¿De dónde eres?", strong: true },
			{ text: " = Where are you from? Accent on dónde always required." },
		],
	},
];

export {
	PHRASES,
	PLACES,
	VOCAB,
	DIRECTIONS,
	PLACE_SENTENCES,
	PREPS,
	GRAMMAR_NOTES,
};
