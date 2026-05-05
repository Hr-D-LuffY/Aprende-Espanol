import { useState } from "react";
import {
	INDEFINITE_CONTENT,
	DEFINITE_CONTENT,
} from "../../../context/ArticleCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";
import TabBar from "/src/components/TabBar";

const TABS = [
	{ id: "definite", label: "Definite" },
	{ id: "indefinite", label: "Indefinite" },
];

function ExamplePair({ es, en }) {
	return (
		<div className="flex items-baseline gap-3 flex-wrap">
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
						className="px-3 sm:px-5 py-3 text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]"
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
					<div className="px-3 sm:px-5 py-3 text-[11px] tracking-[0.12em] uppercase text-[var(--text-muted)]">
						{row.gender}
					</div>
					<div className="px-3 sm:px-5 py-3 text-[14px] sm:text-[15px] font-semibold text-[var(--accent)]">
						{row.singular}
					</div>
					<div className="px-3 sm:px-5 py-3 text-[14px] sm:text-[15px] font-semibold text-[var(--accent)]">
						{row.plural}
					</div>
				</div>
			))}
		</div>
	);
}

function ExamplesBlock({ pairs }) {
	return (
		<div className="border border-[var(--border)] rounded-xl p-4 sm:p-5 bg-[var(--surface)] flex flex-col gap-2">
			{pairs.map((p, i) => (
				<ExamplePair key={i} {...p} />
			))}
		</div>
	);
}

export default function ArticlesPage() {
	const [activeTab, setActiveTab] = useState("definite");

	const content =
		activeTab === "definite" ? DEFINITE_CONTENT : INDEFINITE_CONTENT;

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Articles"
					es="Artículos"
					description="Spanish articles agree in gender and number with the noun they modify. Master definite and indefinite forms to sound natural →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			<TabBar tabs={TABS} activeTab={activeTab} onSwitch={setActiveTab} />

			{/* Type label */}
			<div className="flex items-center gap-3 mb-6">
				<span className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)]">
					Type
				</span>
				<span className="text-[12px] text-[var(--accent)] border border-[#f59e0b]/30 bg-[var(--accent)]/5 px-3 py-0.5 rounded-full">
					{content.label}
				</span>
			</div>

			<ArticleTable rows={content.rows} />

			<Eyebrow>Quick Examples</Eyebrow>
			<ExamplesBlock pairs={content.examples} />

			<div className="mt-10">
				<Eyebrow>In a sentence</Eyebrow>
				<div className="flex flex-col gap-3">
					{content.sentences.map((s, i) => (
						<div key={i} className="border-l-2 border-[#f59e0b]/40 pl-4">
							<p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)]">
								{s.es}
							</p>
							<p className="text-[11px] text-[var(--text-label)] mt-0.5">
								{s.en}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="mt-12 border border-[var(--border)] rounded-xl p-4 sm:p-5 bg-[var(--surface)]">
				<Eyebrow>Note</Eyebrow>
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

			<BackNext
				back="/a1/grammar/singular-plural"
				next="/a1/grammar/adjective"
				backLabel="Singular-Plural"
				nextLabel="Adjective"
			/>
		</PageWrapper>
	);
}
