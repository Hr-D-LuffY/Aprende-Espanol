import { useState } from "react";

export default function FlipCard({ es, en }) {
	const [flipped, setFlipped] = useState(false);
	return (
		<div
			onClick={() => setFlipped((f) => !f)}
			className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 select-none min-h-[90px] flex flex-col justify-between
                ${
									flipped ?
										"border-[#f59e0b]/30 bg-[var(--accent)]/5"
									:	"border-[var(--border)] bg-[var(--bg)] hover:border-[#27272a]"
								}`}
		>
			<div>
				<p className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] leading-snug">
					{es}
				</p>
				{flipped && (
					<p className="text-[16px] font-semibold text-[var(--accent)] tracking-[-0.01em] mt-2 leading-snug">
						{en}
					</p>
				)}
			</div>
			<p className="text-[10px] text-[#27272a] tracking-wide self-end mt-2">
				{flipped ? "← hide" : "en →"}
			</p>
		</div>
	);
}
