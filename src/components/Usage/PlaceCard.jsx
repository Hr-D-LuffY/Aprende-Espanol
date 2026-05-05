import { useState } from "react";
import { PLACE_SENTENCES } from "../../context/LocationCon";

export default function PlaceCard({ es, en }) {
	const [open, setOpen] = useState(false);
	const sentence = PLACE_SENTENCES[es];
	return (
		<div
			className={`group border border-[var(--border)] p-3 sm:p-4 relative transition-colors duration-150 cursor-pointer select-none ${open ? "bg-[var(--surface)]" : "bg-[var(--bg)] hover:bg-[var(--surface)]"}`}
			onClick={() => setOpen((v) => !v)}
		>
			<span
				className={`absolute top-3 right-3 text-xs transition-all duration-200 ${open ? "text-[var(--accent)] rotate-90" : "text-[var(--text-ghost)] group-hover:text-[var(--accent)]"}`}
			>
				→
			</span>
			<div className="text-[12px] sm:text-[13px] text-[var(--text-primary)] tracking-[-0.01em] mb-1 pr-4">
				{es}
			</div>
			<div className="text-[10px] text-[var(--text-muted)] tracking-[0.06em]">
				{en}
			</div>
			{open && sentence && (
				<div className="mt-3 pt-3 border-t border-[var(--border)]">
					<p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-0.5">
						{sentence.es}
					</p>
					<p className="text-[10px] text-[var(--text-muted)] tracking-wide">
						{sentence.en}
					</p>
				</div>
			)}
		</div>
	);
}
