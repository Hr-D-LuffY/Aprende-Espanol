const numColor = (n) => {
	if (n <= 10) return "text-[#f59e0b]";
	if (n <= 20) return "text-[#f87171]";
	if (n <= 29) return "text-[#a78bfa]";
	if (n <= 100) return "text-[#4ade80]";
	if (n <= 999) return "text-[#38bdf8]";
	return "text-[#e879f9]";
};

export default function NumberRow({ n, es, pron }) {
	return (
		<div className="group flex items-baseline border-b border-[#0f0f11] hover:bg-[var(--surface)] transition-colors duration-100">
			<span
				className={`w-14 sm:w-20 shrink-0 text-[13px] font-semibold tracking-[-0.01em] py-3 pl-3 sm:pl-5 ${numColor(n)}`}
			>
				{n}
			</span>
			<span className="flex-1 text-[13px] text-[var(--text-primary)] font-normal tracking-[-0.01em] py-3 pr-2">
				{es}
			</span>
			<span className="hidden sm:block w-52 shrink-0 text-[11px] text-[var(--text-muted)] tracking-[0.02em] py-3 pr-5 text-right group-hover:text-[#71717a] transition-colors">
				{pron}
			</span>
			{/* Mobile: pronunciation below */}
			<span className="sm:hidden text-[10px] text-[var(--text-muted)] py-3 pr-3 shrink-0">
				{pron}
			</span>
		</div>
	);
}
