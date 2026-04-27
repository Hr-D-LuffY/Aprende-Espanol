import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NAV_LINKS = [
	{ label: "Alphabet", to: "/a1/alphabet" },
	{ label: "Verbs", to: "/verbs" },
	{ label: "Vocabulary", to: "/vocabulary" },
	{ label: "Grammar", to: "/grammar" },
	{ label: "Flashcards", to: "/flashcards" },
];

export default function Navbar() {
	const { pathname } = useLocation();
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const h = new Date().getHours();
		setGreeting(
			h < 12 ? "Buenos días"
			: h < 18 ? "Buenas tardes"
			: "Buenas noches",
		);
	}, []);

	return (
		<nav className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-xl border-b border-[#1c1c1f]">
			<div className="max-w-5xl mx-auto px-8 h-[52px] flex items-center gap-6">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2 no-underline mr-auto">
					<span className="bg-[#f59e0b] text-[#09090b] text-[10px] font-bold px-2 py-0.5 rounded tracking-[0.06em] font-mono">
						Spanish
					</span>
					<span className="text-[#3f3f46] text-[13px] tracking-[0.12em] font-mono">
						notes
					</span>
				</Link>

				{/* Nav links */}
				<div className="flex items-center gap-0.5 ml-auto">
					{NAV_LINKS.map((l) => {
						const active = pathname.startsWith(l.to);
						return (
							<Link
								key={l.to}
								to={l.to}
								className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] tracking-wide no-underline transition-all duration-150 font-mono
                  ${
										active ?
											"text-[#fafafa] bg-[#111113]"
										:	"text-[#3f3f46] hover:text-[#71717a] hover:bg-[#111113]"
									}
                `}
							>
								{l.label}
								{active && (
									<span className="w-1 h-1 rounded-full bg-[#f59e0b] inline-block" />
								)}
							</Link>
						);
					})}
				</div>

				{/* Supabase status */}
				<div className="flex items-center gap-2 ml-4 pl-4 border-l border-[#1c1c1f]">
					<span className="text-[10px] text-[#fafafa] tracking-[0.05em] font-mono hidden sm:block">
						👋 HOLA {greeting}!
					</span>
					<span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_6px_#f59e0b]" />
				</div>
			</div>
		</nav>
	);
}
