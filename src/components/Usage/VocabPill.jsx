export default function VocabPill({ word, trans }) {
	return (
		<div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface)] transition-colors duration-150 cursor-default group">
			<span className="text-[12px] text-[var(--text-primary)] tracking-[-0.01em] group-hover:text-[var(--accent)] transition-colors">
				{word}
			</span>
			<span className="text-[10px] text-[var(--text-muted)] tracking-[0.06em] text-right">
				{trans}
			</span>
		</div>
	);
}
