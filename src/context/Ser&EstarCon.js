const SER_CONJUGATIONS = [
    { pronoun: "Yo", form: "Soy", meaning: "I am" },
    { pronoun: "Tú", form: "Eres", meaning: "You are" },
    { pronoun: "Él / Ella", form: "Es", meaning: "He / She is" },
    { pronoun: "Nosotros", form: "Somos", meaning: "We are" },
    { pronoun: "Vosotros", form: "Sois", meaning: "You all are" },
    { pronoun: "Ellos", form: "Son", meaning: "They are" },
];

const SER_CRITERIA = [
    {
        title: "D — Description",
        examples: [{ en: "The book is not red", es: "El libro no es rojo" }],
    },
    {
        title: "O — Occupation",
        examples: [{ en: "I am a student", es: "Soy estudiante" }],
    },
    {
        title: "C — Characteristic",
        examples: [{ en: "I am good", es: "Soy bien" }],
    },
    {
        title: "T — Time",
        examples: [{ en: "It is one o'clock", es: "Es la una" }],
    },
    {
        title: "O — Origin",
        examples: [{ en: "I am Bangladeshi", es: "Soy Bangladeshi" }],
    },
    {
        title: "R — Relation",
        examples: [{ en: "He's my brother", es: "Él es mi hermano" }],
    },
];

const ESTAR_CONJUGATIONS = [
    { pronoun: "Yo", form: "Estoy", meaning: "I am" },
    { pronoun: "Tú", form: "Estás", meaning: "You are" },
    { pronoun: "Él / Ella", form: "Está", meaning: "He / She is" },
    { pronoun: "Nosotros", form: "Estamos", meaning: "We are" },
    { pronoun: "Vosotros", form: "Estáis", meaning: "You all are" },
    { pronoun: "Ellos", form: "Están", meaning: "They are" },
];

const ESTAR_CRITERIA = [
    {
        title: "Mental / Physical State",
        examples: [
            { en: "How are you?", es: "¿Cómo estás?" },
            { en: "I am fine", es: "Estoy bien" },
            { en: "I am tired", es: "Estoy cansado" },
            { en: "I am happy", es: "Estoy contenta" },
            { en: "My sister is fine", es: "Mi hermana está bien" },
        ],
    },
    {
        title: "Condition / Location",
        examples: [
            { en: "The gate is open", es: "La puerta está abierta" },
            { en: "The gate is closed", es: "La puerta está cerrada" },
            { en: "He is mad", es: "Él está loco" },
            { en: "My key is on the table", es: "Mi llave está en la mesa" },
        ],
    },
    {
        title: "Mixed Example",
        examples: [
            {
                en: "I am bachelor but my brother is married",
                es: "Estoy soltero pero mi hermano es casado",
            },
        ],
    },
];

export { SER_CONJUGATIONS, SER_CRITERIA, ESTAR_CONJUGATIONS, ESTAR_CRITERIA };