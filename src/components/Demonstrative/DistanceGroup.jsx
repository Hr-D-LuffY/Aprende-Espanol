import { GENDER_COLORS } from "../../context/DemoCon";

function GenderBadge({ gender }) {
	const g = GENDER_COLORS[gender] ?? GENDER_COLORS["NEU"];
	return (
		<span
			className={`text-[9px] tracking-[0.12em] uppercase font-semibold ${g.text}`}
		>
			{g.label}
		</span>
	);
}

function DemoCard({ item }) {
	return (
		<div className="group border border-[var(--border)] rounded-xl bg-[var(--bg)] p-4 hover:border-[#27272a] hover:bg-[var(--surface)] transition-all duration-150">
			<div className="flex items-start justify-between mb-2">
				<p className="text-[22px] font-light text-[var(--text-primary)] tracking-[-0.02em]">
					{item.spanish}
				</p>
				<GenderBadge gender={item.gender} />
			</div>
			<p className="text-[12px] text-[var(--text-muted)] mb-3">
				{item.meaning}
			</p>
			<div className="border-t border-[var(--border)] pt-3">
				<p className="text-[11px] text-[var(--text-secondary)] italic">
					{item.example}
				</p>
				<p className="text-[10px] text-[var(--text-label)] mt-0.5">
					{item.ex_en}
				</p>
			</div>
		</div>
	);
}

export default function DistanceGroup({ group, isActive, onClick }) {
	return (
		<div
			className={`border rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
				isActive ?
					"border-[#f59e0b]/40 bg-[var(--surface)]"
				:	"border-[var(--border)] bg-[var(--surface)] hover:border-[#27272a]"
			}`}
			onClick={onClick}
		>
			<div
				className={`px-4 sm:px-6 py-5 border-b ${isActive ? "border-[#f59e0b]/20" : "border-[var(--border)]"}`}
			>
				<div className="flex items-center gap-3 mb-1 flex-wrap">
					<span
						className={`text-[18px] ${isActive ? "text-[var(--accent)]" : "text-[#27272a]"} transition-colors`}
					>
						{group.marker}
					</span>
					<p
						className={`text-[13px] font-semibold tracking-[-0.01em] ${isActive ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"} transition-colors`}
					>
						{group.label}
					</p>
					<span className="text-[10px] text-[var(--text-label)] tracking-wide">
						{group.sublabel}
					</span>
				</div>
				<p className="text-[11px] text-[var(--text-label)] leading-relaxed">
					{group.desc}
				</p>
			</div>

			{isActive && (
				<div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{group.items.map((item) => (
						<DemoCard key={item.spanish} item={item} />
					))}
				</div>
			)}
		</div>
	);
}
