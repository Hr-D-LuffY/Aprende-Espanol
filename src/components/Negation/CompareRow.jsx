import { useState } from "react";
export default function CompareRow({ positive, negative, en }) {
	const [revealed, setRevealed] = useState(false);
	return (
		<div
			onClick={() => setRevealed((r) => !r)}
			className={`py-3 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                ${revealed ? "bg-[var(--accent)]/5 px-2 -mx-2" : "hover:bg-[var(--surface)]"}`}
		>
			<div className="flex items-start gap-3">
				<span className="text-[10px] text-[#27272a] mt-1 w-3 shrink-0">+</span>
				<p className="text-[12px] text-[var(--text-muted)] tracking-[-0.01em]">
					{positive}
				</p>
			</div>
			<div className="flex items-start gap-3 mt-1">
				<span
					className={`text-[10px] mt-1 w-3 shrink-0 transition-colors ${revealed ? "text-[var(--accent)]" : "text-[#27272a]"}`}
				>
					−
				</span>
				<p
					className={`text-[13px] tracking-[-0.01em] transition-colors ${revealed ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
				>
					{negative}
				</p>
			</div>
			<p
				className={`text-[11px] tracking-wide mt-1 pl-6 transition-all duration-150
                ${revealed ? "text-[var(--text-muted)] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
			>
				{en}
			</p>
		</div>
	);
}
