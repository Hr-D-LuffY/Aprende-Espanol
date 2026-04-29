// ─── CONTENT BLOCK COMPONENTS ────────────────────────────────────────────────

/** Shared row used inside Examples and NoteBlock */
function WordRow({ word, pron, meaning, className = "" }) {
	return (
		<div
			className={`grid grid-cols-[120px_140px_1fr] gap-4 items-center py-3 border-b border-[var(--border)] last:border-0 ${className}`}
		>
			<span className="text-[16px] font-light text-[var(--text-primary)]">
				{word}
			</span>
			<span className="text-[12px] text-[var(--text-muted)]">({pron})</span>
			<span className="text-[12px] text-[var(--text-label)]">= {meaning}</span>
		</div>
	);
}

/** Compact inline row used inside Split columns and NoteBlock inline list */
function WordInline({ word, pron, meaning }) {
	return (
		<div>
			<p className="text-[15px] font-light text-[var(--text-primary)]">
				{word}
			</p>
			<p className="text-[11px] text-[var(--text-muted)]">
				({pron}) = {meaning}
			</p>
		</div>
	);
}

/** vowel-grid */
function VowelGrid({ items }) {
	return (
		<div className="grid grid-cols-5 gap-3">
			{items.map((v) => (
				<div
					key={v.letter}
					className="border border-[var(--border)] rounded-xl bg-[var(--bg)] p-4 text-center"
				>
					<p className="text-3xl font-extralight text-[var(--accent)] mb-1">
						{v.letter}
					</p>
					<p className="text-[13px] text-[var(--text-secondary)] mb-3">
						"{v.sound}"
					</p>
					<div className="border-t border-[var(--border)] pt-3">
						<p className="text-[12px] text-[var(--text-primary)]">
							{v.example}
						</p>
						<p className="text-[10px] text-[var(--text-label)] mt-0.5">
							({v.pron})
						</p>
						<p className="text-[10px] text-[var(--text-muted)] mt-0.5">
							= {v.meaning}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

/** examples */
function Examples({ items }) {
	return (
		<div className="flex flex-col gap-2">
			{items.map((ex, i) => (
				<WordRow key={i} {...ex} />
			))}
		</div>
	);
}

/** split */
function Split({ left, right }) {
	return (
		<div className="grid grid-cols-2 gap-4">
			{[left, right].map((col, i) => (
				<div
					key={i}
					className="border border-[var(--border)] rounded-xl bg-[var(--bg)] p-5"
				>
					<p className="text-[10px] tracking-[0.1em] uppercase text-[var(--accent)] mb-4">
						{col.label}
					</p>
					<div className="flex flex-col gap-3">
						{col.items.map((ex, ei) => (
							<WordInline key={ei} {...ex} />
						))}
					</div>
				</div>
			))}
		</div>
	);
}

/** note-block */
function NoteBlock({ label, body, items }) {
	return (
		<div className="border border-[#f59e0b]/20 bg-[var(--accent)]/5 rounded-xl p-5">
			<p className="text-[10px] tracking-[0.1em] uppercase text-[var(--accent)] mb-1">
				{label}
			</p>
			<p className="text-[12px] text-[var(--text-muted)] mb-4 leading-relaxed">
				{body}
			</p>
			<div className="flex flex-col gap-2">
				{items.map((ex, i) => (
					<div key={i} className="flex items-center gap-4">
						<span className="text-[15px] font-light text-[var(--text-primary)]">
							{ex.word}
						</span>
						<span className="text-[11px] text-[var(--text-muted)]">
							({ex.pron})
						</span>
						<span className="text-[11px] text-[var(--text-label)]">
							= {ex.meaning}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
/** Dispatcher — picks the right component for each block type */
const BLOCK_MAP = {
	"vowel-grid": VowelGrid,
	examples: Examples,
	split: Split,
	"note-block": NoteBlock,
};

export default function ContentBlock({ block }) {
	const Component = BLOCK_MAP[block.type];
	return Component ? <Component {...block} /> : null;
}
