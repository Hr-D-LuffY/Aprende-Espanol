export default function LocationRow({ item }) {
	return (
		<div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_120px_1fr] gap-2 sm:gap-4 items-start sm:items-center py-3 border-b border-[var(--border)] last:border-0">
			<span className="text-[18px] font-light text-[var(--accent)]">
				{item.spanish}
			</span>
			<div className="sm:contents flex flex-col gap-0.5">
				<span className="text-[13px] text-[var(--text-secondary)]">
					{item.meaning}
				</span>
				<span className="text-[11px] text-[var(--text-label)]">
					{item.note}
				</span>
			</div>
		</div>
	);
}
