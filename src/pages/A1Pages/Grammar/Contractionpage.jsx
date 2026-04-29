import { useState } from "react";
import {
	Eyebrow,
	Card,
	UsePill,
	PageWrapper,
	BackNav,
} from "../../../components/VerbComponents";
import BackNext from "../../../components/BackNext";
// ── Local reusable components ──

function MergeVisual({ parts, result, blocked }) {
	return (
		<div className="flex items-center gap-2">
			<div className="flex items-center gap-1">
				{parts.map((p, i) => (
					<span
						key={i}
						className={`text-[13px] font-semibold px-2.5 py-1 rounded border
                            ${
															p.accent ?
																"text-[var(--accent)] border-[#f59e0b]/30 bg-[var(--accent)]/5"
															:	"text-[var(--text-secondary)] border-[var(--border)]"
														}`}
					>
						{p.word}
					</span>
				))}
			</div>
			<span className="text-[#27272a] text-sm">→</span>
			{blocked ?
				<span className="text-[12px] text-[var(--text-muted)] border border-[var(--border)] px-2.5 py-1 rounded line-through">
					{result}
				</span>
			:	<span className="text-[13px] font-semibold text-[var(--accent)] border border-[#f59e0b]/30 bg-[var(--accent)]/5 px-2.5 py-1 rounded">
					{result}
				</span>
			}
		</div>
	);
}

