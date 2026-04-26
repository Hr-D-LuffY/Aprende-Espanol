import { Link } from "react-router-dom";

export default function FootBar() {
	return (
		<div className=" bg-[#09090b] text-[#fafafa] font-mono">
			<footer className="border-t border-[#1c1c1f] py-6 px-8 max-w-5xl mx-auto flex justify-between items-center">
				<span className="text-[11px] text-[#f59e0b] tracking-[0.05em]">
					Spanish Notes — powered by ⚡ Supabase + ⚛️ React
				</span>
				<Link to="https://github.com/Hr-D-LuffY">
					<span className="text-[11px] text-[#f59e0b] tracking-[0.05em]">
						🌐 Made by Habib 🌐
					</span>
				</Link>
				<span className="text-[11px] text-[#f59e0b] tracking-[0.05em]">
					Study hard. 💪
				</span>
			</footer>
		</div>
	);
}
