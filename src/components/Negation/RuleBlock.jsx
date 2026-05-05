export default function RuleBlock({ rule, example, note }) {
	return (
		<div className="py-4 border-b border-[var(--border)] last:border-0">
			<p className="text-[12px] text-[var(--text-primary)] tracking-[-0.01em] mb-1">
				{rule}
			</p>
			<p className="text-[11px] text-[var(--accent)] mb-1">{example}</p>
			{note && (
				<p className="text-[10px] text-[var(--text-label)] tracking-wide">
					{note}
				</p>
			)}
		</div>
	);
}
