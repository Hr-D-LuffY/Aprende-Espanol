import { Link } from "react-router-dom";

export default function BackNext({ back, next, backLabel, nextLabel }) {
	return (
		<div className="mt-16 border-t border-[var(--border)] pt-10 flex justify-between items-center">
			<div>
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
					Previous step
				</p>
				<Link
					to={back}
					className="inline-flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] hover:border-[#f59e0b]/30 hover:bg-[var(--accent)]/5 rounded-xl px-6 py-4 no-underline transition-all duration-150 group"
				>
					<span className="text-[var(--text-label)] group-hover:text-[var(--accent)] transition-colors">
						←
					</span>
					<div>
						<p className="text-[13px] text-[var(--text-primary)]">
							Back to {backLabel}
						</p>
					</div>
				</Link>
			</div>
			<div>
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
					Next step
				</p>
				<Link
					to={next}
					className="inline-flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] hover:border-[#f59e0b]/30 hover:bg-[var(--accent)]/5 rounded-xl px-6 py-4 no-underline transition-all duration-150 group"
				>
					<div className="text-right">
						<p className="text-[13px] text-[var(--text-primary)]">
							Go to {nextLabel}
						</p>
					</div>
					<span className="text-[var(--text-label)] group-hover:text-[var(--accent)] transition-colors">
						→
					</span>
				</Link>
			</div>
		</div>
	);
}
