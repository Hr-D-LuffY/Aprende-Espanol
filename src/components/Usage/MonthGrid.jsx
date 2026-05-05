export default function MonthGrid({ active, onSelect }) {
	const MONTHS_SHORT = [
		"ene",
		"feb",
		"mar",
		"abr",
		"may",
		"jun",
		"jul",
		"ago",
		"sep",
		"oct",
		"nov",
		"dic",
	];
	return (
		<div className="grid grid-cols-4 gap-1.5 sm:gap-2">
			{MONTHS_SHORT.map((m, i) => (
				<button
					key={i}
					onClick={() => onSelect(i)}
					className={`py-1.5 sm:py-2 px-1 rounded-lg text-[10px] sm:text-[11px] font-semibold tracking-wide border transition-all duration-150 cursor-pointer
                        ${
													active === i ?
														"bg-[var(--accent)] text-[var(--accent-text)] border-[#f59e0b]"
													:	"text-[var(--text-muted)] border-[var(--border)] hover:border-[#27272a] hover:text-[var(--text-secondary)]"
												}`}
				>
					{m}
				</button>
			))}
		</div>
	);
}
