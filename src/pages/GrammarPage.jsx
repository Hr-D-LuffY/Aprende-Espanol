import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { a1Topics, a2Topics } from "../context/GrammarCon";

import PageWrapper from "../components/PageWrapper.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function GrammarPage() {
	const { level } = useParams();
	const navigate = useNavigate();

	const [currentLevel, setCurrentLevel] = useState("A1");

	useEffect(() => {
		if (level?.toUpperCase() === "A2") {
			setCurrentLevel("A2");
		} else {
			setCurrentLevel("A1");
		}
	}, [level]);

	const topics = currentLevel === "A1" ? a1Topics : a2Topics;

	const handleTabClick = (lvl) => {
		setCurrentLevel(lvl);
		navigate(`/${lvl.toLowerCase()}/grammar`);
	};

	// Pad topics to a multiple of 3 so empty cells match bg
	const cols = 3;
	const remainder = topics.length % cols;
	const padCount = remainder === 0 ? 0 : cols - remainder;

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageHeader
					title="Grammar Rules"
					es="reglas gramaticales"
					description="structured notes — click a topic to explore in full detail →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Level Tabs */}
			<div className="flex gap-2 mb-3">
				{["A1", "A2"].map((lvl) => (
					<button
						key={lvl}
						onClick={() => handleTabClick(lvl)}
						className={`text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-full border transition-all duration-150 font-mono ${
							currentLevel === lvl ?
								"bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-text)] font-semibold"
							:	"border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-secondary)]"
						}`}
					>
						{lvl === "A1" ? "A1 — beginner" : "A2 — elementary"}
					</button>
				))}
			</div>

			<p className="text-[10px] tracking-[0.18em] text-[var(--text-label)] uppercase mb-6">
				{currentLevel} fundamentals · {topics.length} topics
			</p>

			{/* Topic Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
				{topics.map((topic) => (
					<TopicCard key={topic.num} topic={topic} level={currentLevel} />
				))}

				{/* Pad empty cells to fill last row — invisible, just bg color */}
				{Array.from({ length: padCount }).map((_, i) => (
					<div key={`pad-${i}`} className="bg-[var(--bg)]" />
				))}
			</div>
		</PageWrapper>
	);
}

function TopicCard({ topic, level }) {
	return (
		<Link
			to={topic.path}
			className="group bg-[var(--bg)] p-6 hover:bg-[var(--surface)] transition-colors duration-150 relative block"
		>
			<p className="text-[10px] tracking-[0.12em] text-[var(--text-ghost)] mb-4">
				{level} · {topic.num}
			</p>

			<h2 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-2">
				{topic.title}
			</h2>

			<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-4">
				{topic.preview}
			</p>

			<ul className="space-y-1 mb-5">
				{topic.details.map((d, i) => (
					<li
						key={i}
						className="text-[11px] text-[var(--text-label)] tracking-[0.02em] flex items-start gap-2"
					>
						<span className="text-[var(--border)] mt-px">—</span>
						<span>{d}</span>
					</li>
				))}
			</ul>

			<span
				className={`inline-block text-[10px] tracking-[0.08em] px-2 py-0.5 border ${
					topic.important ?
						"text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/5"
					:	"text-[var(--text-label)] border-[var(--border)] bg-[var(--bg)]"
				}`}
			>
				{topic.tag}
			</span>

			<span className="absolute bottom-5 right-5 text-[var(--text-ghost)] group-hover:text-[var(--accent)] transition-colors duration-150 text-base">
				→
			</span>
		</Link>
	);
}
