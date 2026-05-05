import { useState } from "react";
import {
	GENDER_PAIRS,
	PLURAL_EXAMPLES,
	INVARIABLE_EXAMPLES,
	INVARIABLE_WORDS,
} from "../../../context/AdjCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

// ── Primitives ─────────────────────────────────────────────────────────────

function Tag({ children }) {
	return (
		<span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)] border border-[#f59e0b]/30 bg-[var(--accent)]/5 px-2.5 py-0.5 rounded-full whitespace-nowrap">
			{children}
		</span>
	);
}

function ExampleRow({ es, pronunciation, en }) {
	return (
		<div className="grid grid-cols-[1fr_auto] gap-2 sm:gap-4 items-start py-3 border-b border-[var(--border)] last:border-b-0">
			<div>
				<p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)]">
					{es}
				</p>
				{pronunciation && (
					<p className="text-[11px] text-[var(--text-label)] mt-0.5 italic">
						{pronunciation}
					</p>
				)}
			</div>
			<p className="text-[11px] sm:text-[12px] text-[var(--text-muted)] text-right">
				{en}
			</p>
		</div>
	);
}

function RuleBlock({ number, title, subtitle, badge, children }) {
	const [open, setOpen] = useState(true);

	return (
		<div className="border border-[var(--border)] rounded-2xl overflow-hidden">
			<button
				onClick={() => setOpen((o) => !o)}
				className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 hover:bg-[var(--surface)] transition-colors duration-150 cursor-pointer text-left gap-3"
			>
				<div className="flex items-center gap-3 sm:gap-4 min-w-0">
					<span className="text-[11px] font-semibold tracking-[0.14em] text-[var(--text-label)] shrink-0">
						{String(number).padStart(2, "0")}
					</span>
					<div className="min-w-0">
						<p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)]">
							{title}
						</p>
						{subtitle && (
							<p className="text-[10px] sm:text-[11px] text-[var(--text-label)] mt-0.5 leading-snug">
								{subtitle}
							</p>
						)}
					</div>
				</div>
				<div className="flex items-center gap-2 sm:gap-3 shrink-0">
					{badge && <Tag>{badge}</Tag>}
					<span
						className="text-[var(--text-label)] text-sm transition-transform duration-200"
						style={{ transform: open ? "rotate(90deg)" : "none" }}
					>
						→
					</span>
				</div>
			</button>
			{open && (
				<div className="px-4 sm:px-6 pb-5 sm:pb-6 border-t border-[var(--border)] bg-[var(--surface)]">
					<div className="pt-4 sm:pt-5">{children}</div>
				</div>
			)}
		</div>
	);
}

