import {
	ConjRow,
	CriteriaBlock,
	VocabGrid,
	SectionHeading,
	RuleBanner,
} from "../../../components/VerbShared";
import BackNext from "../../../components/BackNext";

const CONJUGATIONS = [
	{ pronoun: "Yo", form: "Soy", meaning: "I am" },
	{ pronoun: "Tú", form: "Eres", meaning: "You are" },
	{ pronoun: "Él / Ella", form: "Es", meaning: "He / She is" },
	{ pronoun: "Nosotros", form: "Somos", meaning: "We are" },
	{ pronoun: "Vosotros", form: "Sois", meaning: "You all are" },
	{ pronoun: "Ellos", form: "Son", meaning: "They are" },
];

const CRITERIA = [
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

const VOCAB = [
	{ es: "Tío", en: "Uncle" },
	{ es: "Tía", en: "Aunt" },
	{ es: "Abuelo", en: "Grandfather" },
	{ es: "Abuela", en: "Grandmother" },
	{ es: "Bien", en: "Good (N/Adv)" },
	{ es: "Bueno", en: "Good (Adj)" },
	{ es: "Malo", en: "Bad" },
];

export default function SerPage() {
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
							SER
						</h1>
						<span className="text-[13px] text-[#52525b]">
							permanent / identity
						</span>
					</div>
					<p className="text-[11px] text-[#3f3f46] tracking-[0.1em] uppercase">
						Negation → <span className="text-[#52525b]">NO + verb</span>{" "}
						&nbsp;·&nbsp; e.g. No soy → I am not
					</p>
				</div>

				{/* Rule */}
				<div className="mb-12">
					<RuleBanner
						rule="SER = WHAT something IS"
						note="Use SER for things that are permanent or defining — identity, origin, time, occupation."
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

				{/* DOCTOR */}
				<div className="mb-14">
					<div className="flex items-baseline gap-3 mb-6">
						<SectionHeading>Criteria</SectionHeading>
					</div>
					<div className="border border-[#1c1c1f] rounded-xl px-5 py-3 bg-[#111113] mb-6 inline-flex items-center gap-3">
						<span className="text-[11px] tracking-[0.14em] uppercase text-[#3f3f46]">
							mnemonic
						</span>
						{"DOCTOR".split("").map((l, i) => (
							<span
								key={i}
								className="text-[18px] font-semibold text-[#f59e0b] tracking-[0.12em]"
							>
								{l}
							</span>
						))}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
					back="/a1/grammar/possessive-adjectives"
					next="/a1/grammar/estar"
					backLabel="Possessive Adjectives"
					nextLabel="Estar Verb"
				/>
			</div>
		</div>
	);
}
