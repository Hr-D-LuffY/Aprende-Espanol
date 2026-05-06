import { useState } from "react";
import { BASIC_PAIRS, DOUBLE_NEG, QUESTION_NEG } from "../../../context/NegCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import CompareRow from "../../../components/Negation/CompareRow";
import RuleBlock from "../../../components/Negation/RuleBlock";
import Card from "../../../components/Card";

export default function NegationPage() {
	const [activeQ, setActiveQ] = useState(null);

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Negation"
					es="Negación"
					description="Learn to say ‘no’ and create negative sentences →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Core rule */}
			<Card className="mb-6 p-6">
				<Eyebrow>The rule — one word</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-5 tracking-wide max-w-lg">
					Spanish negation is simple: place{" "}
					<span className="text-[var(--text-primary)]">no</span> directly before
					the verb. That's it.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="border border-[var(--border)] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
							Positive
						</p>
						<div className="flex items-center gap-2 text-[13px]">
							<span className="text-[var(--text-secondary)]">Yo</span>
							<span className="text-[var(--text-primary)] font-semibold">
								hablo
							</span>
							<span className="text-[var(--text-secondary)]">español.</span>
						</div>
					</div>
					<div className="border border-[#f59e0b]/30 rounded-lg p-4 bg-[var(--accent)]/5">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
							Negative
						</p>
						<div className="flex items-center gap-2 text-[13px]">
							<span className="text-[var(--text-secondary)]">Yo</span>
							<span className="text-[var(--accent)] font-semibold">no</span>
							<span className="text-[var(--text-primary)] font-semibold">
								hablo
							</span>
							<span className="text-[var(--text-secondary)]">español.</span>
						</div>
					</div>
				</div>
				<div className="mt-4 pt-4 border-t border-[var(--border)]">
					<p className="text-[11px] text-[var(--text-label)] tracking-wide">
						formula:{" "}
						<span className="text-[var(--text-secondary)]">subject</span>{" "}
						<span className="text-[var(--accent)]">+ no +</span>{" "}
						<span className="text-[var(--text-secondary)]">verb + rest</span>
					</p>
				</div>
			</Card>

			{/* Main grid */}
			<div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
				{/* Compare pairs */}
				<Card>
					<div className="px-5 pt-5 pb-2">
						<Eyebrow>Positive → Negative</Eyebrow>
					</div>
					<div className="px-5 pb-4">
						{BASIC_PAIRS.map((pair, i) => (
							<CompareRow key={i} {...pair} />
						))}
						<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
							tap a row to reveal translation
						</p>
					</div>
				</Card>

				{/* Double negatives */}
				<Card>
					<div className="px-5 pt-5 pb-2">
						<Eyebrow>Double negatives</Eyebrow>
						<p className="text-[11px] text-[var(--text-muted)] tracking-wide leading-relaxed mb-2">
							Spanish allows — and requires — double negatives. Both words must
							be negative.
						</p>
					</div>
					<div className="px-5 pb-4">
						{DOUBLE_NEG.map((r, i) => (
							<RuleBlock key={i} {...r} />
						))}
					</div>
				</Card>
			</div>

			{/* Negative questions */}
			<Card className="mt-6 p-6">
				<Eyebrow>Negative questions</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-5 tracking-wide max-w-lg">
					Same rule — <span className="text-[var(--text-primary)]">no</span>{" "}
					goes before the verb, wrap in ¿ ?
				</p>
				<div>
					{QUESTION_NEG.map((q, i) => (
						<div
							key={i}
							onClick={() => setActiveQ(activeQ === i ? null : i)}
							className={`py-3 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                                ${activeQ === i ? "bg-[var(--accent)]/5 px-2 -mx-2" : "hover:bg-[var(--surface)]"}`}
						>
							<p
								className={`text-[13px] tracking-[-0.01em] transition-colors ${activeQ === i ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
							>
								{q.es}
							</p>
							<p
								className={`text-[11px] tracking-wide transition-all duration-150
                                ${activeQ === i ? "text-[var(--text-muted)] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
							>
								{q.en}
							</p>
						</div>
					))}
					<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
						tap to reveal
					</p>
				</div>
			</Card>

			{/* Quick ref */}
			<Card className="mt-6 p-6">
				<Eyebrow>Quick reference</Eyebrow>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
					{[
						{ word: "no", meaning: "not / no" },
						{ word: "nada", meaning: "nothing" },
						{ word: "nadie", meaning: "nobody" },
						{ word: "nunca", meaning: "never" },
						{ word: "ningún", meaning: "no (masc.)" },
						{ word: "ninguna", meaning: "no (fem.)" },
						{ word: "tampoco", meaning: "neither / not either" },
						{ word: "jamás", meaning: "never (strong)" },
					].map((item) => (
						<div
							key={item.word}
							className="border border-[var(--border)] rounded-lg p-3 hover:border-[#27272a] transition-colors"
						>
							<p className="text-[14px] text-[var(--accent)] font-semibold mb-1">
								{item.word}
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-wide">
								{item.meaning}
							</p>
						</div>
					))}
				</div>
			</Card>
			<BackNext
				back="/a1/grammar/question-words"
				next="/a1/grammar/prepositions"
				backLabel="Question Words"
				nextLabel="Prepositions"
			/>
		</PageWrapper>
	);
}
