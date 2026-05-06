import { PERSON_COLOR } from "../../context/PossesiveAdjCon";
export default function PossessiveAdjCard({ item, active, onClick }) {
	const isActive = active === item.id;
	return (
		<button
			onClick={() => onClick(item.id)}
			className="text-left border rounded-xl p-4 transition-all duration-200 cursor-pointer w-full"
			style={
				isActive ?
					{
						borderColor: "#f59e0b",
						background: "#f59e0b08",
					}
				:	{
						borderColor: "#1c1c1f",
						background: "transparent",
					}
			}
		>
			<div className="flex items-start justify-between gap-2">
				<div>
					<p
						className="text-[15px] font-semibold leading-tight"
						style={{ color: isActive ? "#f59e0b" : "#a1a1aa" }}
					>
						{item.es}
					</p>
					<p className="text-[11px] text-[var(--text-label)] mt-0.5">
						{item.en}
					</p>
				</div>
				<span
					className="text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border shrink-0 mt-0.5"
					style={{
						color: PERSON_COLOR[item.person],
						borderColor: PERSON_COLOR[item.person] + "40",
						background: PERSON_COLOR[item.person] + "08",
					}}
				>
					{item.person}
				</span>
			</div>
		</button>
	);
}
