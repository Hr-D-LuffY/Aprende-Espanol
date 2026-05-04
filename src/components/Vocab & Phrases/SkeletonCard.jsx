export default function SkeletonCard() {
	return (
		<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-5 animate-pulse">
			<div className="h-2 w-16 bg-[#1c1c1f] rounded mb-4" />
			<div className="h-4 w-28 bg-[#1c1c1f] rounded mb-2" />
			<div className="h-2 w-10 bg-[#1c1c1f] rounded" />
		</div>
	);
}
