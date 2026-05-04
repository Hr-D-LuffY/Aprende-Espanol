import { useState } from "react";
import { Link } from "react-router-dom";
import { ALPHABET, SPECIAL } from "../../../context/alphabetCon";
import { PageWrapper } from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "../../../components/BackNext.jsx";

export default function AlphabetPage() {
	const [active, setActive] = useState(null);

	const selected =
		active !== null ?
			ALPHABET.find((a) => a.letter === active) ||
			SPECIAL.find((a) => a.letters === active)
		:	null;

	return (
		<PageWrapper>
			{/* Header */}
			<div className="mb-10">
				<PageReference reference="A1" topic="Foundation" />
				<PageHeader
					title="The Spanish Alphabet"
					es='Alfabeto'
					description="27 letters. Click any to see pronunciation, an example word, and a study note →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Main grid + detail panel */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
				{/* Letter grid */}
				<div>
					<div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-2 mb-6">
						{ALPHABET.map((a) => (
							<button
								key={a.letter}
								onClick={() => setActive(active === a.letter ? null : a.letter)}
								className={`
                                    group relative flex flex-col items-center justify-center
                                    aspect-square rounded-xl border transition-all duration-150 cursor-pointer
                                    ${
																			active === a.letter ?
																				"bg-[var(--accent)]/10 border-[#f59e0b]/40 text-[var(--accent)]"
																			:	"bg-[var(--surface)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[#27272a] hover:bg-[#18181b] hover:text-[#f79c1d]"
																		}
                                `}
							>
								<span className="text-xl font-light tracking-tight">
									{a.letter}
								</span>
								<span
									className={`text-[9px] tracking-wide mt-0.5 ${active === a.letter ? "text-[var(--accent)]/70" : "text-[var(--text-label)]"}`}
								>
									{a.sound}
								</span>
							</button>
						))}
					</div>

					{/* Special combos */}
					<div className="border-t border-[var(--border)] pt-6">
						<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-3">
							Special combinations
						</p>
						<div className="flex gap-2 flex-wrap">
							{SPECIAL.map((s) => (
								<button
									key={s.letters}
									onClick={() =>
										setActive(active === s.letters ? null : s.letters)
									}
									className={`
                                        flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer
                                        ${
																					active === s.letters ?
																						"bg-[var(--accent)]/10 border-[#f59e0b]/40 text-[var(--accent)]"
																					:	"bg-[var(--surface)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[#27272a] hover:bg-[#18181b] hover:text-[#f79c1d]"
																				}
                                    `}
								>
									<span className="text-lg font-light">{s.letters}</span>
									<span
										className={`text-[10px] ${active === s.letters ? "text-[var(--accent)]/70" : "text-[var(--text-label)]"}`}
									>
										{s.sound}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Detail panel — sticky only on lg */}
				<div className="lg:sticky lg:top-20">
					{selected ?
						<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] overflow-hidden">
							{/* Big letter */}
							<div className="border-b border-[var(--border)] px-6 py-8 flex items-end gap-4">
								<span className="text-7xl font-extralight tracking-[-0.05em] text-[var(--accent)] leading-none">
									{selected.letter || selected.letters}
								</span>
								<div className="pb-1">
									<p className="text-[11px] text-[var(--text-label)] tracking-[0.1em] uppercase mb-0.5">
										sounds like
									</p>
									<p className="text-[18px] font-light text-[var(--text-secondary)] tracking-wide">
										"{selected.sound}"
									</p>
								</div>
							</div>

							{/* Word example */}
							<div className="px-6 py-5 border-b border-[var(--border)]">
								<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
									example word
								</p>
								<p className="text-[22px] font-light text-[var(--text-primary)] tracking-tight mb-1">
									{selected.word}
								</p>
								<p className="text-[12px] text-[var(--text-muted)] mb-1">
									({selected.pronunciation})
								</p>
								<p className="text-[12px] text-[var(--accent)]/80">
									= {selected.meaning}
								</p>
							</div>

							{/* Study note */}
							<div className="px-6 py-5">
								<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
									study note
								</p>
								<p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
									{selected.note}
								</p>
							</div>
						</div>
					:	<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] px-6 py-10 flex flex-col items-center justify-center text-center gap-3">
							<span className="text-4xl font-extralight text-[#27272a]">
								A–Z
							</span>
							<p className="text-[12px] text-[var(--text-label)] tracking-wide">
								Click any letter to see its pronunciation and an example
							</p>
						</div>
					}

					{/* Quick stats */}
					<div className="grid grid-cols-3 gap-2 mt-3">
						{[
							{ val: "27", label: "letters" },
							{ val: "3", label: "combos" },
							{ val: "1", label: "unique (Ñ)", accent: true },
						].map(({ val, label, accent }) => (
							<div
								key={label}
								className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3 text-center"
							>
								<p
									className={`text-lg font-light ${accent ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
								>
									{val}
								</p>
								<p className="text-[9px] text-[var(--text-label)] tracking-wide uppercase mt-0.5">
									{label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Full reference — mobile-first layout */}
			<div className="mt-16 border-t border-[var(--border)] pt-12">
				<h2 className="text-xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-8">
					Full reference
				</h2>
				<div className="flex flex-col gap-0">
					{ALPHABET.map((a) => (
						<div
							key={a.letter}
							onClick={() => {
								setActive(a.letter);
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
							className="py-3 border-b border-[var(--border)] group hover:bg-[var(--surface)] px-3 -mx-3 rounded-lg transition-colors cursor-pointer"
						>
							{/* Mobile: 2-col, Desktop: 5-col */}
							<div className="grid grid-cols-[32px_1fr] lg:grid-cols-[40px_80px_1fr_1fr_1fr] gap-x-4 gap-y-1 items-start lg:items-center">
								<span className="text-[18px] font-light text-[var(--accent)] row-span-2 lg:row-span-1 group-hover:scale-110 transition-transform inline-block">
									{a.letter}
								</span>

								{/* Mobile: stacks sound+word on line 1, pronunciation+meaning on line 2 */}
								<div className="flex items-center gap-3 flex-wrap lg:contents">
									<span className="text-[11px] text-[var(--text-muted)] lg:col-start-2">
										({a.sound})
									</span>
									<span className="text-[12px] text-[var(--text-secondary)] lg:col-start-3">
										{a.word}
									</span>
									<span className="hidden lg:block text-[11px] text-[var(--text-label)]">
										/{a.pronunciation}/
									</span>
									<span className="hidden lg:block text-[11px] text-[var(--text-muted)]">
										= {a.meaning}
									</span>
								</div>

								{/* Mobile only: second line */}
								<div className="flex items-center gap-3 flex-wrap lg:hidden">
									<span className="text-[11px] text-[var(--text-label)]">
										/{a.pronunciation}/
									</span>
									<span className="text-[11px] text-[var(--text-muted)]">
										= {a.meaning}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<BackNext
				back="/a1"
				next="/a1/pronunciation"
				backLabel="A1 Home"
				nextLabel="Pronunciation Rule"
			/>
		</PageWrapper>
	);
}
