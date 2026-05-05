export default function ExamplePanel({ word }) {
	if (!word) return null;
	return (
		<div className="lg:hidden border border-[var(--accent)]/20 bg-[var(--accent)]/5 rounded-xl px-4 py-3 mx-3 mb-2">
			<p className="text-[10px] tracking-[0.1em] uppercase text-[var(--accent)]/60 mb-1">
				{word.note}
			</p>
			<p className="text-[14px] font-light text-[var(--text-secondary)] italic">
				{word.example}
			</p>
			<p className="text-[11px] text-[var(--text-muted)] mt-1">
				— {word.ex_en}
			</p>
		</div>
	);
}
