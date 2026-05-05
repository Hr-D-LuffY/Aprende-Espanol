function Step({ number, label, children }) {
	return (
		<div className="flex gap-3 sm:gap-4">
			<div className="flex flex-col items-center gap-1 shrink-0">
				<span className="w-5 h-5 rounded-full border border-[var(--border)] flex items-center justify-center text-[9px] font-semibold text-[var(--text-label)] tracking-wide">
					{number}
				</span>
				<div className="w-px flex-1 bg-[var(--border)]" />
			</div>
			<div className="pb-6 sm:pb-8 min-w-0">
				<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
					{label}
				</p>
				{children}
			</div>
		</div>
	);
}

function ConjCell({ pronoun, stem, ending }) {
	return (
		<div className="py-2.5 sm:py-3 px-0">
			<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1.5">
				{pronoun}
			</p>
			<p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)] tracking-[-0.01em]">
				{stem}
				<span className="text-[var(--accent)]">{ending}</span>
			</p>
		</div>
	);
}

export default function ConjugationBar({ type, tabs, patterns }) {
	const tab = tabs.find((t) => t.id === type);
	const rows = patterns[type];

	if (!tab || !rows) return null;

	const infinitive = tab.patternVerb; // e.g. "hablar"
	const dropped = infinitive.slice(0, -2); // e.g. "habl"  (drop last 2 = "-ar")
	const endingLabel = `-${type.toUpperCase()}`; // e.g. "-AR"
	const singular = rows.slice(0, 3);
	const plural = rows.slice(3);

	return (
		<div className="mb-8 sm:mb-10">
			{/* Steps */}
			<Step number="1" label="Take the infinitive">
				<div className="inline-flex items-baseline gap-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg px-3 py-2">
					<span className="text-[14px] text-[var(--text-secondary)] tracking-[-0.01em]">
						{infinitive}
					</span>
					<span className="text-[10px] text-[var(--text-label)] tracking-wide ml-1">
						({endingLabel} verb)
					</span>
				</div>
			</Step>

			<Step number="2" label={`Drop the ${endingLabel} ending`}>
				<div className="inline-flex items-baseline gap-0 bg-[var(--surface)] border border-[var(--border)] rounded-lg px-3 py-2">
					<span className="text-[14px] text-[var(--text-secondary)] tracking-[-0.01em]">
						{dropped}
					</span>
					<span className="text-[14px] line-through text-[var(--text-label)] opacity-40">
						{type}
					</span>
					<span className="text-[10px] text-[var(--text-label)] tracking-wide ml-2">
						→ stem:{" "}
						<span className="text-[var(--text-muted)] not-italic">
							{dropped}
						</span>
					</span>
				</div>
			</Step>

			<Step number="3" label="Add the new ending for each pronoun">
				<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
					<div className="grid grid-cols-3 divide-x divide-[var(--border)] border-b border-[var(--border)]">
						{singular.map((r) => (
							<div key={r.pronoun} className="px-3 sm:px-4">
								<ConjCell
									pronoun={r.pronoun}
									stem={dropped}
									ending={r.ending}
								/>
							</div>
						))}
					</div>
					<div className="grid grid-cols-3 divide-x divide-[var(--border)]">
						{plural.map((r) => (
							<div key={r.pronoun} className="px-3 sm:px-4">
								<ConjCell
									pronoun={r.pronoun}
									stem={dropped}
									ending={r.ending}
								/>
							</div>
						))}
					</div>
				</div>
				<p className="mt-2 text-[11px] text-[var(--text-label)] tracking-wide">
					stem shown in <span className="text-[var(--text-muted)]">gray</span> ·
					ending highlighted in{" "}
					<span className="text-[var(--accent)]">amber</span>
				</p>
			</Step>
		</div>
	);
}
