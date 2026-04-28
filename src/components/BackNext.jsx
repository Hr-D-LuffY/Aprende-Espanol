import { Link } from "react-router-dom";

export default function BackNext({ back, next, backLabel, nextLabel }) {
	return (
		<div className="mt-16 border-t border-[#1c1c1f] pt-10 flex justify-between items-center">
			<div>
				<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
					Previous step
				</p>
				<Link
					to={back}
					className="inline-flex items-center gap-3 border border-[#1c1c1f] bg-[#111113] hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 rounded-xl px-6 py-4 no-underline transition-all duration-150 group"
				>
					<span className="text-[#3f3f46] group-hover:text-[#f59e0b] transition-colors">
						←
					</span>
					<div>
						<p className="text-[13px] text-[#fafafa]">Back to {backLabel}</p>
					</div>
				</Link>
			</div>
			<div>
				<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-4">
					Next step
				</p>
				<Link
					to={next}
					className="inline-flex items-center gap-3 border border-[#1c1c1f] bg-[#111113] hover:border-[#f59e0b]/30 hover:bg-[#f59e0b]/5 rounded-xl px-6 py-4 no-underline transition-all duration-150 group"
				>
					<div className="text-right">
						<p className="text-[13px] text-[#fafafa]">Go to {nextLabel}</p>
					</div>
					<span className="text-[#3f3f46] group-hover:text-[#f59e0b] transition-colors">
						→
					</span>
				</Link>
			</div>
		</div>
	);
}
