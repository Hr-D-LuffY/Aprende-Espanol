export default function LocCard({ es, en }) {
	return (
		<div className="p-2.5 border border-[var(--border)] rounded-md bg-[var(--bg)]">
			<div className="text-[12px] text-[var(--text-secondary)] mb-0.5">
				{es}
			</div>
			<div className="text-[10px] text-[var(--text-label)] tracking-[0.06em]">
				{en}
			</div>
		</div>
	);
}
