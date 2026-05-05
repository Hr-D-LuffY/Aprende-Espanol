import { useState } from "react";
import PREPOSITIONS from "../../../context/PrepositionCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";
// ─── Primitives ───────────────────────────────────────────────────────────────

function Tag({ children, color = "zinc" }) {
	const styles = {
		amber: "border-[#f59e0b]/40 text-[var(--accent)] bg-[var(--accent)]/5",
		zinc: "border-[var(--border-hover)] text-[var(--text-muted)] bg-transparent",
		blue: "border-[#3b82f6]/30 text-[#60a5fa] bg-[#3b82f6]/5",
		green: "border-[#22c55e]/30 text-[#4ade80] bg-[#22c55e]/5",
		rose: "border-[#f43f5e]/30 text-[#fb7185] bg-[#f43f5e]/5",
		violet: "border-[#8b5cf6]/30 text-[#a78bfa] bg-[#8b5cf6]/5",
		teal: "border-[#14b8a6]/30 text-[#2dd4bf] bg-[#14b8a6]/5",
	};
	return (
		<span
			className={`inline-block border rounded px-2 py-0.5 text-[10px] tracking-[0.12em] uppercase font-semibold ${styles[color]}`}
		>
			{children}
		</span>
	);
}

function ExampleRow({ es, en }) {
	return (
		<div className="py-2.5 border-b border-[var(--border)] last:border-0 flex flex-col gap-0.5">
			<span className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em]">
				{es}
			</span>
			<span className="text-[11px] text-[var(--text-label)] tracking-wide">
				{en}
			</span>
		</div>
	);
}

function UseBlock({ title, examples }) {
	return (
		<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden">
			<div className="px-5 py-3 border-b border-[var(--border)]">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)]">
					{title}
				</p>
			</div>
			<div className="px-5">
				{examples.map((ex, i) => (
					<ExampleRow key={i} {...ex} />
				))}
			</div>
		</div>
	);
}

function VocabRow({ es, en }) {
	return (
		<div className="flex items-baseline justify-between py-2.5 border-b border-[var(--border)] last:border-0 hover:bg-[var(--accent)]/3 transition-colors px-1">
			<span className="text-[13px] text-[var(--text-primary)]">{es}</span>
			<span className="text-[11px] text-[var(--text-muted)] tracking-wide">
				{en}
			</span>
		</div>
	);
}

