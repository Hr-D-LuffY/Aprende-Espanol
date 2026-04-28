export default function GenderDot({ gender }) {
	return (
		<span
			className="inline-block w-[5px] h-[5px] rounded-full mr-1.5 relative top-[-1px]"
			style={{ background: gender === "M" ? "#60a5fa" : "#f472b6" }}
		/>
	);
}
