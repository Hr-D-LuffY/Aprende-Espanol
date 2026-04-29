// ─── Shared Components for Ser & Estar Pages ───────────────────────────────

// Conjugation table row
export function ConjRow({ pronoun, form, meaning }) {
	return (
		<div className="grid grid-cols-[110px_1fr_1fr] items-baseline border-b border-[var(--border)] py-3 last:border-0">
			<span className="text-[11px] tracking-[0.14em] uppercase text-[var(--text-label)]">
				{pronoun}
			</span>
			<span className="text-[15px] font-semibold text-[var(--text-primary)] tracking-[-0.02em]">
				{form}
			</span>
			<span className="text-[12px] text-[var(--text-muted)] tracking-wide">
				{meaning}
			</span>
		</div>
	);
}

// Criteria / usage example block
export function CriteriaBlock({ title, examples }) {
	return (
		<div className="border border-[var(--border)] rounded-xl p-5 bg-[var(--surface)]">
			<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
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

// Vocabulary pill grid
export function VocabGrid({ items }) {
	return (
		<div className="flex flex-wrap gap-2">
			{items.map((item, i) => (
				<div
					key={i}
					className="border border-[var(--border)] rounded-lg px-3 py-2 bg-[var(--bg)] flex flex-col gap-0.5 group hover:border-[#f59e0b]/30 hover:bg-[var(--accent)]/5 transition-all duration-150"
				>
					<span className="text-[12px] text-[var(--text-primary)]">
						{item.es}
					</span>
					<span className="text-[10px] text-[var(--text-label)] tracking-wide">
						{item.en}
					</span>
				</div>
			))}
		</div>
	);
}

// Section heading
export function SectionHeading({ children }) {
	return (
		<h2 className="text-[11px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-6">
			{children}
		</h2>
	);
}

// Rule banner
export function RuleBanner({ rule, note }) {
	return (
		<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-xl px-6 py-5">
			<p className="text-[14px] text-[var(--accent)] font-semibold tracking-[-0.01em] mb-1">
				{rule}
			</p>
			{note && (
				<p className="text-[12px] text-[var(--text-muted)] tracking-wide">
					{note}
				</p>
			)}
		</div>
	);
}
