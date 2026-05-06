export default function DetailPanel({ item }) {
	if (!item) return null;
	return (
		<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] p-7 flex flex-col gap-6 h-full">
			{/* Header */}
			<div className="border-b border-[var(--border)] pb-6">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-3">
					Selected item
				</p>
				<div className="flex items-baseline gap-3">
					<span className="text-4xl font-light tracking-[-0.04em] text-[var(--accent)]">
						{item.es.split(" ")[0]}
					</span>
					{item.es.includes("/") && (
						<>
							<span className="text-[#27272a]">/</span>
							<span className="text-3xl font-light tracking-[-0.03em] text-[var(--text-muted)]">
								{item.es.split("/ ")[1]}
							</span>
						</>
					)}
				</div>
				<p className="text-[13px] text-[var(--text-muted)] mt-2">{item.en}</p>
			</div>

			{/* Metadata */}
			<div className="flex gap-3">
				{[
					{ label: "Person", val: item.person },
					{ label: "Number", val: item.number },
				].map((m) => (
					<div
						key={m.label}
						className="border border-[var(--border)] rounded-lg px-4 py-2.5 bg-[var(--bg)]"
					>
						<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-label)]">
							{m.label}
						</p>
						<p className="text-[12px] text-[var(--text-secondary)] mt-0.5 capitalize">
							{m.val}
						</p>
					</div>
				))}
			</div>

			{/* Note */}
			{item.note && (
				<div className="border-l-2 border-[#f59e0b]/40 pl-4">
					<p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
						{item.note}
					</p>
				</div>
			)}

			{/* Examples */}
			<div>
				<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3">
					Example Q&A
				</p>
				<div className="flex flex-col gap-4">
					{item.examples.map((ex, i) => (
						<div key={i}>
							<p className="text-[12px] text-[var(--text-label)]">{ex.q}</p>
							<p className="text-[13px] text-[var(--text-secondary)] mt-1">
								{ex.a}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
