export default function SidebarButton({ rule, isActive, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`text-left px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer whitespace-nowrap lg:whitespace-normal ${
				isActive ?
					"bg-[var(--accent)]/10 border-[#f59e0b]/30 text-[var(--text-primary)]"
				:	"bg-transparent border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:border-[var(--border)]"
			}`}
		>
			<p className="text-[12px] leading-snug">{rule.title}</p>
			<p
				className="text-[9px] tracking-[0.1em] uppercase mt-0.5"
				style={{ color: isActive ? rule.tagColor : "#3f3f46" }}
			>
				{rule.tag}
			</p>
		</button>
	);
}
