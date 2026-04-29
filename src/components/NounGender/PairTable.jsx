import GenderDot from "./GenderDot";

export default function PairTable({ pairs, pattern, description }) {
	return (
		<div className="mb-7">
			<div className="flex items-baseline gap-3 mb-3">
				<span className="text-[10px] tracking-[0.14em] text-[var(--text-label)] uppercase">
					{pattern}
				</span>
				<span className="text-[13px] font-semibold tracking-[-0.01em] text-[var(--text-secondary)]">
					{description}
				</span>
			</div>
			<div className="border border-[var(--border)] rounded-xl overflow-hidden">
				<div className="grid grid-cols-4 px-4 py-2 border-b border-[var(--border)]">
					<span className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)]">
						<GenderDot gender="M" />
						Masculine
					</span>
					<span />
					<span className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)]">
						<GenderDot gender="F" />
						Feminine
					</span>
					<span className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)]">
						Meaning
					</span>
				</div>
				{pairs.map((p) => (
					<div
						key={p.m}
						className="grid grid-cols-4 px-4 py-3 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface)] transition-colors duration-150"
					>
						<span className="text-[12px] text-[#60a5fa]">{p.m}</span>
						<span className="text-[#27272a] text-[12px]">→</span>
						<span className="text-[12px] text-[#f472b6]">{p.f}</span>
						<span className="text-[12px] text-[var(--text-muted)]">{p.en}</span>
					</div>
				))}
			</div>
		</div>
	);
}