function GenderGrid({ rows }) {
	return (
		// MOBILE: 1-col on very small, 2-col from sm up
		<div className="grid grid-cols-2 gap-2 sm:gap-3">
			{rows.map((r, i) => (
				<div
					key={i}
					className="border border-[var(--border)] rounded-xl p-3 sm:p-4 bg-[var(--bg)]"
				>
					<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1.5 sm:mb-2">
						{r.label}
					</p>
					<p className="text-[14px] sm:text-[15px] text-[var(--accent)]">
						{r.es}
					</p>
					<p className="text-[11px] text-[var(--text-muted)] mt-1">{r.en}</p>
				</div>
			))}
		</div>
	);
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function AdjectivePage() {
	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Adjective"
					es="Adjetivos"
					description="Unlike English, Spanish adjectives must match the gender and number of
					the noun they describe. Three rules cover almost every case"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Structure formula */}
			<div className="mb-12">
				<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
					Structure
				</p>
				<div className="flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 sm:px-5 py-3 bg-[var(--surface)] w-fit">
					<span className="text-[12px] sm:text-[13px] text-[var(--accent)] font-semibold tracking-wide">
						NOUN
					</span>
					<span className="text-[var(--accent)] text-[11px]">+</span>
					<span className="text-[12px] sm:text-[13px] text-[var(--accent)] font-semibold tracking-wide">
						ADJECTIVE
					</span>
				</div>
				<p className="text-[11px] text-[var(--accent)]/50 mt-3 leading-relaxed">
					Adjective always follows the noun · must match gender + number
				</p>
			</div>

			{/* Rules */}
			<div className="flex flex-col gap-3">
				<RuleBlock
					number={1}
					title="Gender change"
					subtitle="-O for masculine · -A for feminine"
					badge="-O / -A"
				>
					<GenderGrid rows={GENDER_PAIRS} />
					<div className="mt-4 border-l-2 border-[#f59e0b]/40 pl-4">
						<p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
							Adjectives ending in{" "}
							<span className="text-[var(--text-secondary)]">-o</span> change to{" "}
							<span className="text-[var(--text-secondary)]">-a</span> for
							feminine nouns. The plural simply adds{" "}
							<span className="text-[var(--text-secondary)]">-s</span>.
						</p>
					</div>
				</RuleBlock>

				<RuleBlock
					number={2}
					title="Plural agreement"
					subtitle="Adjective plural mirrors noun plural"
					badge="+ S / + ES"
				>
					<div className="border border-[var(--border)] rounded-xl px-4 sm:px-5 bg-[var(--bg)]">
						{PLURAL_EXAMPLES.map((ex, i) => (
							<ExampleRow key={i} {...ex} />
						))}
					</div>
				</RuleBlock>

				<RuleBlock
					number={3}
					title="Invariable adjectives"
					subtitle="Ends in -E or consonant → no gender change"
					badge="no change"
				>
					<div className="flex flex-wrap gap-2 mb-5">
						{INVARIABLE_WORDS.map((w) => (
							<span
								key={w}
								className="text-[12px] text-[var(--text-secondary)] border border-[#27272a] px-3 py-1 rounded-full"
							>
								{w}
							</span>
						))}
					</div>
					<div className="border border-[var(--border)] rounded-xl px-4 sm:px-5 bg-[var(--bg)]">
						{INVARIABLE_EXAMPLES.map((ex, i) => (
							<ExampleRow key={i} {...ex} />
						))}
					</div>
					<p className="text-[11px] text-[var(--text-muted)] mt-4 leading-relaxed border-l-2 border-[#f59e0b]/40 pl-4">
						These adjectives only change for plural (add -s or -es), never for
						gender.
					</p>
				</RuleBlock>
			</div>

			{/* Quick summary table — scrollable on mobile */}
			<div className="mt-12">
				<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-4">
					Quick reference
				</p>
				<div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
					<div className="border border-[var(--border)] rounded-xl overflow-hidden min-w-[480px] sm:min-w-0">
						<div className="grid grid-cols-4 border-b border-[var(--border)] bg-[var(--surface)]">
							{["", "M. Singular", "F. Singular", "Plural"].map((h) => (
								<div
									key={h}
									className="px-3 sm:px-4 py-3 text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)]"
								>
									{h}
								</div>
							))}
						</div>
						{[
							{
								type: "Ends -O",
								ms: "bueno",
								fs: "buena",
								pl: "buenos / buenas",
							},
							{ type: "Ends -E", ms: "grande", fs: "grande", pl: "grandes" },
							{ type: "Consonant", ms: "feliz", fs: "feliz", pl: "felices" },
						].map((row) => (
							<div
								key={row.type}
								className="grid grid-cols-4 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface)] transition-colors duration-150"
							>
								<div className="px-3 sm:px-4 py-3 text-[11px] text-[var(--text-muted)]">
									{row.type}
								</div>
								<div className="px-3 sm:px-4 py-3 text-[12px] sm:text-[13px] text-[var(--accent)]">
									{row.ms}
								</div>
								<div className="px-3 sm:px-4 py-3 text-[12px] sm:text-[13px] text-[var(--accent)]">
									{row.fs}
								</div>
								<div className="px-3 sm:px-4 py-3 text-[11px] sm:text-[12px] text-[var(--text-secondary)]">
									{row.pl}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<BackNext
				back="/a1/grammar/article"
				next="/a1/grammar/pronouns"
				backLabel="Article"
				nextLabel="Pronouns"
			/>
		</PageWrapper>
	);
}
