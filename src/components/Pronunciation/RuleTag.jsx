export default function RuleTag({ tag, tagColor }) {
	return (
		<span
			className="text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-md border"
			style={{
				color: tagColor,
				borderColor: tagColor + "40",
				background: tagColor + "10",
			}}
		>
			{tag}
		</span>
	);
}