import { useState } from "react";
import {
	ConjRow,
	Eyebrow,
	Card,
	UsePill,
	PageWrapper,
	BackNav,
} from "../../../components/VerbComponents";
import BackNext from "../../../components/BackNext";

const CONJUGATIONS = [
	{ pronoun: "me (yo)", form: "me gusta", highlight: false },
	{ pronoun: "nos (nosotros)", form: "nos gusta", highlight: false },
	{ pronoun: "te (tú)", form: "te gusta", highlight: false },
	{ pronoun: "os (vosotros)", form: "os gusta", highlight: false },
	{ pronoun: "le (él/ella)", form: "le gusta", highlight: true },
	{ pronoun: "les (ellos)", form: "les gusta", highlight: false },
];

const EXAMPLES = [
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
	{
		es: "Me gusta el libro.",
		en: "I like the book.",
		form: "gusta",
		tag: "singular",
	},
	{
		es: "Me gustan los libros.",
		en: "I like books.",
		form: "gustan",
		tag: "plural",
	},
	{
		es: "Me gustan las manzanas.",
		en: "I like apples.",
		form: "gustan",
		tag: "plural",
	},
	{
		es: "Les gustan las manzanas.",
		en: "They like apples.",
		form: "gustan",
		tag: "plural",
	},
];

export default function GustrarPage() {
	const [activeEx, setActiveEx] = useState(null);

	return (
		<PageWrapper>
			<BackNav to="/" label="← verbs" />

			{/* Header */}
			<div className="mb-12">
				<Eyebrow>Verb · Indirect object · Reverse structure</Eyebrow>
				<div className="flex items-baseline gap-4 mb-3">
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
						gustar
					</h1>
					<span className="text-[16px] text-[var(--text-muted)] font-light">
						to like
					</span>
				</div>
				<div className="flex flex-wrap gap-2 mt-4">
					{["Preferences", "Likes", "Activities", "Things"].map((u) => (
						<UsePill key={u}>{u}</UsePill>
					))}
				</div>
			</div>

			{/* How gustar works — key concept */}
			<Card className="mb-6 p-6">
				<Eyebrow>How gustar works — it's reversed</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-5 tracking-wide max-w-lg">
					Unlike English "I like X", gustar flips the sentence. The thing you
					like is the subject. The person is the indirect object.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="border border-[var(--border)] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
							English
						</p>
						<div className="flex items-center gap-2 text-[12px]">
							<span className="text-[var(--accent)] border border-[#f59e0b]/30 px-2 py-0.5 rounded">
								I
							</span>
							<span className="text-[var(--text-muted)]">like</span>
							<span className="text-[var(--text-secondary)] border border-[var(--border)] px-2 py-0.5 rounded">
								the book
							</span>
						</div>
					</div>
					<div className="border border-[#f59e0b]/30 rounded-lg p-4 bg-[var(--accent)]/5">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
							Spanish
						</p>
						<div className="flex items-center gap-2 text-[12px]">
							<span className="text-[var(--text-secondary)] border border-[var(--border)] px-2 py-0.5 rounded">
								Me
							</span>
							<span className="text-[var(--text-muted)]">gusta</span>
							<span className="text-[var(--accent)] border border-[#f59e0b]/30 px-2 py-0.5 rounded">
								el libro
							</span>
						</div>
					</div>
				</div>
				<div className="mt-4 pt-4 border-t border-[var(--border)]">
					<p className="text-[11px] text-[var(--text-label)] tracking-wide">
						⚡ 3rd person: always add{" "}
						<span className="text-[var(--accent)]">A</span> before the
						name/pronoun —{" "}
						<span className="text-[var(--text-secondary)]">
							A él le gusta · A Priota le gusta
						</span>
					</p>
				</div>
			</Card>

			{/* Main grid */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
				{/* Conjugation */}
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
								gusta → singular · gustan → plural
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
									className={`py-3 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                                        ${activeEx === i ? "bg-[var(--accent)]/5 px-2 -mx-2" : "hover:bg-[var(--surface)]"}`}
								>
									<p
										className={`text-[13px] tracking-[-0.01em] mb-0.5 transition-colors
                                        ${activeEx === i ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
									>
										{ex.es}
									</p>
									<p
										className={`text-[11px] tracking-wide transition-all duration-150
                                        ${activeEx === i ? "text-[var(--text-muted)] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
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

			{/* Gusta vs Gustan */}
			<Card className="mt-6 p-6">
				<Eyebrow>Gusta vs Gustan</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-5 tracking-wide max-w-lg">
					The form depends on the{" "}
					<span className="text-[var(--text-primary)]">thing you like</span> —
					not the person. Singular thing →{" "}
					<span className="text-[var(--accent)]">gusta</span>. Plural things →{" "}
					<span className="text-[var(--accent)]">gustan</span>.
				</p>
				<div className="space-y-0">
					{GUSTA_GUSTAN.map((row, i) => (
						<div
							key={i}
							className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-0"
						>
							<div>
								<p className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em]">
									{row.es}
								</p>
								<p className="text-[11px] text-[var(--text-label)] tracking-wide mt-0.5">
									{row.en}
								</p>
							</div>
							<div className="flex items-center gap-2">
								<span
									className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border tracking-wide
                                        ${
																					row.tag === "singular" ?
																						"border-[#f59e0b]/30 text-[var(--accent)] bg-[var(--accent)]/5"
																					:	"border-[#27272a] text-[var(--text-muted)]"
																				}`}
								>
									{row.form}
								</span>
								<span className="text-[10px] text-[#27272a] tracking-wide hidden sm:inline">
									{row.tag}
								</span>
							</div>
						</div>
					))}
				</div>
			</Card>
			{/* Back & Next link */}
			<BackNext
				back="/a1/grammar/tener"
				next="/a1/grammar/question-words"
				backLabel="Tener Verb"
				nextLabel="Question Words"
			/>
		</PageWrapper>
	);
}
