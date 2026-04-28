export default function InfoNote({ gender, children }) {
	return (
		<div className="border-l-2 border-[#f59e0b] pl-4 py-2.5 bg-[#f59e0b]/[0.04] rounded-r-lg text-[12px] text-[#52525b] mb-7 leading-relaxed tracking-[0.02em]">
			{/* <GenderDot gender={gender} /> */}
			<span
				className="inline-block w-[5px] h-[5px] rounded-full mr-1.5 relative top-[-1px]"
				style={{ background: gender === "M" ? "#60a5fa" : "#f472b6" }}
			/>
			{children}
		</div>
	);
}
