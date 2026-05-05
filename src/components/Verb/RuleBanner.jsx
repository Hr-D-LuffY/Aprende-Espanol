export default function RuleBanner({ rule, note, flag }) {
	return (
		<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-xl px-6 py-5 mb-8">
			<p className="text-[14px] text-[var(--accent)] font-semibold tracking-[-0.01em] mb-1">
				{rule}
			</p>
			{note && (
				<p className="text-[12px] text-[var(--text-muted)] tracking-wide">
					{note}
				</p>
			)}
			{flag == "S" ?
				<p className="text-[11px] text-[var(--text-label)] tracking-[0.1em] uppercase">
					Negation → <span className="text-[var(--text-muted)]">NO + verb</span>{" "}
					&nbsp;·&nbsp; e.g. No soy → I am not
				</p>
			: flag == "E" ?
				<p className="text-[11px] text-[var(--text-label)] tracking-[0.1em] uppercase">
					Negation → <span className="text-[var(--text-muted)]">NO + verb</span>{" "}
					&nbsp;·&nbsp; Verb+ing also uses ESTAR
				</p>
			:	null}
		</div>
	);
}
