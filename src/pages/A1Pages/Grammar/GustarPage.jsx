import { useState } from "react";
import {
	GUSTA_CONJUGATIONS,
	GUSTA_EXAMPLES,
	GUSTA_GUSTAN,
} from "../../../context/Tengo&GustaCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import ConjRow from "../../../components/Verb/ConjRow";
import { Card } from "../../../components/VerbComponents";

export default function GustrarPage() {
	const [activeEx, setActiveEx] = useState(null);

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Gustar"
					es=" To like"
					description="Use GUSTAR for preferences, likes, and activities →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

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

			{/* Conjugation */}
			<div className="mb-10">
				<Eyebrow>Conjugation</Eyebrow>
				<div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] px-6">
					{GUSTA_CONJUGATIONS.map((c) => (
						<ConjRow key={c.pronoun} {...c} />
					))}
				</div>
			</div>

			<Eyebrow>Examples</Eyebrow>
			<Card className="px-5 pb-4 mb-10">
				{GUSTA_EXAMPLES.map((ex, i) => (
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

			<Eyebrow>Gusta vs Gustan</Eyebrow>
			<Card className="mt-6 p-6">
				{/* Rule summary */}
				<div className="grid grid-cols-2 gap-3 mb-6">
					<div className="border border-[var(--border)] rounded-lg p-3">
						<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1.5">
							gusta
						</p>
						<p className="text-[13px] text-[var(--text-primary)] mb-1">
							singular thing
						</p>
						<p className="text-[11px] text-[var(--text-muted)] tracking-wide">
							el libro, la música, el café
						</p>
					</div>
					<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-lg p-3">
						<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--accent)] mb-1.5">
							gustan
						</p>
						<p className="text-[13px] text-[var(--text-primary)] mb-1">
							plural things
						</p>
						<p className="text-[11px] text-[var(--text-muted)] tracking-wide">
							los libros, las películas
						</p>
					</div>
				</div>

				<p className="text-[11px] text-[var(--text-label)] tracking-wide mb-4">
					The form agrees with the{" "}
					<span className="text-[var(--text-primary)]">thing liked</span> — not
					the person liking it.
				</p>

				{/* Examples */}
				<div className="border border-[var(--border)] rounded-xl overflow-hidden">
					{GUSTA_GUSTAN.map((row, i) => (
						<div
							key={i}
							className="grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 border-b border-[var(--border)] last:border-0"
						>
							<div>
								<p className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em]">
									{row.es.split(row.form).map((part, j, arr) =>
										j < arr.length - 1 ?
											<span key={j}>
												{part}
												<span className="text-[var(--accent)]">{row.form}</span>
											</span>
										:	part,
									)}
								</p>
								<p className="text-[11px] text-[var(--text-label)] tracking-wide mt-0.5">
									{row.en}
								</p>
							</div>
							<span
								className={`text-[10px] font-semibold px-2 py-0.5 rounded border tracking-wide shrink-0
					${
						row.tag === "singular" ?
							"border-[var(--border)] text-[var(--text-muted)]"
						:	"border-[#f59e0b]/30 text-[var(--accent)] bg-[var(--accent)]/5"
					}`}
							>
								{row.tag}
							</span>
						</div>
					))}
				</div>
			</Card>

			<BackNext
				back="/a1/grammar/tener"
				next="/a1/grammar/question-words"
				backLabel="Tener Verb"
				nextLabel="Question Words"
			/>
		</PageWrapper>
	);
}
