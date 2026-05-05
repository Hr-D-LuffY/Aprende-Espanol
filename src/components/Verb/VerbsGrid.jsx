import { ENDINGS_BY_TYPE } from "../../context/RegVerbCon";

function splitEnding(word, type) {
	const endings = ENDINGS_BY_TYPE[type];
	for (const end of endings) {
		if (word.endsWith(end)) {
			return { stem: word.slice(0, word.length - end.length), ending: end };
		}
	}
	return { stem: word, ending: "" };
}

function VerbCard({ verb, type, expanded, onToggle }) {
	return (
		<div
			onClick={onToggle}
			className={[
				"p-5 cursor-pointer transition-all duration-200 rounded-xl border group",
				expanded ?
					"bg-[var(--surface)] border-[#f59e0b]/30"
				:	"bg-[var(--surface)] border-[var(--border)] hover:border-[#2c2c30]",
			].join(" ")}
		>
			{/* Verb name + meaning */}
			<div className="flex items-baseline justify-between gap-2 mb-4">
				<p className="text-[20px] font-light tracking-[-0.03em] text-[var(--text-primary)]">
					{verb.name}
				</p>
				<p className="text-[10px] tracking-[0.08em] uppercase text-[var(--text-label)] shrink-0">
					{verb.meaning}
				</p>
			</div>

			{/* Conjugation: row 1 — yo tú él */}
			<div className="grid grid-cols-3 mb-2">
				{[
					{ label: "yo", word: verb.yo },
					{ label: "tú", word: verb.tu },
					{ label: "él", word: verb.el },
				].map(({ label, word }) => {
					const { stem, ending } = splitEnding(word, type);
					return (
						<div key={label}>
							<p className="text-[8px] tracking-[0.12em] uppercase text-[var(--text-label)] mb-0.5">
								{label}
							</p>
							<p className="text-[12px] text-[var(--text-muted)]">
								{stem}
								<span className="text-[var(--accent)]">{ending}</span>
							</p>
						</div>
					);
				})}
			</div>

			{/* Conjugation: row 2 — nosotros vosotros ellos */}
			<div className="grid grid-cols-3 mb-4">
				{[
					{ label: "nos.", word: verb.nosotros },
					{ label: "vos.", word: verb.vosotros },
					{ label: "ellos", word: verb.ellos },
				].map(({ label, word }) => {
					const { stem, ending } = splitEnding(word, type);
					return (
						<div key={label}>
							<p className="text-[8px] tracking-[0.12em] uppercase text-[var(--text-label)] mb-0.5">
								{label}
							</p>
							<p className="text-[12px] text-[var(--text-muted)]">
								{stem}
								<span className="text-[var(--accent)]">{ending}</span>
							</p>
						</div>
					);
				})}
			</div>

			{/* Toggle hint OR example */}
			{!expanded ?
				<div className="pt-3 border-t border-[var(--border)] flex items-center gap-2">
					<div className="w-3 h-px bg-[#2c2c30]" />
					<p className="text-[10px] tracking-[0.1em] text-[#2c2c30] group-hover:text-[var(--text-label)] transition-colors">
						tap for example
					</p>
				</div>
			:	<div className="pt-3 border-t border-[#f59e0b]/20">
					<p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
						{verb.example_sp}
					</p>
					<p className="text-[11px] text-[var(--text-label)] mt-1 italic">
						{verb.example_eng}
					</p>
				</div>
			}
		</div>
	);
}

export default function VerbsGrid({ verbs, type, expandedId, onToggle }) {
	if (!verbs) {
		return (
			<div className="text-center py-16 text-[var(--text-label)] text-[12px] tracking-[0.1em]">
				Loading...
			</div>
		);
	}
	if (verbs.length === 0) {
		return (
			<div className="text-center py-16 text-[var(--text-label)] text-[12px] tracking-[0.1em]">
				No verbs found.
			</div>
		);
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
			{verbs.map((verb) => (
				<VerbCard
					key={verb.id}
					verb={verb}
					type={type}
					expanded={expandedId === verb.id}
					onToggle={() => onToggle(verb.id)}
				/>
			))}
		</div>
	);
}
