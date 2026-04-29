import { useState } from "react";
import BackNext from "/src/components/BackNext.jsx";

// ── Shared primitives ──────────────────────────────────────────────────────

function Eyebrow({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-5">
			{children}
		</p>
	);
}

function SectionTitle({ children }) {
	return (
		<h2 className="text-2xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-8">
			{children}
		</h2>
	);
}

function TabBar({ tabs, active, onChange }) {
	return (
		<div className="flex gap-1 border border-[var(--border)] rounded-lg p-1 w-fit mb-8">
			{tabs.map((t) => (
				<button
					key={t}
					onClick={() => onChange(t)}
					className="px-4 py-1.5 rounded-md text-[11px] font-semibold tracking-widest transition-all duration-200 cursor-pointer"
					style={
						active === t ?
							{ background: "#f59e0b", color: "#09090b" }
						:	{ background: "transparent", color: "#52525b" }
					}
				>
					{t}
				</button>
			))}
		</div>
	);
}

function ExamplePair({ es, en }) {
	return (
		<div className="flex items-baseline gap-3">
			<span className="text-[13px] text-[var(--text-secondary)]">{es}</span>
			<span className="text-[11px] text-[var(--text-label)]">= {en}</span>
		</div>
	);
}

function ArticleTable({ rows }) {
	return (
		<div className="border border-[var(--border)] rounded-xl overflow-hidden mb-6">
			<div className="grid grid-cols-3 border-b border-[var(--border)]">
				{["", "Singular", "Plural"].map((h) => (
					<div
						key={h}
						className="px-5 py-3 text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]"
					>
						{h}
					</div>
				))}
			</div>
			{rows.map((row) => (
				<div
					key={row.gender}
					className="grid grid-cols-3 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface)] transition-colors duration-150"
				>
					<div className="px-5 py-3 text-[11px] tracking-[0.12em] uppercase text-[var(--text-muted)]">
						{row.gender}
					</div>
					<div className="px-5 py-3 text-[15px] font-semibold text-[var(--accent)]">
						{row.singular}
					</div>
					<div className="px-5 py-3 text-[15px] font-semibold text-[var(--accent)]">
						{row.plural}
					</div>
				</div>
			))}
		</div>
	);
}

function ExamplesBlock({ pairs }) {
	return (
		<div className="border border-[var(--border)] rounded-xl p-5 bg-[var(--surface)] flex flex-col gap-2">
			{pairs.map((p, i) => (
				<ExamplePair key={i} {...p} />
			))}
		</div>
	);
}

// ── Content ────────────────────────────────────────────────────────────────

const DEFINITE_CONTENT = {
	label: "THE",
	rows: [
		{ gender: "Masculine", singular: "El", plural: "Los" },
		{ gender: "Feminine", singular: "La", plural: "Las" },
	],
	examples: [
		{ es: "el pollo", en: "the chicken" },
		{ es: "la casa", en: "the house" },
		{ es: "los pollos", en: "the chickens" },
		{ es: "las casas", en: "the houses" },
	],
	sentences: [
		{ es: "La casa de papel", en: "The house of paper" },
		{ es: "El amigo de Ronaldo", en: "The friend of Ronaldo" },
	],
};

const INDEFINITE_CONTENT = {
	label: "A / AN / SOME",
	rows: [
		{ gender: "Masculine", singular: "Un", plural: "Unos" },
		{ gender: "Feminine", singular: "Una", plural: "Unas" },
	],
	examples: [
		{ es: "un libro", en: "a book" },
		{ es: "una fruta", en: "a fruit" },
		{ es: "unos amigos", en: "some friends" },
		{ es: "unas casas", en: "some houses" },
	],
	sentences: [
		{ es: "Tengo un gato", en: "I have a cat" },
		{ es: "Hay unas flores aquí", en: "There are some flowers here" },
	],
};

// ── Page ──────────────────────────────────────────────────────────────────

export default function ArticlesPage() {
	const [tab, setTab] = useState("Definite");

	const content = tab === "Definite" ? DEFINITE_CONTENT : INDEFINITE_CONTENT;

	return (
		<div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-24 pb-20">
				{/* Header */}
				<Eyebrow>Grammar · A1</Eyebrow>
				<h1 className="text-5xl font-light tracking-[-0.04em] text-[var(--text-primary)] mb-3">
					Articles
				</h1>
				<p className="text-[13px] text-[var(--text-muted)] leading-relaxed mb-12 max-w-lg">
					Spanish articles agree in gender and number with the noun they modify.
					Master definite and indefinite forms to sound natural.
				</p>

				{/* Tabs */}
				<TabBar
					tabs={["Definite", "Indefinite"]}
					active={tab}
					onChange={setTab}
				/>

				{/* Type label */}
				<div className="flex items-center gap-3 mb-6">
					<span className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)]">
						Type
					</span>
					<span className="text-[12px] text-[var(--accent)] border border-[#f59e0b]/30 bg-[var(--accent)]/5 px-3 py-0.5 rounded-full">
						{content.label}
					</span>
				</div>

				{/* Table */}
				<ArticleTable rows={content.rows} />

				{/* Quick examples */}
				<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
					Quick examples
				</p>
				<ExamplesBlock pairs={content.examples} />

				{/* Sentence examples */}
				<div className="mt-10">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-4">
						In a sentence
					</p>
					<div className="flex flex-col gap-3">
						{content.sentences.map((s, i) => (
							<div key={i} className="border-l-2 border-[#f59e0b]/40 pl-4">
								<p className="text-[14px] text-[var(--text-secondary)]">
									{s.es}
								</p>
								<p className="text-[11px] text-[var(--text-label)] mt-0.5">
									{s.en}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Note */}
				<div className="mt-12 border border-[var(--border)] rounded-xl p-5 bg-[var(--surface)]">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
						Note
					</p>
					<p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
						Use <span className="text-[var(--text-secondary)]">el</span> before
						feminine nouns starting with a stressed{" "}
						<span className="text-[var(--text-secondary)]">a-</span> or{" "}
						<span className="text-[var(--text-secondary)]">ha-</span> sound in
						singular — e.g.{" "}
						<span className="text-[var(--text-secondary)]">el agua</span>,{" "}
						<span className="text-[var(--text-secondary)]">el hacha</span>. The
						noun is still feminine; only the article changes.
					</p>
				</div>

				{/* Back & Next link */}
				<BackNext
					back="/a1/grammar/singular-plural"
					next="/a1/grammar/adjective"
					backLabel="Singular-Plural"
					nextLabel="Adjective"
				/>
			</div>
		</div>
	);
}
