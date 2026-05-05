import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LevelRoadMap from "../components/LevelRoadMap";
import { LEVELS } from "../components/LevelRoadMap";
import PageWrapper from "../components/PageWrapper";

export default function LandingPage() {
	const [activeLevel, setActiveLevel] = useState(0);

	const level = LEVELS[activeLevel];

	return (
		<PageWrapper>
			{/* ── HERO ── */}
			<section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-10">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
					{/* Left */}
					<div>
						<p className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-4 sm:mb-5">
							Personal study dashboard
						</p>

						<h1 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.1] sm:leading-[1.04] tracking-[-0.04em] text-[var(--text-primary)] mb-5 sm:mb-6">
							Your Spanish,
							<br />
							<span className="text-[var(--text-label)] italic">
								your pace.
							</span>
						</h1>

						<p className="text-[12px] sm:text-[13px] text-[var(--text-muted)] leading-relaxed max-w-md mb-8 sm:mb-10 tracking-wide">
							Build your Spanish step by step — from simple words to real
							conversations. Stay consistent and watch yourself improve every
							day.
						</p>

						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
							<Link
								to="/a1"
								className="bg-[var(--accent)] text-[var(--accent-text)] text-[12px] sm:text-[13px] font-semibold px-4 sm:px-5 py-2.5 rounded-lg tracking-wide hover:bg-[#fbbf24] transition-colors no-underline w-full sm:w-auto text-center"
							>
								Lets Start →
							</Link>

							<Link
								to="/vocabulary"
								className="text-[var(--text-muted)] text-[12px] sm:text-[13px] tracking-wide hover:text-[#71717a] transition-colors no-underline"
							>
								Browse vocab
							</Link>
						</div>
					</div>

					{/* Level Card */}
					<div className="border border-[var(--border)] rounded-2xl p-5 sm:p-6 md:p-8 bg-[var(--surface)]">
						<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4 sm:mb-5">
							Your current target
						</p>

						<div className="flex items-baseline gap-3 mb-1">
							<span
								className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.05em] leading-none transition-colors duration-300"
								style={{ color: level.color }}
							>
								{level.code}
							</span>
							<span className="text-[12px] sm:text-[13px] text-[var(--text-muted)]">
								{level.label}
							</span>
						</div>

						<p className="text-[11px] sm:text-[12px] text-[var(--text-label)] mb-5 sm:mb-6 leading-relaxed">
							{level.desc}
						</p>

						<div className="flex flex-wrap gap-2">
							{LEVELS.map((l, i) => (
								<button
									key={l.code}
									onClick={() => setActiveLevel(i)}
									className="px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest border transition-all duration-200 cursor-pointer"
									style={
										activeLevel === i ?
											{
												background: l.color,
												color: l.textColor,
												borderColor: l.color,
											}
										:	{
												background: "transparent",
												color: "#52525b",
												borderColor: "#27272a",
											}
									}
								>
									{l.code}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── LEVEL ROADMAP ── */}
			<LevelRoadMap />
		</PageWrapper>
	);
}