function ExPair({ es, en }) {
	const [shown, setShown] = useState(false);
	return (
		<div
			onClick={() => setShown((s) => !s)}
			className={`py-3 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                ${shown ? "bg-[var(--accent)]/5 px-2 -mx-2" : "hover:bg-[var(--surface)]"}`}
		>
			<p
				className={`text-[13px] tracking-[-0.01em] transition-colors ${shown ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
			>
				{es}
			</p>
			<p
				className={`text-[11px] tracking-wide transition-all duration-150
                ${shown ? "text-[var(--text-muted)] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
			>
				{en}
			</p>
		</div>
	);
}

// ── Data ──

const AL_EXAMPLES = [
	{ es: "Voy al mercado.", en: "I go to the market." },
	{ es: "Ella va al colegio.", en: "She goes to school." },
	{ es: "Vamos al parque.", en: "We go to the park." },
	{ es: "¿Vas al trabajo?", en: "Are you going to work?" },
	{ es: "El gato va al jardín.", en: "The cat goes to the garden." },
	{ es: "Voy al banco mañana.", en: "I'm going to the bank tomorrow." },
];

const DEL_EXAMPLES = [
	{
		es: "El coche del profesor.",
		en: "The teacher's car. (the car of the teacher)",
	},
	{ es: "La casa del pueblo.", en: "The village house." },
	{ es: "El nombre del perro.", en: "The dog's name." },
	{ es: "La llave del coche.", en: "The car key." },
	{ es: "El precio del libro.", en: "The price of the book." },
	{ es: "El color del gato.", en: "The cat's color." },
];

const NO_CONTRACTION = [
	{
		rule: "a + él (pronoun) → a él",
		example: "Voy a él. (not: al)",
		note: "él here is a pronoun, not the article el",
	},
	{
		rule: "de + él (pronoun) → de él",
		example: "El libro es de él.",
		note: "él here is a pronoun, not the article el",
	},
];

export default function ContractionPage() {
	return (
		<PageWrapper>
			<BackNav to="/" label="← grammar" />

			{/* Header */}
			<div className="mb-12">
				<Eyebrow>Grammar · Contractions · Mandatory rules</Eyebrow>
				<div className="flex items-baseline gap-4 mb-3">
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
						al · del
					</h1>
					<span className="text-[16px] text-[var(--text-muted)] font-light">
						contractions
					</span>
				</div>
				<div className="flex flex-wrap gap-2 mt-4">
					{["a + el", "de + el", "mandatory", "articles"].map((u) => (
						<UsePill key={u}>{u}</UsePill>
					))}
				</div>
			</div>

			{/* Concept card */}
			<Card className="mb-6 p-6">
				<Eyebrow>What are they?</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-6 tracking-wide max-w-lg">
					When the prepositions{" "}
					<span className="text-[var(--text-primary)]">a</span> (to) or{" "}
					<span className="text-[var(--text-primary)]">de</span> (of/from) meet
					the masculine article{" "}
					<span className="text-[var(--text-primary)]">el</span>, they always
					merge. This is not optional — it's a hard rule.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-4">
							AL — direction / to
						</p>
						<div className="space-y-3">
							<MergeVisual
								parts={[
									{ word: "a" },
									{ word: "+" },
									{ word: "el", accent: true },
								]}
								result="al"
							/>
							<p className="text-[11px] text-[var(--text-label)] tracking-wide pl-1">
								Voy <span className="text-[var(--accent)]">al</span> mercado. →
								I go to the market.
							</p>
						</div>
					</div>
					<div>
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-4">
							DEL — possession / of
						</p>
						<div className="space-y-3">
							<MergeVisual
								parts={[
									{ word: "de" },
									{ word: "+" },
									{ word: "el", accent: true },
								]}
								result="del"
							/>
							<p className="text-[11px] text-[var(--text-label)] tracking-wide pl-1">
								La casa <span className="text-[var(--accent)]">del</span>{" "}
								pueblo. → The village house.
							</p>
						</div>
					</div>
				</div>
			</Card>

			{/* Examples grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Card>
					<div className="px-5 pt-5 pb-2">
						<Eyebrow>AL — examples</Eyebrow>
						<p className="text-[11px] text-[var(--text-muted)] tracking-wide mb-3">
							used with movement / direction verbs: ir, volver, llegar...
						</p>
					</div>
					<div className="px-5 pb-4">
						{AL_EXAMPLES.map((ex, i) => (
							<ExPair key={i} {...ex} />
						))}
						<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
							tap to reveal
						</p>
					</div>
				</Card>

				<Card>
					<div className="px-5 pt-5 pb-2">
						<Eyebrow>DEL — examples</Eyebrow>
						<p className="text-[11px] text-[var(--text-muted)] tracking-wide mb-3">
							used for possession, origin, or belonging
						</p>
					</div>
					<div className="px-5 pb-4">
						{DEL_EXAMPLES.map((ex, i) => (
							<ExPair key={i} {...ex} />
						))}
						<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
							tap to reveal
						</p>
					</div>
				</Card>
			</div>

			{/* Exception card */}
			<Card className="mt-6 p-6">
				<Eyebrow>Exception — when NOT to contract</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-5 tracking-wide max-w-lg">
					Only the{" "}
					<span className="text-[var(--text-primary)]">article el</span>{" "}
					contracts. The pronoun{" "}
					<span className="text-[var(--text-primary)]">él</span> (he) never does
					— even though they sound the same.
				</p>
				<div className="space-y-4">
					{NO_CONTRACTION.map((item, i) => (
						<div
							key={i}
							className="border border-[var(--border)] rounded-lg p-4"
						>
							<div className="flex items-center gap-3 mb-2">
								<MergeVisual
									parts={item.rule
										.split("→")[0]
										.trim()
										.split(" + ")
										.map((w, j) => (j === 0 ? { word: w } : { word: w }))}
									result={item.rule.split("→")[1]?.trim()}
									blocked
								/>
							</div>
							<p className="text-[12px] text-[var(--accent)] mb-1">
								{item.example}
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-wide">
								{item.note}
							</p>
						</div>
					))}
				</div>
			</Card>

			{/* Summary table */}
			<Card className="mt-6 p-6">
				<Eyebrow>Summary</Eyebrow>
				<div className="grid grid-cols-3 gap-0 border border-[var(--border)] rounded-lg overflow-hidden text-center">
					{[
						{ label: "Preposition", val1: "a", val2: "de" },
						{ label: "+ article", val1: "el", val2: "el" },
						{ label: "= contraction", val1: "AL", val2: "DEL", accent: true },
						{ label: "meaning", val1: "to the", val2: "of the / from the" },
						{ label: "gender", val1: "masculine only", val2: "masculine only" },
					].map((row, i) => (
						<div key={i} className="contents">
							<div className="py-2.5 px-3 border-b border-[var(--border)] text-[10px] text-[var(--text-label)] tracking-[0.1em] uppercase text-left">
								{row.label}
							</div>
							<div
								className={`py-2.5 px-3 border-b border-l border-[var(--border)] text-[12px]
                                ${row.accent ? "text-[var(--accent)] font-semibold" : "text-[var(--text-secondary)]"}`}
							>
								{row.val1}
							</div>
							<div
								className={`py-2.5 px-3 border-b border-l border-[var(--border)] text-[12px]
                                ${row.accent ? "text-[var(--accent)] font-semibold" : "text-[var(--text-secondary)]"}`}
							>
								{row.val2}
							</div>
						</div>
					))}
				</div>
			</Card>
			<BackNext
				back="/a1/grammar/prepositions"
				next="#"
				backLabel="Prepositions"
				nextLabel="to be made"
			/>
		</PageWrapper>
	);
}
