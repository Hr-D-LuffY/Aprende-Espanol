export default function SidebarButton({ rule, isActive, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`text-left px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer ${
				isActive ?
					"bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#fafafa]"
				:	"bg-transparent border-transparent text-[#52525b] hover:text-[#a1a1aa] hover:bg-[#111113] hover:border-[#1c1c1f]"
			}`}
		>
			<p className="text-[12px] leading-snug">{rule.title}</p>
			<p
				className="text-[9px] tracking-[0.1em] uppercase mt-0.5"
				style={{ color: isActive ? rule.tagColor : "#3f3f46" }}
			>
				{rule.tag}
			</p>
		</button>
	);
}
