export default function SectionBox({ eyebrow, title, footer, children }) {
	return (
		<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] overflow-hidden">
			<div className="border-b border-[var(--border)] px-4 sm:px-8 py-5">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-1">
					{eyebrow}
				</p>
				<h2 className="text-xl font-light tracking-[-0.03em] text-[var(--text-primary)]">
					{title}
				</h2>
			</div>
			<div className="px-4 sm:px-8 py-2">{children}</div>
			{footer && (
				<div className="border-t border-[var(--border)] px-4 sm:px-8 py-4">
					{footer}
				</div>
			)}
		</div>
	);
}
