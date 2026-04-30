export default function PageHeader({ title, description }) {
	return (
		<div>
			<div className="flex items-baseline gap-4 mb-3">
				<h1 className="text-6xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
					{title}
				</h1>
			</div>
			<p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-md tracking-wide">
				{description}
			</p>
		</div>
	);
}
