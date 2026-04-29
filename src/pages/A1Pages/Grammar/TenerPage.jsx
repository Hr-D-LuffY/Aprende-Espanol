import { useState } from "react";
import {
	ConjRow,
	ExampleRow,
	Eyebrow,
	Card,
	UsePill,
	PageWrapper,
	BackNav,
	ConjugationNote,
} from "../../../components/VerbComponents";

const CONJUGATIONS = [
	{ pronoun: "yo", form: "tengo", highlight: true },
	{ pronoun: "nosotros", form: "tenemos", highlight: false },
	{ pronoun: "tú", form: "tienes", highlight: false },
	{ pronoun: "vosotros", form: "tenéis", highlight: false },
	{ pronoun: "él / ella", form: "tiene", highlight: false },
	{ pronoun: "ellos / ellas", form: "tienen", highlight: false },
];

const USES = ["Possession", "Age", "Relationships", "Things"];

const EXAMPLES = [
	{ es: "Yo tengo un coche nuevo.", en: "I have a new car." },
	{ es: "Yo tengo un sueño.", en: "I have a dream." },
	{ es: "Tú tienes un coche.", en: "You have a car." },
	{ es: "¿Tienes dinero?", en: "Do you have money?" },
	{ es: "¿Cuánto dinero tienes?", en: "How much money do you have?" },
	{ es: "Él tiene un coche.", en: "He has a car." },
	{ es: "Pablo tiene novia.", en: "Pablo has a girlfriend." },
	{ es: "Nosotros tenemos la casa.", en: "We have a house." },
	{ es: "Vosotros tenéis el perro.", en: "You all have the dog." },
	{ es: "Ellos tienen el gato.", en: "They have the cat." },
	{ es: "¿Cuántos años tienes?", en: "How old are you?" },
	{ es: "Tengo 20 años.", en: "I am 20 years old." },
];

export default function TenerPage() {
	const [activeEx, setActiveEx] = useState(null);

	return (
		<PageWrapper>
			<BackNav to="/" label="← verbs" />

			{/* Header */}
			<div className="mb-12">
				<Eyebrow>Verb · Irregular · GO verb</Eyebrow>
				<div className="flex items-baseline gap-4 mb-3">
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[#fafafa]">
						tener
					</h1>
					<span className="text-[16px] text-[#52525b] font-light">to have</span>
				</div>
				<div className="flex flex-wrap gap-2 mt-4">
					{USES.map((u) => (
						<UsePill key={u}>{u}</UsePill>
					))}
				</div>
			</div>

			{/* What is conjugation */}
			<Card className="mb-6 p-6">
				<Eyebrow>What is conjugation?</Eyebrow>
				<p className="text-[12px] text-[#52525b] leading-relaxed mb-5 tracking-wide max-w-lg">
					Conjugation = changing a verb's form depending on the subject (who
					does the action). In Spanish, the verb changes more than in English.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
					<div>
						<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
							English
						</p>
						<ConjugationNote subject="I" verb="speak" />
						<ConjugationNote subject="He" verb="speaks" note="← changes" />
					</div>
					<div>
						<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
							Spanish
						</p>
						<ConjugationNote subject="yo" verb="hablo" />
						<ConjugationNote subject="él" verb="habla" note="← changes more" />
					</div>
				</div>
				<div className="mt-4 pt-4 border-t border-[#1c1c1f]">
					<p className="text-[11px] text-[#3f3f46] tracking-wide">
						This change = <span className="text-[#f59e0b]">conjugation</span>
					</p>
				</div>
			</Card>

			{/* Main grid */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
				{/* Conjugation table */}
				<div>
					<Card>
						<div className="px-4 pt-5 pb-2">
							<Eyebrow>Conjugation table</Eyebrow>
						</div>
						{CONJUGATIONS.map((c) => (
							<ConjRow key={c.pronoun} {...c} />
						))}
						<div className="px-4 py-3">
							<p className="text-[10px] text-[#27272a] tracking-wide">
								⚡ yo form is irregular: tengo (not teno)
							</p>
						</div>
					</Card>
				</div>

				{/* Examples */}
				<div>
					<Card>
						<div className="px-5 pt-5 pb-2">
							<Eyebrow>Examples</Eyebrow>
						</div>
						<div className="px-5 pb-4">
							{EXAMPLES.map((ex, i) => (
								<div
									key={i}
									onClick={() => setActiveEx(activeEx === i ? null : i)}
									className={`py-3 border-b border-[#1c1c1f] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                                        ${activeEx === i ? "bg-[#f59e0b]/5 px-2 -mx-2" : "hover:bg-[#111113]"}`}
								>
									<p
										className={`text-[13px] tracking-[-0.01em] mb-0.5 transition-colors
                                        ${activeEx === i ? "text-[#f59e0b]" : "text-[#fafafa]"}`}
									>
										{ex.es}
									</p>
									<p
										className={`text-[11px] tracking-wide transition-all duration-150
                                        ${activeEx === i ? "text-[#52525b] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
									>
										{ex.en}
									</p>
								</div>
							))}
							<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
								tap a sentence to reveal translation
							</p>
						</div>
					</Card>
				</div>
			</div>

			{/* Age pattern highlight */}
			<Card className="mt-6 p-6">
				<Eyebrow>Special pattern · Age</Eyebrow>
				<p className="text-[12px] text-[#52525b] leading-relaxed mb-4 tracking-wide">
					In Spanish, age uses <span className="text-[#fafafa]">tener</span> —
					not "to be".
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="border border-[#1c1c1f] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
							English
						</p>
						<p className="text-[13px] text-[#a1a1aa]">
							I <span className="text-[#52525b] line-through">am</span> 20 years
							old
						</p>
					</div>
					<div className="border border-[#f59e0b]/30 rounded-lg p-4 bg-[#f59e0b]/5">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
							Spanish
						</p>
						<p className="text-[13px] text-[#fafafa]">
							Tengo <span className="text-[#f59e0b]">20 años</span>
						</p>
					</div>
				</div>
			</Card>
		</PageWrapper>
	);
}
