import { useState } from "react";
import RULES from "../../../context/SinPluCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import TabBar from "/src/components/TabBar";

// ── WordPair ──────────────────────────────────────────────────────────────────

function WordPair({ from, to }) {
	return (
		<div className="flex items-center gap-3 py-3 border-b border-[var(--border)] last:border-b-0">
			<span className="text-[13px] text-[var(--text-secondary)] w-28 sm:w-32 shrink-0">
				{from}
			</span>
			<span className="text-[var(--text-label)] text-[11px]">→</span>
			<span className="text-[13px] text-[var(--accent)]">{to}</span>
		</div>
	);
}

// ── RuleCard ──────────────────────────────────────────────────────────────────

function RuleCard({ rule }) {
	return (
		<div>
			{/* Rule header */}
			<div className="flex items-start gap-3 sm:gap-4 mb-6">
				<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-lg px-2.5 sm:px-3 py-1.5 shrink-0">
					<span className="text-[12px] sm:text-[13px] font-semibold text-[var(--accent)] tracking-wide">
						{rule.pattern}
					</span>
				</div>
				<div>
					<p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)] leading-snug mb-1">
						{rule.title}
					</p>
					<p className="text-[11px] sm:text-[12px] text-[var(--text-muted)] leading-relaxed">
						{rule.desc}
					</p>
				</div>
			</div>

			{/* Word pairs */}
			<div className="border border-[var(--border)] rounded-xl px-4 sm:px-5 bg-[var(--surface)]">
				{rule.pairs.map((p, i) => (
					<WordPair key={i} {...p} />
				))}
			</div>

			{/* Exception note */}
			{rule.note && (
				<div className="mt-4 border border-[var(--border)] rounded-xl p-4 bg-[var(--surface)]">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1">
						Note
					</p>
					<p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
						{rule.note}
					</p>
				</div>
			)}
		</div>
	);
}



// ── Page ──────────────────────────────────────────────────────────────────────

export default function SingularPluralPage() {
	const [activeTab, setActiveTab] = useState("rule1");

	const activeRule = RULES.find((r) => r.id === activeTab);

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Singular & Plural"
					es="Singular y Plural"
					description="Spanish plurals follow three consistent rules based on the final
					letter of the word. Learn the pattern, not the exceptions →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Tab bar */}
			<TabBar
				tabs={RULES.map((r) => ({ id: r.id, label: r.label }))}
				activeTab={activeTab}
				onSwitch={setActiveTab}
			/>

			{/* Active rule */}
			<RuleCard rule={activeRule} />

			{/* Summary */}
			<div className="mt-14 border-t border-[var(--border)] pt-8">
				<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
					Summary
				</p>
				<div className="flex flex-col gap-2">
					{RULES.map((r) => (
						<div
							key={r.id}
							className="flex items-start sm:items-center gap-3 sm:gap-4"
						>
							<span className="text-[11px] text-[var(--accent)] w-28 shrink-0">
								{r.pattern}
							</span>
							<span className="text-[12px] text-[var(--text-muted)]">
								{r.title}
							</span>
						</div>
					))}
				</div>
			</div>

			<BackNext
				back="/a1/grammar/noun-gender"
				next="/a1/grammar/article"
				backLabel="Noun-Gender"
				nextLabel="Article"
			/>
		</PageWrapper>
	);
}
