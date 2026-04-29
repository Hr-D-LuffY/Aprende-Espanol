import {
	ConjRow,
	CriteriaBlock,
	VocabGrid,
	SectionHeading,
	RuleBanner,
} from "../../../components/VerbShared";
import BackNext from "../../../components/BackNext";

const CONJUGATIONS = [
	{ pronoun: "Yo", form: "Estoy", meaning: "I am" },
	{ pronoun: "Tú", form: "Estás", meaning: "You are" },
	{ pronoun: "Él / Ella", form: "Está", meaning: "He / She is" },
	{ pronoun: "Nosotros", form: "Estamos", meaning: "We are" },
	{ pronoun: "Vosotros", form: "Estáis", meaning: "You all are" },
	{ pronoun: "Ellos", form: "Están", meaning: "They are" },
];

const CRITERIA = [
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

const VOCAB = [
	{ es: "Puerta", en: "Gate / Door" },
	{ es: "Ventana", en: "Window" },
	{ es: "Llave", en: "Key" },
	{ es: "Mesa", en: "Table" },
	{ es: "Abierto/a", en: "Open" },
	{ es: "Cerrado/a", en: "Closed" },
	{ es: "Casado/a", en: "Married" },
	{ es: "Soltero/a", en: "Bachelor" },
	{ es: "Divorciado/a", en: "Divorced" },
	{ es: "Marido", en: "Husband" },
	{ es: "Esposa", en: "Wife" },
	{ es: "Loco/a", en: "Mad / Crazy" },
	{ es: "Pero", en: "But" },
	{ es: "Contenta", en: "Happy" },
	{ es: "Triste", en: "Sad" },
	{ es: "Cansado", en: "Tired" },
	{ es: "Enfermo", en: "Sick" },
	{ es: "Calmado", en: "Relaxed" },
	{ es: "Enojado", en: "Angry" },
	{ es: "Emocionado", en: "Excited" },
];

export default function EstarPage() {
	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-6 pt-20 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[10px] tracking-[0.18em] uppercase text-[#3f3f46] mb-3">
						Grammar · To Be
					</p>
					<div className="flex items-baseline gap-4 mb-3">
						<h1 className="text-7xl font-light tracking-[-0.05em] text-[#fafafa]">
							ESTAR
						</h1>
						<span className="text-[13px] text-[#52525b]">
							temporary / state
						</span>
					</div>
					<p className="text-[11px] text-[#3f3f46] tracking-[0.1em] uppercase">
						Negation → <span className="text-[#52525b]">NO + verb</span>{" "}
						&nbsp;·&nbsp; Verb+ing also uses ESTAR
					</p>
				</div>

				{/* Rule */}
				<div className="mb-12">
					<RuleBanner
						rule="ESTAR = HOW something IS / WHERE it is"
						note="Use ESTAR for temporary states, conditions, emotions, and locations. Also for progressive (-ing) forms."
					/>
				</div>

				{/* Conjugation */}
				<div className="mb-14">
					<SectionHeading>Conjugation</SectionHeading>
					<div className="border border-[#1c1c1f] rounded-xl overflow-hidden bg-[#111113] px-6">
						{CONJUGATIONS.map((c) => (
							<ConjRow key={c.pronoun} {...c} />
						))}
					</div>
				</div>

				{/* Criteria */}
				<div className="mb-14">
					<SectionHeading>Criteria</SectionHeading>
					<div className="flex flex-col gap-3">
						{CRITERIA.map((c) => (
							<CriteriaBlock key={c.title} {...c} />
						))}
					</div>
				</div>

				{/* Vocabulary */}
				<div>
					<SectionHeading>Vocabulary</SectionHeading>
					<VocabGrid items={VOCAB} />
				</div>
				{/* Back & Next link */}
				<BackNext
					back="/a1/grammar/ser"
					next="/a1/grammar/tener"
					backLabel="Ser Verb"
					nextLabel="Tener Verb"
				/>
			</div>
		</div>
	);
}
