import { useState } from "react";
import {
	KEY_NOTES,
	CATEGORY_COLORS,
	QUESTION_WORDS,
} from "../../../context/QuesCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";

import QuestionRow from "../../../components/Question/QuestionRow";
import ExamplePanel from "../../../components/Question/ExamplePanel";
import KeyNoteRow from "../../../components/Question/KeyNoteRow";

function TableHeader() {
	return (
		<div className="hidden lg:grid grid-cols-[140px_200px_1fr] border border-b-0 border-[var(--border)] rounded-t-2xl overflow-hidden bg-[var(--surface)]">
			{["English", "Español", "Note — tap any row"].map((h) => (
				<div
					key={h}
					className="px-6 py-3 border-r border-[var(--border)] last:border-0"
				>
					<span className="text-[9px] tracking-[0.16em] uppercase text-[var(--text-ghost)]">
						{h}
					</span>
				</div>
			))}
		</div>
	);
}

export default function QuestionWordsPage() {
	const [activeIdx, setActiveIdx] = useState(0);
	const toggle = (i) => setActiveIdx(activeIdx === i ? null : i);

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Question Words"
					es="Palabras interrogativas"
					description="12 WH-words. Every Spanish question starts with one of these — always with an accent mark and opening ¿ →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Question words table */}
			<div className="mb-14">
				<TableHeader />
				<div className="border border-[var(--border)] rounded-2xl lg:rounded-t-none bg-[var(--surface)] overflow-hidden">
					{QUESTION_WORDS.map((word, i) => (
						<div key={word.es}>
							<QuestionRow
								word={word}
								isActive={activeIdx === i}
								onClick={() => toggle(i)}
							/>
							{activeIdx === i && <ExamplePanel word={word} />}
						</div>
					))}
				</div>
			</div>

			{/* Key notes */}
			<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] overflow-hidden">
				<div className="border-b border-[var(--border)] px-5 lg:px-8 py-5">
					<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-1">
						Watch out for
					</p>
					<h2 className="text-xl font-light tracking-[-0.03em] text-[var(--text-primary)]">
						Common confusions
					</h2>
				</div>
				<div className="px-5 lg:px-8 py-2">
					{KEY_NOTES.map((n) => (
						<KeyNoteRow key={n.note} item={n} />
					))}
				</div>
			</div>

			<BackNext
				back="/a1/grammar/gustar"
				next="/a1/grammar/negation"
				backLabel="Gustar Verb"
				nextLabel="Negation"
			/>
		</PageWrapper>
	);
}
