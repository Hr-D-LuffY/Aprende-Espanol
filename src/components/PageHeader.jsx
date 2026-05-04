export default function PageHeader({ title, es, description }) {
	return (
		<div>
			<h1 className="text-4xl sm:text-6xl font-light tracking-[-0.04em] text-[var(--text-primary)] mb-3">
				{title} -
				<span className="text-2xl sm:text-4xl font-light leading-[1.04] tracking-[-0.04em] text-[var(--text-label)] italic">
					{es}
				</span>
			</h1>
			<p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-md tracking-wide">
				{description}
			</p>
		</div>
	);
}
