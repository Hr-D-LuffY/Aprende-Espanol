export default function WeekStrip({ today }) {
	const DAYS_SHORT = ["L", "M", "X", "J", "V", "S", "D"];
	return (
		<div className="grid grid-cols-7 gap-1">
			{DAYS_SHORT.map((d, i) => (
				<div key={i} className="flex flex-col items-center gap-1">
					<span className="text-[9px] tracking-[0.1em] text-[var(--text-label)] uppercase">
						{d}
					</span>
					<div
						className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-semibold
                        ${today === i ? "bg-[var(--accent)] text-[var(--accent-text)]" : "text-[var(--text-muted)] border border-[var(--border)]"}`}
					>
						{i + 1}
					</div>
				</div>
			))}
		</div>
	);
}
