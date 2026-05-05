import { CATEGORY_COLORS } from "../../context/QuesCon";

export default function QuestionRow({ word, isActive, onClick }) {
	const color = CATEGORY_COLORS[word.category] ?? "#f59e0b";
	return (
		<div
			onClick={onClick}
			className={`grid grid-cols-[1fr_1.5fr] lg:grid-cols-[140px_200px_1fr] border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors duration-100 ${
				isActive ? "bg-[var(--accent)]/5" : "hover:bg-[var(--surface-deep)]"
			}`}
		>
			<div className="px-4 lg:px-6 py-4 flex items-center gap-2 border-r border-[var(--border)]">
				<span
					className="w-1 h-5 rounded-full flex-shrink-0"
					style={{ background: color + "60" }}
				/>
				<span className="text-[12px] lg:text-[13px] text-[var(--text-secondary)]">
					{word.en}
				</span>
			</div>

			<div className="px-4 lg:px-6 py-4 flex items-center border-r border-[var(--border)]">
				<span className="text-[18px] lg:text-[20px] font-light tracking-[-0.02em] text-[var(--text-primary)]">
					{word.es}
				</span>
			</div>

			<div className="hidden lg:flex px-6 py-4 flex-col justify-center gap-1">
				<span className="text-[11px] text-[var(--text-label)]">
					{word.note}
				</span>
				{isActive && (
					<div className="mt-1">
						<span className="text-[13px] text-[var(--text-secondary)] italic">
							{word.example}
						</span>
						<span className="text-[11px] text-[var(--text-muted)] ml-3">
							— {word.ex_en}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
