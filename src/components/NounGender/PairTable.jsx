// PairTable.jsx
// Renders masculine/feminine word pairs in a responsive grid table.
// Desktop: 2 columns side by side. Mobile: stacked single column pairs.

export default function PairTable({ pairs, pattern, description }) {
	return (
		<div className="mt-6 border border-[var(--border)] rounded-xl overflow-hidden">
			{/* Header */}
			<div className="px-4 py-2.5 bg-[var(--surface)] border-b border-[var(--border)] flex items-center gap-3">
				<span className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]">
					{pattern}
				</span>
				<span className="text-[10px] text-[var(--text-muted)] tracking-wide">
					— {description}
				</span>
			</div>

			{/* Column labels — hidden on mobile, visible on sm+ */}
			<div className="hidden sm:grid sm:grid-cols-2 gap-px bg-[#1c1c1f]">
				<div className="bg-[var(--surface)] px-4 py-2">
					<span className="text-[10px] tracking-[0.12em] uppercase text-[#60a5fa]/60">
						Masculine
					</span>
				</div>
				<div className="bg-[var(--surface)] px-4 py-2">
					<span className="text-[10px] tracking-[0.12em] uppercase text-[#f472b6]/60">
						Feminine
					</span>
				</div>
			</div>

			{/* Rows */}
			<div className="divide-y divide-[#1c1c1f]">
				{pairs.map((pair) => (
					<div
						key={pair.m?.es ?? pair.es}
						// MOBILE: stack M/F vertically. Desktop: side by side.
						className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1c1c1f]"
					>
						{/* Masculine cell */}
						<div className="bg-[var(--bg)] px-4 py-3 hover:bg-[var(--surface)] transition-colors duration-150">
							{/* Mobile label */}
							<span className="sm:hidden text-[9px] tracking-[0.12em] uppercase text-[#60a5fa]/50 block mb-1">
								Masculine
							</span>
							<p className="text-[13px] text-[var(--text-primary)]">
								{pair.m?.es ?? pair.es}
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-[0.04em]">
								{pair.m?.pron ?? pair.pron}
							</p>
							<p className="text-[11px] text-[var(--text-muted)]">
								{pair.m?.en ?? pair.en}
							</p>
						</div>

						{/* Feminine cell */}
						<div className="bg-[var(--bg)] px-4 py-3 hover:bg-[var(--surface)] transition-colors duration-150">
							{/* Mobile label */}
							<span className="sm:hidden text-[9px] tracking-[0.12em] uppercase text-[#f472b6]/50 block mb-1">
								Feminine
							</span>
							<p className="text-[13px] text-[var(--text-primary)]">
								{pair.f?.es ?? pair.f}
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-[0.04em]">
								{pair.f?.pron ?? ""}
							</p>
							<p className="text-[11px] text-[var(--text-muted)]">
								{pair.f?.en ?? ""}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
