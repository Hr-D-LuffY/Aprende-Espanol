import { useState } from "react";
import {
	TENGO_CONJUGATIONS,
	TENGO_EXAMPLES,
} from "../../../context/Tengo&GustaCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import Card from "../../../components/Card";

import ConjRow from "../../../components/Verb/ConjRow";
export default function TenerPage() {
	const [activeEx, setActiveEx] = useState(null);

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Tener"
					es=" To have"
					description="Use TENER for possession, age, and relationships →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Conjugation */}
			<div className="mb-10">
				<Eyebrow>Conjugation</Eyebrow>
				<div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] px-6">
					{TENGO_CONJUGATIONS.map((c) => (
						<ConjRow key={c.pronoun} {...c} />
					))}
				</div>
			</div>

			<Eyebrow>Examples</Eyebrow>
			<Card className="px-5 pb-4 mb-10">
				{TENGO_EXAMPLES.map((ex, i) => (
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
			</Card>

			<Eyebrow>Special pattern · Age</Eyebrow>
			<Card className="mt-6 p-6">
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-4 tracking-wide">
					In Spanish, age uses{" "}
					<span className="text-[var(--text-primary)]">tener</span> — not "to
					be".
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="border border-[var(--border)] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
							English
						</p>
						<p className="text-[13px] text-[var(--text-secondary)]">
							I{" "}
							<span className="text-[var(--text-muted)] line-through">am</span>{" "}
							20 years old
						</p>
					</div>
					<div className="border border-[#f59e0b]/30 rounded-lg p-4 bg-[var(--accent)]/5">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
							Spanish
						</p>
						<p className="text-[13px] text-[var(--text-primary)]">
							Tengo <span className="text-[var(--accent)]">20 años</span>
						</p>
					</div>
				</div>
			</Card>

			<BackNext
				back="/a1/grammar/estar"
				next="/a1/grammar/gustar"
				backLabel="Estar Verb"
				nextLabel="Gustar Verb"
			/>
		</PageWrapper>
	);
}