function AfterPrepNote({ pairs }) {
	return (
		<div className="border border-[var(--border-hover)] rounded-lg px-4 py-3 flex flex-wrap items-center gap-4">
			<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] shrink-0">
				After prep.
			</p>
			<div className="flex flex-wrap gap-6">
				{pairs.map(([from, to]) => (
					<div key={from} className="flex items-center gap-2">
						<span className="text-[12px] text-[var(--text-muted)]">{from}</span>
						<span className="text-[var(--text-ghost)]">→</span>
						<span className="text-[12px] text-[var(--accent)] font-semibold">
							{to}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

// ─── Contraction Block ────────────────────────────────────────────────────────

function MergeChip({ word, accent }) {
	return (
		<span
			className={`text-[13px] font-semibold px-2.5 py-1 rounded border ${
				accent ?
					"text-[var(--accent)] border-[#f59e0b]/30 bg-[var(--accent)]/5"
				:	"text-[var(--text-secondary)] border-[var(--border)]"
			}`}
		>
			{word}
		</span>
	);
}

function ContractionCallout({ prep }) {
	const [showEx, setShowEx] = useState(null);

	const data = {
		a: {
			result: "al",
			meaning: "to the (masculine)",
			rule: "a + el → al",
			examples: [
				{ es: "Voy al mercado.", en: "I go to the market." },
				{ es: "Ella va al colegio.", en: "She goes to school." },
				{ es: "Vamos al parque.", en: "We go to the park." },
				{ es: "¿Vas al trabajo?", en: "Are you going to work?" },
				{ es: "Voy al banco mañana.", en: "I'm going to the bank tomorrow." },
			],
			exception: {
				rule: "a + él (pronoun) → a él",
				example: "Voy a él.",
				note: "él is a pronoun here, not the article el — no contraction",
			},
		},
		de: {
			result: "del",
			meaning: "of / from the (masculine)",
			rule: "de + el → del",
			examples: [
				{ es: "El coche del profesor.", en: "The teacher's car." },
				{ es: "La casa del pueblo.", en: "The village house." },
				{ es: "El nombre del perro.", en: "The dog's name." },
				{ es: "La llave del coche.", en: "The car key." },
				{ es: "El precio del libro.", en: "The price of the book." },
			],
			exception: {
				rule: "de + él (pronoun) → de él",
				example: "El libro es de él.",
				note: "él is a pronoun here, not the article el — no contraction",
			},
		},
	};

	const c = data[prep];
	if (!c) return null;

	return (
		<div className="border border-[#f59e0b]/20 rounded-2xl bg-[var(--accent)]/[0.03] overflow-hidden mb-10">
			{/* Header stripe */}
			<div className="px-5 py-4 border-b border-[#f59e0b]/15 flex items-start sm:items-center justify-between flex-wrap gap-3">
				<div>
					<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--accent)]/60 mb-1">
						Mandatory contraction
					</p>
					<div className="flex items-center gap-2 flex-wrap">
						<MergeChip word={prep} />
						<span className="text-[var(--text-ghost)] text-sm">+</span>
						<MergeChip word="el" accent />
						<span className="text-[var(--text-ghost)] text-sm">→</span>
						<MergeChip word={c.result} accent />
					</div>
				</div>
				<span className="text-[11px] text-[var(--text-muted)] tracking-wide">
					{c.meaning}
				</span>
			</div>

			{/* Examples — tap to reveal */}
			<div className="px-5 pt-2 pb-1">
				<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-ghost)] mb-1">
					Tap to reveal translation
				</p>
				{c.examples.map((ex, i) => (
					<div
						key={i}
						onClick={() => setShowEx(showEx === i ? null : i)}
						className={`py-2.5 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors ${
							showEx === i ?
								"text-[var(--accent)]"
							:	"hover:text-[var(--text-secondary)]"
						}`}
					>
						<p className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em]">
							{ex.es}
						</p>
						<p
							className={`text-[11px] text-[var(--text-label)] tracking-wide transition-all duration-150 ${
								showEx === i ? "max-h-8 mt-0.5" : "max-h-0 overflow-hidden"
							}`}
						>
							{ex.en}
						</p>
					</div>
				))}
			</div>

			{/* Exception */}
			<div className="mx-5 mb-4 mt-2 border border-[var(--border)] rounded-lg px-4 py-3">
				<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
					Exception — pronoun él
				</p>
				<p className="text-[12px] text-[var(--accent)] mb-1">
					{c.exception.example}
				</p>
				<p className="text-[11px] text-[var(--text-muted)] tracking-wide">
					{c.exception.note}
				</p>
			</div>
		</div>
	);
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrepositionsPage() {
	const [active, setActive] = useState("para");
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const prep = PREPOSITIONS.find((p) => p.id === active);
	const hasContraction = active === "a" || active === "de";

	const handleSelect = (id) => {
		setActive(id);
		setMobileNavOpen(false);
		// Scroll to top of content on mobile when switching prepositions
		if (window.innerWidth < 1024) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Prepositions"
					es="Preposiciones"
					description="Small words, big impact — pins relationships of time, place, cause, or
					company to a sentence. 'A' and 'De' also form mandatory contractions with el →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Layout: sidebar + content */}
			<div className="flex gap-8 items-start">
				{/* ── Sidebar nav (desktop) ── */}
				<nav className="hidden lg:flex flex-col gap-1 w-28 flex-shrink-0 sticky top-8">
					<p className="text-[9px] tracking-[0.16em] uppercase text-[var(--text-ghost)] mb-2 px-1">
						Select
					</p>
					{PREPOSITIONS.map((p) => (
						<button
							key={p.id}
							onClick={() => handleSelect(p.id)}
							className={`text-left px-3 py-2 rounded-lg text-[12px] font-semibold tracking-wide border transition-all duration-150 cursor-pointer ${
								active === p.id ?
									"bg-[var(--accent)] text-[var(--accent-text)] border-[#f59e0b]"
								:	"bg-transparent text-[var(--text-muted)] border-transparent hover:text-[var(--text-secondary)] hover:border-[var(--border)]"
							}`}
						>
							<span>{p.label}</span>
							{(p.id === "a" || p.id === "de") && (
								<span
									className={`ml-1.5 text-[9px] tracking-[0.08em] ${active === p.id ? "text-[var(--accent-text)]/60" : "text-[var(--accent)]/50"}`}
								>
									*
								</span>
							)}
						</button>
					))}
					<p className="text-[9px] text-[var(--text-ghost)] px-1 mt-2 leading-relaxed">
						* has contraction
					</p>
				</nav>

				{/* ── Main content ── */}
				<div className="flex-1 min-w-0">
					{/* ── Mobile dropdown nav — rendered INSIDE the content column so it sits flush ── */}
					<div className="lg:hidden w-full mb-5">
						<button
							onClick={() => setMobileNavOpen((o) => !o)}
							className="w-full flex items-center justify-between px-4 py-3 border border-[var(--border)] rounded-xl bg-[var(--surface)] text-[13px] text-[var(--text-secondary)]"
						>
							<span className="font-semibold">{prep.label}</span>
							<span className="text-[var(--text-ghost)]">
								{mobileNavOpen ? "↑" : "↓"} all prepositions
							</span>
						</button>
						{mobileNavOpen && (
							<div className="mt-2 border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden">
								{PREPOSITIONS.map((p) => (
									<button
										key={p.id}
										onClick={() => handleSelect(p.id)}
										className={`w-full text-left px-4 py-3 border-b border-[var(--border)] last:border-0 text-[13px] flex items-center justify-between transition-colors ${
											active === p.id ?
												"text-[var(--accent)] bg-[var(--accent)]/5"
											:	"text-[var(--text-secondary)] hover:bg-[var(--surface-deep)]"
										}`}
									>
										<span className="font-semibold">{p.label}</span>
										<span
											className={`text-[11px] ${active === p.id ? "text-[var(--accent)]/70" : "text-[var(--text-label)]"}`}
										>
											{p.short}
										</span>
									</button>
								))}
							</div>
						)}
					</div>

					{/* Prep heading */}
					<div key={active}>
						<div className="flex flex-wrap items-baseline gap-3 mb-1">
							<span className="text-4xl sm:text-5xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
								{prep.label}
							</span>
							<Tag color={prep.tagColor}>{prep.tag}</Tag>
						</div>
						<p className="text-[12px] text-[var(--text-muted)] tracking-wide mb-1">
							{prep.short}
						</p>
						<p className="text-[10px] text-[var(--text-label)] tracking-[0.1em] uppercase mb-5 sm:mb-6">
							{prep.summary}
						</p>

						{/* After-prep pronoun change */}
						{prep.afterPrep && (
							<div className="mb-5 sm:mb-6">
								<AfterPrepNote pairs={prep.afterPrep} />
							</div>
						)}

						{/* Contraction callout — only for "a" and "de" */}
						{hasContraction && <ContractionCallout prep={active} />}

						{/* Uses */}
						<div className="mb-8 sm:mb-10">
							<Eyebrow>Uses</Eyebrow>
							<div className="flex flex-col gap-3">
								{prep.uses.map((u) => (
									<UseBlock key={u.title} {...u} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<BackNext
				back="/a1/grammar/negation"
				next="/a1/grammar/regular-verbs"
				backLabel="Negation"
				nextLabel="Regular Verbs"
			/>
		</PageWrapper>
	);
}
