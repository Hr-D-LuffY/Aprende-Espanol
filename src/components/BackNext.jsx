import { Link } from "react-router-dom";

export default function BackNext({ back, next, backLabel, nextLabel }) {
	return (
		<div className="mt-16 border-t border-[var(--border)] pt-10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
			<div>
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
					Previous step
				</p>
				<Link
					to={back}
					className="inline-flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] hover:border-[#f59e0b]/30 hover:bg-[var(--accent)]/5 rounded-xl px-5 py-3.5 no-underline transition-all duration-150 group w-full sm:w-auto"
				>
					<span className="text-[var(--text-label)] group-hover:text-[var(--accent)] transition-colors">
						←
					</span>
					<p className="text-[13px] text-[var(--text-primary)]">
						Back to {backLabel}
					</p>
				</Link>
			</div>

			<div className="sm:text-right">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
					Next step
				</p>
				<Link
					to={next}
					className="inline-flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] hover:border-[#f59e0b]/30 hover:bg-[var(--accent)]/5 rounded-xl px-5 py-3.5 no-underline transition-all duration-150 group w-full sm:w-auto justify-between sm:justify-start"
				>
					<p className="text-[13px] text-[var(--text-primary)]">
						Go to {nextLabel}
					</p>
					<span className="text-[var(--text-label)] group-hover:text-[var(--accent)] transition-colors">
						→
					</span>
				</Link>
			</div>
		</div>
	);
}
