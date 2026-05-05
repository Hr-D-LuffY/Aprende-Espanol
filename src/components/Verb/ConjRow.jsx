export default function ConjRow({ pronoun, form, meaning }) {
	return (
		<div className="border-b border-[var(--border)] py-3 last:border-0">
			<div className="grid grid-cols-3 items-baseline">
				<span className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--text-label)]">
					{pronoun}
				</span>
				<span className="text-[13px] sm:text-[15px] font-semibold text-[var(--text-primary)] tracking-[-0.02em]">
					{form}
				</span>
				<span className="text-[11px] sm:text-[12px] text-[var(--text-muted)] tracking-wide">
					{meaning}
				</span>
			</div>
		</div>
	);
}
