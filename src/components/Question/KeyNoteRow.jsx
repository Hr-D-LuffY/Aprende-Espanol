export default function KeyNoteRow({ item }) {
	return (
		<div className="flex flex-col lg:flex-row gap-1 lg:gap-4 py-3 border-b border-[var(--border)] last:border-0">
			<span className="text-[13px] font-light text-[var(--accent)] lg:w-28 flex-shrink-0">
				{item.note}
			</span>
			<span className="text-[12px] text-[var(--text-muted)] leading-relaxed">
				{item.detail}
			</span>
		</div>
	);
}
