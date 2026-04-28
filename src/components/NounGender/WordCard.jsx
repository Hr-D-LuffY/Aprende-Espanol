export default function WordCard({ es, pron, en }) {
	return (
		<div className="bg-[#09090b] p-3 hover:bg-[#111113] transition-colors duration-150">
			<p className="text-[13px] text-[#fafafa] font-normal tracking-[-0.01em] mb-0.5">
				{es}
			</p>
			{pron && (
				<p className="text-[10px] text-[#3f3f46] tracking-[0.06em] mb-0.5">
					{pron}
				</p>
			)}
			<p className="text-[11px] text-[#52525b] tracking-[0.04em]">{en}</p>
		</div>
	);
}
