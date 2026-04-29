import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

const NAV_LINKS = [
	{ label: "Alphabet", to: "/a1/alphabet" },
	{ label: "A1 Level", to: "/a1" },
	{ label: "Vocabulary", to: "/vocabulary" },
	{ label: "Grammar", to: "/grammar" },
];

function SunIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);
}

export default function Navbar() {
	const { pathname } = useLocation();
	const { theme, toggleTheme } = useTheme();
	const [greeting, setGreeting] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const h = new Date().getHours();
		setGreeting(
			h < 12 ? "Buenos días"
			: h < 18 ? "Buenas tardes"
			: "Buenas noches",
		);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<nav
			className="sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300"
			style={{ background: "var(--bg-nav)", borderColor: "var(--border)" }}
		>
			<div className="max-w-5xl mx-auto px-6 h-[52px] flex items-center gap-4">
				{/* Logo */}
				<Link
					to="/"
					className="flex items-center gap-2 no-underline mr-auto shrink-0"
				>
					<span
						className="text-[10px] tracking-[0.12em] font-mono transition-colors duration-300"
						style={{ color: "var(--text-label)" }}
					>
						Aprende
					</span>
					<span
						className="text-[14px] font-bold px-2 py-0.5 rounded tracking-[0.06em] font-mono transition-colors duration-300"
						style={{ background: "var(--accent)", color: "var(--accent-text)" }}
					>
						Español
					</span>
				</Link>

				{/* Desktop nav links */}
				<div className="hidden md:flex items-center gap-0.5">
					{NAV_LINKS.map((l) => {
						const active = pathname.startsWith(l.to);
						return (
							<Link
								key={l.to}
								to={l.to}
								className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] tracking-wide no-underline transition-all duration-150 font-mono"
								style={{
									color: active ? "var(--text-primary)" : "var(--text-label)",
									background: active ? "var(--surface)" : "transparent",
								}}
								onMouseEnter={(e) => {
									if (!active) {
										e.currentTarget.style.color = "var(--text-muted)";
										e.currentTarget.style.background = "var(--surface)";
									}
								}}
								onMouseLeave={(e) => {
									if (!active) {
										e.currentTarget.style.color = "var(--text-label)";
										e.currentTarget.style.background = "transparent";
									}
								}}
							>
								{l.label}
								{active && (
									<span
										className="w-1 h-1 rounded-full inline-block"
										style={{ background: "var(--accent)" }}
									/>
								)}
							</Link>
						);
					})}
				</div>

				{/* Theme toggle */}
				<button
					onClick={toggleTheme}
					aria-label="Toggle theme"
					className="flex items-center justify-center w-7 h-7 rounded-lg border transition-all duration-150 cursor-pointer"
					style={{
						background: "var(--surface)",
						borderColor: "var(--border)",
						color: "var(--text-muted)",
					}}
				>
					{theme === "dark" ?
						<SunIcon />
					:	<MoonIcon />}
				</button>

				{/* Greeting + status — desktop */}
				<div
					className="hidden sm:flex items-center gap-2 pl-3 border-l"
					style={{ borderColor: "var(--border)" }}
				>
					<span
						className="text-[10px] tracking-[0.05em] font-mono transition-colors duration-300"
						style={{ color: "var(--text-primary)" }}
					>
						👋 {greeting}
					</span>
					<span
						className="w-1.5 h-1.5 rounded-full"
						style={{
							background: "var(--accent)",
							boxShadow: "0 0 6px var(--accent)",
						}}
					/>
				</div>

				{/* Hamburger — mobile */}
				<button
					onClick={() => setMenuOpen((o) => !o)}
					aria-label="Toggle menu"
					className="md:hidden flex flex-col justify-center items-center w-7 h-7 gap-[5px] cursor-pointer transition-colors duration-150"
					style={{ color: "var(--text-label)" }}
				>
					<span
						className={`block w-4 h-px bg-current transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
					/>
					<span
						className={`block w-4 h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block w-4 h-px bg-current transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
					/>
				</button>
			</div>

			{/* Mobile menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-200 border-t ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-t-0"}`}
				style={{ borderColor: "var(--border)" }}
			>
				<div
					className="px-4 py-3 flex flex-col gap-1"
					style={{ background: "var(--bg)" }}
				>
					{NAV_LINKS.map((l) => {
						const active = pathname.startsWith(l.to);
						return (
							<Link
								key={l.to}
								to={l.to}
								className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] tracking-wide no-underline transition-all duration-150 font-mono"
								style={{
									color: active ? "var(--text-primary)" : "var(--text-label)",
									background: active ? "var(--surface)" : "transparent",
								}}
							>
								<span>{l.label}</span>
								{active && (
									<span
										className="w-1 h-1 rounded-full inline-block"
										style={{ background: "var(--accent)" }}
									/>
								)}
							</Link>
						);
					})}
					<div
						className="mt-1 pt-2 border-t flex items-center gap-2 px-3"
						style={{ borderColor: "var(--border)" }}
					>
						<span
							className="text-[10px] tracking-[0.05em] font-mono"
							style={{ color: "var(--text-primary)" }}
						>
							👋 {greeting}
						</span>
						<span
							className="w-1.5 h-1.5 rounded-full ml-auto"
							style={{
								background: "var(--accent)",
								boxShadow: "0 0 6px var(--accent)",
							}}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}
