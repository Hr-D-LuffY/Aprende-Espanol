export default function SlotCard({ slot, isActive, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
				isActive ?
					"bg-[var(--surface)] border-[#27272a]"
				:	"bg-transparent border-[var(--border)] hover:bg-[var(--surface)] hover:border-[#27272a]"
			}`}
		>
			<div className="flex items-center gap-3 mb-3">
				<span
					className="text-[28px] font-extralight leading-none"
					style={{ color: slot.color }}
				>
					{slot.abbr}
				</span>
				<span className="text-[12px] text-[var(--text-secondary)]">
					{slot.label}
				</span>
			</div>
			<p className="text-[11px] text-[var(--text-muted)] leading-relaxed mb-3">
				{slot.desc}
			</p>
			{isActive && (
				<ul className="flex flex-col gap-1.5 border-t border-[var(--border)] pt-3">
					{slot.notes.map((n, i) => (
						<li key={i} className="flex items-start gap-2">
							<span
								style={{ color: slot.color + "60" }}
								className="text-[10px] mt-0.5"
							>
								→
							</span>
							<span className="text-[11px] text-[var(--text-label)] leading-relaxed">
								{n}
							</span>
						</li>
					))}
				</ul>
			)}
		</button>
	);
}
