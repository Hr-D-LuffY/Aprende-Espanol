import { Link } from "react-router-dom";

const SECTIONS = [
	{
		label: "Foundation",
		sub: "Core building blocks",
		to: "/a1/alphabet",
		index: "01",
	},
	{
		label: "Grammar",
		sub: "Rules & structure",
		to: "/a1/grammar",
		index: "02",
	},
	{
		label: "Usage",
		sub: "Real-life practice",
		to: "/a1/usage/numbers",
		index: "03",
	},
];

export default function SectionNavCard({ label, sub, to, index }) {
	return (
		<Link
			to={to}
			className="group relative flex flex-col justify-between border rounded-xl px-5 py-5 no-underline transition-all duration-150 overflow-hidden"
			style={{
				background: "var(--surface)",
				borderColor: "var(--border)",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.borderColor = "var(--accent)")
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.borderColor = "var(--border)")
			}
		>
			{/* Index + dot row */}
			<div className="flex items-center justify-between mb-6">
				<span
					className="text-[11px] tracking-[0.14em]"
					style={{ color: "var(--text-label)" }}
				>
					{index}
				</span>
				<span
					className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-150"
					style={{ background: "var(--accent)" }}
				/>
			</div>

			{/* Text */}
			<div className="flex flex-col gap-1">
				<p
					className="text-[14px] font-semibold tracking-[-0.02em] transition-colors duration-150"
					style={{ color: "var(--accent)" }}
				>
					{label}
				</p>
				<p
					className="text-[11px] tracking-[0.06em]"
					style={{ color: "var(--text-muted)" }}
				>
					{sub}
				</p>
			</div>

			{/* Arrow */}
			<span
				className="mt-5 text-[12px] tracking-[0.08em] transition-colors duration-150"
				style={{ color: "var(--text-label)" }}
			>
				→
			</span>
		</Link>
	);
}

export function SectionGrid() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
			{SECTIONS.map((s) => (
				<SectionNavCard key={s.index} {...s} />
			))}
		</div>
	);
}
