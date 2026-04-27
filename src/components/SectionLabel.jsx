export default function SectionLabel({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[#3f3f46] mb-5 flex items-center gap-3">
			<span className="inline-block w-3 h-px bg-[#3f3f46]" />
			{children}
		</p>
	);
}
