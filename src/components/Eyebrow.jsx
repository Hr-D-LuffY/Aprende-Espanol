// Section label
export default function Eyebrow({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-4">
			{children}
		</p>
	);
}
