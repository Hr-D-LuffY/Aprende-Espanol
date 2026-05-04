export default function PageReference({ reference, topic }) {
	return (
		<div>
			<p className="text-[9px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-2">
				Reference — {reference} · {topic}
			</p>
		</div>
	);
}
