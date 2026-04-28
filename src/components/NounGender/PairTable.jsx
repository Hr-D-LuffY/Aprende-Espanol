import GenderDot from "./GenderDot";

export default function PairTable({ pairs, pattern, description }) {
	return (
		<div className="mb-7">
			<div className="flex items-baseline gap-3 mb-3">
				<span className="text-[10px] tracking-[0.14em] text-[#3f3f46] uppercase">
					{pattern}
				</span>
				<span className="text-[13px] font-semibold tracking-[-0.01em] text-[#a1a1aa]">
					{description}
				</span>
			</div>
			<div className="border border-[#1c1c1f] rounded-xl overflow-hidden">
				<div className="grid grid-cols-4 px-4 py-2 border-b border-[#1c1c1f]">
					<span className="text-[10px] tracking-[0.12em] uppercase text-[#3f3f46]">
						<GenderDot gender="M" />
						Masculine
					</span>
					<span />
					<span className="text-[10px] tracking-[0.12em] uppercase text-[#3f3f46]">
						<GenderDot gender="F" />
						Feminine
					</span>
					<span className="text-[10px] tracking-[0.12em] uppercase text-[#3f3f46]">
						Meaning
					</span>
				</div>
				{pairs.map((p) => (
					<div
						key={p.m}
						className="grid grid-cols-4 px-4 py-3 border-b border-[#1c1c1f] last:border-b-0 hover:bg-[#111113] transition-colors duration-150"
					>
						<span className="text-[12px] text-[#60a5fa]">{p.m}</span>
						<span className="text-[#27272a] text-[12px]">→</span>
						<span className="text-[12px] text-[#f472b6]">{p.f}</span>
						<span className="text-[12px] text-[#52525b]">{p.en}</span>
					</div>
				))}
			</div>
		</div>
	);
}
