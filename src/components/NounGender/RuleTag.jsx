export default function RuleTag({ children, gender }) {
	const styles =
		gender === "M" ?
			"border-[#60a5fa]/30 text-[#60a5fa] bg-[#60a5fa]/5"
		:	"border-[#f472b6]/30 text-[#f472b6] bg-[#f472b6]/5";
	return (
		<span
			className={`text-[10px] px-2 py-0.5 rounded-full border tracking-[0.08em] ${styles}`}
		>
			{children}
		</span>
	);
}
