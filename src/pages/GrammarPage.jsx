import { useState } from "react";
import { Link } from "react-router-dom";
import { a1Topics, a2Topics } from "../context/GrammarCon";

export default function GrammarPage() {
	const [level, setLevel] = useState("A1");
	const topics = level === "A1" ? a1Topics : a2Topics;

	return (
		<div className="min-h-screen bg-[#09090b] font-mono text-[#fafafa]">
			{/* Navbar */}
			<nav className="flex items-center justify-between px-8 h-14 border-b border-[#1c1c1f]">
				<div className="flex items-center gap-3">
					<span className="bg-[#f59e0b] text-[#09090b] text-[11px] font-semibold px-2 py-1 tracking-[0.05em]">
						ES
					</span>
					<span className="text-[#a1a1aa] text-[13px] tracking-[0.08em]">
						spanish·notes
					</span>
				</div>
				<div className="flex gap-8">
					{["vocab", "verbs", "grammar", "practice"].map((item) => (
						<Link
							key={item}
							to={`/${item}`}
							className={`text-[12px] tracking-[0.12em] transition-colors duration-150 ${
								item === "grammar" ? "text-[#fafafa]" : (
									"text-[#52525b] hover:text-[#a1a1aa]"
								)
							}`}
						>
							{item}
						</Link>
					))}
				</div>
			</nav>

			<div className="max-w-5xl mx-auto px-8 py-12 pb-24">
				{/* Header */}
				<p className="text-[10px] tracking-[0.18em] text-[#3f3f46] uppercase mb-3">
					reference
				</p>
				<h1 className="text-[38px] font-light tracking-[-0.04em] text-[#fafafa] mb-2">
					grammar rules
				</h1>
				<p className="text-[13px] text-[#52525b] mb-10 tracking-[0.02em]">
					structured notes — click a topic to explore in full detail
				</p>

				{/* Level Tabs */}
				<div className="flex gap-2 mb-3">
					{["A1", "A2"].map((lvl) => (
						<button
							key={lvl}
							onClick={() => setLevel(lvl)}
							className={`text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-full border transition-all duration-150 font-mono ${
								level === lvl ?
									"bg-[#f59e0b] border-[#f59e0b] text-[#09090b] font-semibold"
								:	"border-[#1c1c1f] text-[#52525b] hover:border-[#27272a] hover:text-[#a1a1aa]"
							}`}
						>
							{lvl === "A1" ? "A1 — beginner" : "A2 — elementary"}
						</button>
					))}
				</div>

				<p className="text-[10px] tracking-[0.18em] text-[#3f3f46] uppercase mb-6">
					{level} fundamentals · {topics.length} topics
				</p>

				{/* Topic Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1c1c1f] border border-[#1c1c1f]">
					{topics.map((topic) => (
						<Link
							key={topic.num}
							to={topic.path}
							className="group bg-[#111113] p-6 hover:bg-[#141416] transition-colors duration-150 relative block"
						>
							{/* Card number */}
							<p className="text-[10px] tracking-[0.12em] text-[#27272a] mb-4">
								{level} · {topic.num}
							</p>

							{/* Title */}
							<h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[#fafafa] mb-2">
								{topic.title}
							</h2>

							{/* Preview */}
							<p className="text-[12px] text-[#52525b] leading-relaxed mb-4">
								{topic.preview}
							</p>

							{/* Detail bullets */}
							<ul className="space-y-1 mb-5">
								{topic.details.map((d, i) => (
									<li
										key={i}
										className="text-[11px] text-[#3f3f46] tracking-[0.02em] flex items-start gap-2"
									>
										<span className="text-[#1c1c1f] mt-px">—</span>
										<span>{d}</span>
									</li>
								))}
							</ul>

							{/* Tag */}
							<span
								className={`inline-block text-[10px] tracking-[0.08em] px-2 py-0.5 border ${
									topic.important ?
										"text-[#f59e0b] border-[#f59e0b]/30 bg-[#f59e0b]/5"
									:	"text-[#3f3f46] border-[#1c1c1f] bg-[#09090b]"
								}`}
							>
								{topic.tag}
							</span>

							{/* Arrow */}
							<span className="absolute bottom-5 right-5 text-[#27272a] group-hover:text-[#f59e0b] transition-colors duration-150 text-base">
								→
							</span>
						</Link>
					))}
				</div>

				{/* Footer */}
				<p className="text-center text-[#27272a] text-[12px] tracking-[0.05em] mt-16">
					Study hard 💪
				</p>
			</div>
		</div>
	);
}
