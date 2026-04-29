import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { a1Topics, a2Topics } from "../context/GrammarCon";

export default function GrammarPage() {
	const { level } = useParams();
	const navigate = useNavigate();

	// 🔥 state (optional, for UI smoothness)
	const [currentLevel, setCurrentLevel] = useState("A1");

	// 🔥 sync URL → state
	useEffect(() => {
		if (level?.toUpperCase() === "A2") {
			setCurrentLevel("A2");
		} else {
			setCurrentLevel("A1");
		}
	}, [level]);

	const topics = currentLevel === "A1" ? a1Topics : a2Topics;

	// 🔥 when clicking tab → change URL
	const handleTabClick = (lvl) => {
		setCurrentLevel(lvl); // optional (instant UI)
		navigate(`/${lvl.toLowerCase()}/grammar`);
	};

	return (
		<div className="min-h-screen bg-[var(--bg)] font-mono text-[var(--text-primary)]">
			<div className="max-w-5xl mx-auto px-8 py-12 pb-24">
				{/* Header */}
				<p className="text-[10px] tracking-[0.18em] text-[var(--text-label)] uppercase mb-3">
					reference
				</p>
				<h1 className="text-[38px] font-light tracking-[-0.04em] text-[var(--text-primary)] mb-2">
					grammar rules
				</h1>
				<p className="text-[13px] text-[var(--text-muted)] mb-10 tracking-[0.02em]">
					structured notes — click a topic to explore in full detail
				</p>

				{/* Level Tabs */}
				<div className="flex gap-2 mb-3">
					{["A1", "A2"].map((lvl) => (
						<button
							key={lvl}
							onClick={() => handleTabClick(lvl)}
							className={`text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-full border transition-all duration-150 font-mono ${
								currentLevel === lvl ?
									"bg-[var(--accent)] border-[#f59e0b] text-[var(--accent-text)] font-semibold"
								:	"border-[var(--border)] text-[var(--text-muted)] hover:border-[#27272a] hover:text-[var(--text-secondary)]"
							}`}
						>
							{lvl === "A1" ? "A1 — beginner" : "A2 — elementary"}
						</button>
					))}
				</div>

				<p className="text-[10px] tracking-[0.18em] text-[var(--text-label)] uppercase mb-6">
					{level} fundamentals · {topics.length} topics
				</p>

				{/* Topic Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1c1c1f] border border-[var(--border)]">
					{topics.map((topic) => (
						<Link
							key={topic.num}
							to={topic.path}
							className="group bg-[var(--surface)] p-6 hover:bg-[#141416] transition-colors duration-150 relative block"
						>
							{/* Card number */}
							<p className="text-[10px] tracking-[0.12em] text-[#27272a] mb-4">
								{level} · {topic.num}
							</p>

							{/* Title */}
							<h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-2">
								{topic.title}
							</h2>

							{/* Preview */}
							<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-4">
								{topic.preview}
							</p>

							{/* Detail bullets */}
							<ul className="space-y-1 mb-5">
								{topic.details.map((d, i) => (
									<li
										key={i}
										className="text-[11px] text-[var(--text-label)] tracking-[0.02em] flex items-start gap-2"
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
										"text-[var(--accent)] border-[#f59e0b]/30 bg-[var(--accent)]/5"
									:	"text-[var(--text-label)] border-[var(--border)] bg-[var(--bg)]"
								}`}
							>
								{topic.tag}
							</span>

							{/* Arrow */}
							<span className="absolute bottom-5 right-5 text-[#27272a] group-hover:text-[var(--accent)] transition-colors duration-150 text-base">
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
