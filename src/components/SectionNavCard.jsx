import { Link } from "react-router-dom";

const SECTIONS = [
	{
		label: "Foundation",
		sub: "Core building blocks",
		to: "/a1/alphabet",
		index: "01",
		color: {
			bg: "bg-[#1a1a2e]",
			hoverBg: "hover:bg-[#1e1e35]",
			border: "border-[#2a2a4a]",
			hoverBorder: "hover:border-[#3a3a6a]",
			accent: "text-[#818cf8]",
			hoverAccent: "group-hover:text-[#a5b4fc]",
			dot: "bg-[#818cf8]",
			indexColor: "text-[#3a3a6a]",
		},
	},
	{
		label: "Grammar",
		sub: "Rules & structure",
		to: "/a1/grammar",
		index: "02",
		color: {
			bg: "bg-[#1a2a1a]",
			hoverBg: "hover:bg-[#1e2e1e]",
			border: "border-[#2a4a2a]",
			hoverBorder: "hover:border-[#3a6a3a]",
			accent: "text-[#4ade80]",
			hoverAccent: "group-hover:text-[#86efac]",
			dot: "bg-[#4ade80]",
			indexColor: "text-[#3a6a3a]",
		},
	},
	{
		label: "Usage",
		sub: "Real-life practice",
		to: "/a1/usage/numbers",
		index: "04",
		color: {
			bg: "bg-[#1a1f2a]",
			hoverBg: "hover:bg-[#1e242e]",
			border: "border-[#2a3a4a]",
			hoverBorder: "hover:border-[#3a5a6a]",
			accent: "text-[#38bdf8]",
			hoverAccent: "group-hover:text-[#7dd3fc]",
			dot: "bg-[#38bdf8]",
			indexColor: "text-[#3a5a6a]",
		},
	},
	{
		label: "Vocabulary",
		sub: "Words by topic",
		to: "/vocabulary",
		index: "03",
		color: {
			bg: "bg-[#2a1a1a]",
			hoverBg: "hover:bg-[#2e1e1e]",
			border: "border-[#4a2a2a]",
			hoverBorder: "hover:border-[#6a3a3a]",
			accent: "text-[#f87171]",
			hoverAccent: "group-hover:text-[#fca5a5]",
			dot: "bg-[#f87171]",
			indexColor: "text-[#6a3a3a]",
		},
	},
];

export default function SectionNavCard({ label, sub, to, index, color }) {
	return (
		<Link
			to={to}
			className={`group relative flex flex-col justify-between ${color.bg} ${color.hoverBg} border ${color.border} ${color.hoverBorder} rounded-xl px-5 py-5 no-underline transition-all duration-150 overflow-hidden`}
		>
			{/* Index + dot row */}
			<div className="flex items-center justify-between mb-6">
				<span
					className={`text-[11px] tracking-[0.14em] font-normal ${color.indexColor} transition-colors duration-150`}
				>
					{index}
				</span>
				<span
					className={`w-1.5 h-1.5 rounded-full ${color.dot} opacity-60 group-hover:opacity-100 transition-opacity duration-150`}
				/>
			</div>

			{/* Text */}
			<div className="flex flex-col gap-1">
				<p
					className={`text-[14px] font-semibold tracking-[-0.02em] ${color.accent} ${color.hoverAccent} transition-colors duration-150`}
				>
					{label}
				</p>
				<p className="text-[11px] text-[var(--text-muted)] tracking-[0.06em]">
					{sub}
				</p>
			</div>

			{/* Arrow */}
			<span
				className={`mt-5 text-[12px] tracking-[0.08em] ${color.indexColor} ${color.hoverAccent} transition-colors duration-150`}
			>
				→
			</span>
		</Link>
	);
}

/* Usage — drop this grid wherever you need it */
export function SectionGrid() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
			{SECTIONS.map((s) => (
				<SectionNavCard key={s.index} {...s} />
			))}
		</div>
	);
}
