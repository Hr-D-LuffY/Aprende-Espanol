export default function NoteBlock({ title, body, tag, cls }) {
	return (
		<div className={`border ${cls.wrap} px-5 py-4 mb-4`}>
			<div className="flex items-center gap-2 mb-2">
				<span className={`w-1.5 h-1.5 rounded-full ${cls.dot}`} />
				<span
					className={`text-[10px] tracking-[0.14em] uppercase border px-2 py-0.5 ${cls.tag}`}
				>
					{tag}
				</span>
			</div>
			<p className="text-[12px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] mb-1">
				{title}
			</p>
			<p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
				{body}
			</p>
		</div>
	);
}