import { Link } from "react-router-dom";

export default function FootBar() {
	return (
		<div className="bg-[var(--bg)] font-mono">
			<footer className="border-t border-[var(--border)] py-4 sm:py-5 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
				<span className="text-[12px] sm:text-[14px] font-semibold text-[var(--footer)] tracking-[0.05em]">
					© 2026 Aprande Español
				</span>

				<span className="text-[12px] sm:text-[14px] font-semibold text-[var(--footer)] tracking-[0.05em]">
					Study hard. 💪
				</span>

				<Link
					to="https://github.com/Hr-D-LuffY"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[12px] sm:text-[14px] font-semibold text-[var(--footer)] tracking-[0.05em] hover:opacity-70 transition-opacity no-underline"
				>
					🛠️ Created by Habibur Rahman 🛠️
				</Link>
			</footer>
		</div>
	);
}
