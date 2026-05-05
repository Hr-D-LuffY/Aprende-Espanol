function RuleText({ rule }) {
	if (typeof rule === "string") return <span>{rule}</span>;
	return rule.map((seg, i) => {
		if (seg.strong)
			return (
				<strong key={i} className="text-[var(--text-primary)] font-semibold">
					{seg.text}
				</strong>
			);
		if (seg.em) return <em key={i}>{seg.text}</em>;
		if (seg.accent)
			return (
				<span key={i} className="text-[var(--accent)]">
					{seg.text}
				</span>
			);
		return <span key={i}>{seg.text}</span>;
	});
}

export default function KeyRule({ tag, rule, note, accent = false }) {
	return (
		<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-xl p-4 flex flex-col gap-2">
			<span className="text-[9px] tracking-[0.14em] uppercase text-[var(--accent)] border border-[#f59e0b]/30 rounded px-2 py-1 self-start">
				{tag}
			</span>
			<p className="text-[13px] text-[var(--text-primary)]">
				<RuleText rule={rule} />
			</p>
			{note && (
				<p className="text-[10px] text-[var(--text-muted)] tracking-wide">
					{note}
				</p>
			)}
		</div>
	);
}
