import { SLOT_COLOR } from "../../context/SenCon";
export default function SlotPill({ slot, text, dim }) {
	const color = SLOT_COLOR[slot] ?? "#52525b";
	return (
		<span
			className="inline-flex flex-col items-center gap-1"
			style={{ opacity: dim ? 0.3 : 1, transition: "opacity 0.15s" }}
		>
			<span
				className="text-[16px] lg:text-[22px] font-light tracking-[-0.01em] px-3 py-1.5 rounded-lg border"
				style={{
					color,
					borderColor: color + "30",
					background: color + "08",
				}}
			>
				{text}
			</span>
			<span
				className="text-[8px] tracking-[0.14em] uppercase"
				style={{ color: color + "80" }}
			>
				{slot === "wh" ? "WH" : slot}
			</span>
		</span>
	);
}
