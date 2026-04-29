// ─── Shared Components for Ser & Estar Pages ───────────────────────────────

// Conjugation table row
export function ConjRow({ pronoun, form, meaning }) {
	return (
		<div className="grid grid-cols-[110px_1fr_1fr] items-baseline border-b border-[#1c1c1f] py-3 last:border-0">
			<span className="text-[11px] tracking-[0.14em] uppercase text-[#3f3f46]">
				{pronoun}
			</span>
			<span className="text-[15px] font-semibold text-[#fafafa] tracking-[-0.02em]">
				{form}
			</span>
			<span className="text-[12px] text-[#52525b] tracking-wide">
				{meaning}
			</span>
		</div>
	);
}

// Criteria / usage example block
export function CriteriaBlock({ title, examples }) {
	return (
		<div className="border border-[#1c1c1f] rounded-xl p-5 bg-[#111113]">
			<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
				{title}
			</p>
			<div className="flex flex-col gap-2">
				{examples.map((ex, i) => (
					<div key={i} className="flex flex-col gap-0.5">
						<span className="text-[13px] text-[#a1a1aa]">{ex.en}</span>
						<span className="text-[13px] text-[#fafafa] font-semibold tracking-[-0.01em]">
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
					className="border border-[#1c1c1f] rounded-lg px-3 py-2 bg-[#09090b] flex flex-col gap-0.5 group hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 transition-all duration-150"
				>
					<span className="text-[12px] text-[#fafafa]">{item.es}</span>
					<span className="text-[10px] text-[#3f3f46] tracking-wide">
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
		<h2 className="text-[11px] tracking-[0.16em] uppercase text-[#3f3f46] mb-6">
			{children}
		</h2>
	);
}

// Rule banner
export function RuleBanner({ rule, note }) {
	return (
		<div className="border border-[#f59e0b]/30 bg-[#f59e0b]/5 rounded-xl px-6 py-5">
			<p className="text-[14px] text-[#f59e0b] font-semibold tracking-[-0.01em] mb-1">
				{rule}
			</p>
			{note && (
				<p className="text-[12px] text-[#52525b] tracking-wide">{note}</p>
			)}
		</div>
	);
}
