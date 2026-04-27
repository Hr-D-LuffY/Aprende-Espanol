export default function TopicPill({ label }) {
	return (
		<span className="px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#1c1c1f] text-[#52525b] cursor-default transition-all duration-150 hover:border-[#f59e0b]/30 hover:text-[#f59e0b] hover:bg-[#f59e0b]/5">
			{label}
		</span>
	);
}
