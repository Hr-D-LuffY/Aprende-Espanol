import { useState } from "react";
export default function ExPair({ es, en }) {
	const [shown, setShown] = useState(false);
	return (
		<div
			onClick={() => setShown((s) => !s)}
			className={`py-3 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                ${shown ? "bg-[var(--accent)]/5 px-2 -mx-2" : "hover:bg-[var(--surface)]"}`}
		>
			<p
				className={`text-[13px] tracking-[-0.01em] transition-colors ${shown ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
			>
				{es}
			</p>
			<p
				className={`text-[11px] tracking-wide transition-all duration-150
                ${shown ? "text-[var(--text-muted)] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
			>
				{en}
			</p>
		</div>
	);
}
