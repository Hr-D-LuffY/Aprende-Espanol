import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LevelRoadMap from "../components/LevelRoadMap";
import { LEVELS } from "../components/LevelRoadMap";

const QUICK_LINKS = [
	{
		label: "Regular Verbs",
		sub: "-AR, -ER, -IR",
		to: "/verbs?category=regular",
	},
	{
		label: "GO Verbs",
		sub: "yo: tengo, hago...",
		to: "/verbs?category=go-verb",
	},
	{
		label: "Stem-Changing",
		sub: "e→ie, o→ue, e→i",
		to: "/verbs?category=stem-ie",
	},
	{ label: "Vocabulary", sub: "By topic", to: "/vocabulary" },
	{
		label: "Ser vs Estar",
		sub: "Grammar rule",
		to: "/grammar?section=ser-estar",
	},
	{ label: "Flashcards", sub: "Quick review", to: "/flashcards" },
];

export default function LandingPage() {
	const [activeLevel, setActiveLevel] = useState(1);

	const level = LEVELS[activeLevel];

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			{/* ── HERO ── */}
			<section className="max-w-5xl mx-auto px-8 pt-28 pb-20">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">
					{/* Left */}
					<div>
						<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-5">
							Personal study dashboard
						</p>
						<h1 className="text-6xl font-light leading-[1.04] tracking-[-0.04em] text-[#fafafa] mb-6">
							Your Spanish,
							<br />
							<span className="text-[#3f3f46] italic">your pace.</span>
						</h1>
						<p className="text-[13px] text-[#52525b] leading-relaxed max-w-md mb-10 tracking-wide">
							Build your Spanish step by step — from simple words to real
							conversations. Stay consistent and watch yourself improve every
							day.
						</p>
						<div className="flex items-center gap-4">
							<Link
								to="/a1"
								className="bg-[#f59e0b] text-[#09090b] text-[13px] font-semibold px-5 py-2.5 rounded-lg tracking-wide hover:bg-[#fbbf24] transition-colors no-underline"
							>
								Lets Start →
							</Link>
							<Link
								to="/vocabulary"
								className="text-[#52525b] text-[13px] tracking-wide hover:text-[#71717a] transition-colors no-underline"
							>
								Browse vocab
							</Link>
						</div>
					</div>

					{/* Level Card */}
					<div className="border border-[#1c1c1f] rounded-2xl p-8 bg-[#111113]">
						<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-5">
							Your current target
						</p>
						<div className="flex items-baseline gap-3 mb-1">
							<span
								className="text-6xl font-extralight tracking-[-0.05em] leading-none transition-colors duration-300"
								style={{ color: level.color }}
							>
								{level.code}
							</span>
							<span className="text-[13px] text-[#52525b]">{level.label}</span>
						</div>
						<p className="text-[12px] text-[#3f3f46] mb-6 leading-relaxed">
							{level.desc}
						</p>

						<div className="flex flex-wrap gap-2">
							{LEVELS.map((l, i) => (
								<button
									key={l.code}
									onClick={() => setActiveLevel(i)}
									className="px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest border transition-all duration-200 cursor-pointer"
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

			{/* ── QUICK JUMP ── */}
			<section className="border-t border-[#1c1c1f] py-20 px-8">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-2xl font-light tracking-[-0.03em] text-[#fafafa] mb-8">
						Jump in
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#1c1c1f] rounded-xl overflow-hidden">
						{QUICK_LINKS.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="group bg-[#09090b] border border-[#1c1c1f] p-6 flex flex-col gap-1 relative no-underline hover:bg-[#111113] hover:border-[#27272a] transition-all duration-150"
							>
								<p className="text-[14px] text-[#a1a1aa] font-normal tracking-[-0.01em]">
									{link.label}
								</p>
								<p className="text-[11px] text-[#3f3f46] tracking-wide">
									{link.sub}
								</p>
								<span className="absolute top-6 right-6 text-[#27272a] text-sm group-hover:text-[#f59e0b] transition-colors">
									→
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
