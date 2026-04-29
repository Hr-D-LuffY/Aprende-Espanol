export default function SectionLabel({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-5 flex items-center gap-3">
			<span className="inline-block w-3 h-px bg-[#3f3f46]" />
			{children}
		</p>
	);
}
