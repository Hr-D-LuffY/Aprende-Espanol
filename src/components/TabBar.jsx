export default function TabBar({ tabs, activeTab, onSwitch }) {
	return (
		<div className="border-b border-[var(--border)] mb-6">
			<div className="flex flex-wrap gap-0">
				{tabs.map((t) => (
					<button
						key={t.id}
						onClick={() => onSwitch(t.id)}
						className={[
							"px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] uppercase font-semibold border-b-2 -mb-px transition-colors duration-150 cursor-pointer bg-transparent font-mono whitespace-nowrap",
							activeTab === t.id ?
								"text-[var(--accent)] border-[var(--accent)]"
							:	"text-[var(--text-label)] border-transparent hover:text-[var(--text-muted)]",
						].join(" ")}
					>
						{t.label}
					</button>
				))}
			</div>
		</div>
	);
}
