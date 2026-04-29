import { Link } from "react-router-dom";

export default function FootBar() {
	return (
		<div className="bg-[var(--bg)] font-mono">
			<footer
				className="border-t border-[var(--border)] py-5 px-4 sm:px-8 max-w-5xl mx-auto 
				flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-center sm:text-left"
			>
				<span className="text-[14px] font-semibold text-[var(--footer)] tracking-[0.05em]">
					© 2026 Spanish Notes
				</span>

				<span className="text-[14px]  font-semibold text-[var(--footer)] tracking-[0.05em]">
					Study hard. 💪
				</span>

				<Link
					to="https://github.com/Hr-D-LuffY"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="text-[14px] font-semibold text-[var(--footer)] tracking-[0.05em]">
						🛠️ Created by Habibur Rahman 🛠️
					</span>
				</Link>
			</footer>
		</div>
	);
}
