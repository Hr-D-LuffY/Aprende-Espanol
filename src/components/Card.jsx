export default function Card({ children, className = "" }) {
	return (
		<div
			className={`border border-[var(--border)] rounded-xl bg-[var(--surface)] ${className}`}
		>
			{children}
		</div>
	);
}
