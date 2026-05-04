export default function CategoryCard({ category, count, onClick }) {
	return (
		<button
			onClick={onClick}
			className="group border border-[var(--border)] rounded-xl bg-[var(--surface)] p-5 text-left hover:border-[#27272a] hover:bg-[var(--surface)] transition-all duration-150 cursor-pointer w-full relative"
		>
			<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-3">
				category
			</p>
			<p className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-1 capitalize leading-tight">
				{category}
			</p>
			<p className="text-[11px] text-[var(--text-muted)] tracking-wide">
				{count} {count === 1 ? "word" : "words"}
			</p>
			<span className="absolute top-5 right-5 text-[#27272a] group-hover:text-[var(--accent)] transition-colors text-sm">
				→
			</span>
		</button>
	);
}
