export default function ExampleCard({ ex, activeSlot }) {
	return (
		<div className="border border-[var(--border)] rounded-xl bg-[var(--bg)] p-5">
			<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-4">
				{ex.label}
			</p>
			<div className="flex items-end gap-3 flex-wrap mb-4">
				{ex.parts.map((p, i) => (
					<SlotPill
						key={i}
						slot={p.slot}
						text={p.text}
						dim={activeSlot && p.slot !== activeSlot}
					/>
				))}
			</div>
			<div className="border-t border-[var(--border)] pt-3">
				<p className="text-[12px] text-[var(--text-muted)] italic">
					{ex.translation}
				</p>
				{ex.note && (
					<p className="text-[10px] text-[var(--text-label)] mt-1">{ex.note}</p>
				)}
			</div>
		</div>
	);
}
