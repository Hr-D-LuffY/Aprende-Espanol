import { useState } from "react";
import { Link } from "react-router-dom";
import { ALPHABET, SPECIAL } from "../context/alphabetCon";

export default function AlphabetPage() {
	const [active, setActive] = useState(null);

	const filtered = ALPHABET.filter(
		(a) =>
			a.letter.toLowerCase() || a.word.toLowerCase() || a.meaning.toLowerCase(),
	);

	const selected =
		active !== null ?
			ALPHABET.find((a) => a.letter === active) ||
			SPECIAL.find((a) => a.letters === active)
		:	null;

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
						Reference — A1 · Foundation
					</p>
					<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
						The Spanish Alphabet
					</h1>
					<p className="text-[13px] text-[#52525b] leading-relaxed max-w-lg">
						27 letters. Click any to see pronunciation, an example word, and a
						study note.
					</p>
				</div>

				{/* Main grid + detail panel */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
					{/* Letter grid */}
					<div>
						<div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mb-6">
							{filtered.map((a) => (
								<button
									key={a.letter}
									onClick={() =>
										setActive(active === a.letter ? null : a.letter)
									}
									className={`
                    group relative flex flex-col items-center justify-center
                    aspect-square rounded-xl border transition-all duration-150 cursor-pointer
                    ${
											active === a.letter ?
												"bg-[#f59e0b]/10 border-[#f59e0b]/40 text-[#f59e0b]"
											:	"bg-[#111113] border-[#1c1c1f] text-[#a1a1aa] hover:border-[#27272a] hover:bg-[#18181b] hover:text-[#fafafa]"
										}
                    ${a.letter === "Ñ" ? "col-span-1" : ""}
                  `}
								>
									<span className="text-xl font-light tracking-tight">
										{a.letter}
									</span>
									<span
										className={`text-[9px] tracking-wide mt-0.5 ${active === a.letter ? "text-[#f59e0b]/70" : "text-[#3f3f46]"}`}
									>
										{a.sound}
									</span>
								</button>
							))}
						</div>

						{/* Special combos */}
						<div className="border-t border-[#1c1c1f] pt-6">
							<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-3">
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
													"bg-[#f59e0b]/10 border-[#f59e0b]/40 text-[#f59e0b]"
												:	"bg-[#111113] border-[#1c1c1f] text-[#a1a1aa] hover:border-[#27272a] hover:bg-[#18181b] hover:text-[#fafafa]"
											}
                    `}
									>
										<span className="text-lg font-light">{s.letters}</span>
										<span
											className={`text-[10px] ${active === s.letters ? "text-[#f59e0b]/70" : "text-[#3f3f46]"}`}
										>
											{s.sound}
										</span>
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Detail panel */}
					<div className="lg:sticky lg:top-20">
						{selected ?
							<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] overflow-hidden">
								{/* Big letter */}
								<div className="border-b border-[#1c1c1f] px-6 py-8 flex items-end gap-4">
									<span className="text-7xl font-extralight tracking-[-0.05em] text-[#f59e0b] leading-none">
										{selected.letter || selected.letters}
									</span>
									<div className="pb-1">
										<p className="text-[11px] text-[#3f3f46] tracking-[0.1em] uppercase mb-0.5">
											sounds like
										</p>
										<p className="text-[18px] font-light text-[#a1a1aa] tracking-wide">
											"{selected.sound}"
										</p>
									</div>
								</div>

								{/* Word example */}
								<div className="px-6 py-5 border-b border-[#1c1c1f]">
									<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3">
										example word
									</p>
									<p className="text-[22px] font-light text-[#fafafa] tracking-tight mb-1">
										{selected.word}
									</p>
									<p className="text-[12px] text-[#52525b] mb-1">
										({selected.pronunciation})
									</p>
									<p className="text-[12px] text-[#f59e0b]/80">
										= {selected.meaning}
									</p>
								</div>

								{/* Study note */}
								<div className="px-6 py-5">
									<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
										study note
									</p>
									<p className="text-[12px] text-[#52525b] leading-relaxed">
										{selected.note}
									</p>
								</div>
							</div>
						:	<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] px-6 py-10 flex flex-col items-center justify-center text-center gap-3">
								<span className="text-4xl font-extralight text-[#27272a]">
									A–Z
								</span>
								<p className="text-[12px] text-[#3f3f46] tracking-wide">
									Click any letter to see its pronunciation and an example
								</p>
							</div>
						}

						{/* Quick stats */}
						<div className="grid grid-cols-3 gap-2 mt-3">
							<div className="bg-[#111113] border border-[#1c1c1f] rounded-xl p-3 text-center">
								<p className="text-lg font-light text-[#fafafa]">27</p>
								<p className="text-[9px] text-[#3f3f46] tracking-wide uppercase mt-0.5">
									letters
								</p>
							</div>
							<div className="bg-[#111113] border border-[#1c1c1f] rounded-xl p-3 text-center">
								<p className="text-lg font-light text-[#fafafa]">3</p>
								<p className="text-[9px] text-[#3f3f46] tracking-wide uppercase mt-0.5">
									combos
								</p>
							</div>
							<div className="bg-[#111113] border border-[#1c1c1f] rounded-xl p-3 text-center">
								<p className="text-lg font-light text-[#f59e0b]">1</p>
								<p className="text-[9px] text-[#3f3f46] tracking-wide uppercase mt-0.5">
									unique (Ñ)
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* All letters — compact list view */}
				<div className="mt-16 border-t border-[#1c1c1f] pt-12">
					<h2 className="text-xl font-light tracking-[-0.03em] text-[#fafafa] mb-8">
						Full reference
					</h2>
					<div className="flex flex-col gap-0">
						{ALPHABET.map((a, i) => (
							<div
								key={a.letter}
								className="grid grid-cols-[40px_80px_1fr_1fr_1fr] gap-4 py-3 border-b border-[#1c1c1f] items-center group hover:bg-[#111113] px-3 -mx-3 rounded-lg transition-colors cursor-pointer"
								onClick={() => {
									setActive(a.letter);
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
							>
								<span className="text-[18px] font-light text-[#f59e0b] group-hover:scale-110 transition-transform inline-block">
									{a.letter}
								</span>
								<span className="text-[11px] text-[#52525b]">({a.sound})</span>
								<span className="text-[12px] text-[#a1a1aa]">{a.word}</span>
								<span className="text-[11px] text-[#3f3f46]">
									/{a.pronunciation}/
								</span>
								<span className="text-[11px] text-[#52525b]">
									= {a.meaning}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Pronunciation rules link */}
				<div className="mt-16 border-t border-[#1c1c1f] pt-10">
					<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
						Next step
					</p>
					<Link
						to="/a1/pronunciation"
						className="flex items-center justify-between border border-[#1c1c1f] bg-[#111113] hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 rounded-2xl px-7 py-6 no-underline transition-all duration-150 group"
					>
						<div>
							<p className="text-[18px] font-light text-[#fafafa] tracking-[-0.02em] mb-1">
								Pronunciation Rules
							</p>
							<p className="text-[12px] text-[#3f3f46]">
								9 rules — vowels, silent H, C & G sounds, the trill, accent
								marks and more
							</p>
						</div>
						<span className="text-[#27272a] text-xl group-hover:text-[#f59e0b] transition-colors ml-6">
							→
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
