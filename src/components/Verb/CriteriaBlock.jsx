export default function CriteriaBlock({ title, examples }) {
	return (
		<div className="border border-[var(--border)] rounded-xl p-5 bg-[var(--surface)]">
			<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] mb-4">
				{title}
			</p>
			<div className="flex flex-col gap-2">
				{examples.map((ex, i) => (
					<div key={i} className="flex flex-col gap-0.5">
						<span className="text-[13px] text-[var(--text-secondary)]">
							{ex.en}
						</span>
						<span className="text-[13px] text-[var(--text-primary)] font-semibold tracking-[-0.01em]">
							{ex.es}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
