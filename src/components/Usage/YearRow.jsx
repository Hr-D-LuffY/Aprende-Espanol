export default function YearRow({ n, es }) {
	return (
		<div className="group flex items-start border-b border-[#0f0f11] hover:bg-[var(--surface)] transition-colors duration-100">
			<span className="w-14 sm:w-20 shrink-0 text-[13px] font-semibold text-[#e879f9] py-3 pl-3 sm:pl-5 tracking-[-0.01em]">
				{n}
			</span>
			<div className="flex-1 py-3 pr-3">
				<p className="text-[13px] text-[var(--text-primary)]">{es}</p>
			</div>
		</div>
	);
}
