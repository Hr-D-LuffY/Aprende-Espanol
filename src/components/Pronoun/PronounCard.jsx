import { PERSON_COLOR } from "../../context/PronounCon";

export default function PronounCard({ pronoun, active, onClick }) {
	const isActive = active === pronoun.id;
	return (
		<button
			onClick={() => onClick(pronoun.id)}
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
						{pronoun.es}
					</p>
					<p className="text-[11px] text-[var(--text-label)] mt-0.5">
						{pronoun.en}
					</p>
				</div>
				<span
					className="text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border shrink-0 mt-0.5"
					style={{
						color: PERSON_COLOR[pronoun.person],
						borderColor: PERSON_COLOR[pronoun.person] + "40",
						background: PERSON_COLOR[pronoun.person] + "08",
					}}
				>
					{pronoun.person}
				</span>
			</div>
		</button>
	);
}
