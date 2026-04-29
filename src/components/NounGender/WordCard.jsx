export default function WordCard({ es, pron, en }) {
	return (
		<div className="bg-[var(--bg)] p-3 hover:bg-[var(--surface)] transition-colors duration-150">
			<p className="text-[13px] text-[var(--text-primary)] font-normal tracking-[-0.01em] mb-0.5">
				{es}
			</p>
			{pron && (
				<p className="text-[10px] text-[var(--text-label)] tracking-[0.06em] mb-0.5">
					{pron}
				</p>
			)}
			<p className="text-[11px] text-[var(--text-muted)] tracking-[0.04em]">
				{en}
			</p>
		</div>
	);
}
