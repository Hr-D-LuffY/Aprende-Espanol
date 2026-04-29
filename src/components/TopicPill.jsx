export default function TopicPill({ label }) {
	return (
		<span className="px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase border border-[var(--border)] text-[var(--text-muted)] cursor-default transition-all duration-150 hover:border-[#f59e0b]/30 hover:text-[var(--accent)] hover:bg-[var(--accent)]/5">
			{label}
		</span>
	);
}
