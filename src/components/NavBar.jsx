import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

// ── Icons ──────────────────────────────────────────────────────────────────
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

function ChevronIcon({ open }) {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="transition-transform duration-200"
			style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
		>
			<polyline points="6 9 12 15 18 9" />
		</svg>
	);
}

function ArrowIcon() {
	return (
		<svg
			width="10"
			height="10"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="9 18 15 12 9 6" />
		</svg>
	);
}

// ── Data ───────────────────────────────────────────────────────────────────
const GRAMMAR_TOPICS = [
	{ label: "Noun Gender", to: "/a1/grammar/noun-gender" },
	{ label: "Pronouns", to: "/a1/grammar/pronouns" },
	{ label: "Articles", to: "/a1/grammar/article" },
	{ label: "Singular / Plural", to: "/a1/grammar/singular-plural" },
	{ label: "Adjectives", to: "/a1/grammar/adjective" },
	{ label: "Demonstratives", to: "/a1/grammar/demonstrative" },
	{ label: "Question Words", to: "/a1/grammar/question-words" },
	{ label: "Sentence Structure", to: "/a1/grammar/sentence-structure" },
	{ label: "Possessive Adj.", to: "/a1/grammar/possessive-adjectives" },
	{ label: "Ser", to: "/a1/grammar/ser" },
	{ label: "Estar", to: "/a1/grammar/estar" },
	{ label: "Tener", to: "/a1/grammar/tener" },
	{ label: "Gustar", to: "/a1/grammar/gustar" },
	{ label: "Negation", to: "/a1/grammar/negation" },
	{ label: "Contraction", to: "/a1/grammar/contraction" },
	{ label: "Prepositions", to: "/a1/grammar/prepositions" },
	{ label: "Regular Verbs", to: "/a1/grammar/regular-verbs" },
	{ label: "Irregular Verbs", to: "/a1/grammar/irregular-verbs" },
];

// ✅ Single source of truth — used everywhere now
const A1_SECTIONS = [
	{ label: "Overview", to: "/a1" },
	{
		label: "Foundation",
		children: [
			{ label: "Alphabet", to: "/a1/alphabet" },
			{ label: "Pronunciation", to: "/a1/pronunciation" },
		],
	},
	{
		label: "Grammar",
		children: GRAMMAR_TOPICS,
		grid: true, // render children in 2-col grid
	},
	{
		label: "Usage",
		children: [
			{ label: "Numbers", to: "/a1/usage/numbers" },
			{ label: "Time", to: "/a1/usage/time" },
			{ label: "Days & Months", to: "/a1/usage/days-months" },
			{ label: "Location", to: "/a1/usage/location" },
		],
	},
];

// ── Helpers ────────────────────────────────────────────────────────────────
function useOutsideClick(ref, handler) {
	useEffect(() => {
		function listener(e) {
			if (ref.current && !ref.current.contains(e.target)) handler();
		}
		document.addEventListener("mousedown", listener);
		return () => document.removeEventListener("mousedown", listener);
	}, [ref, handler]);
}

function NavLink({ to, children, active }) {
	return (
		<Link
			to={to}
			className="block px-3 py-1.5 rounded-lg text-[12px] tracking-wide font-mono no-underline transition-colors duration-150"
			style={{ color: active ? "var(--text-primary)" : "var(--text-label)" }}
			onMouseEnter={(e) => {
				if (!active) e.currentTarget.style.color = "var(--text-muted)";
			}}
			onMouseLeave={(e) => {
				if (!active) e.currentTarget.style.color = "var(--text-label)";
			}}
		>
			{children}
		</Link>
	);
}

// ── Generic flyout panel ───────────────────────────────────────────────────
function SectionFlyout({ label, items, pathname, onClose, grid = false }) {
	return (
		<div
			className="absolute left-full top-0 ml-1.5 rounded-xl border p-3 z-50"
			style={{
				background: "var(--bg-nav)",
				borderColor: "var(--border)",
				width: grid ? "340px" : "180px",
			}}
		>
			<p
				className="text-[10px] tracking-[0.14em] uppercase px-2 mb-2"
				style={{ color: "var(--text-label)" }}
			>
				{label}
			</p>
			<div
				className={grid ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"}
			>
				{items.map((t) => {
					const active = pathname === t.to;
					return (
						<Link
							key={t.to}
							to={t.to}
							onClick={onClose}
							className="px-2.5 py-1.5 rounded-lg text-[11px] font-mono no-underline transition-colors duration-150 flex items-center justify-between"
							style={{
								color: active ? "var(--accent)" : "var(--text-label)",
								background: active ? "var(--surface)" : "transparent",
							}}
							onMouseEnter={(e) => {
								if (!active) {
									e.currentTarget.style.color = "var(--text-primary)";
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
							{t.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

// ── A1 Dropdown — now driven by A1_SECTIONS ───────────────────────────────
function A1Dropdown({ pathname, onClose }) {
	const [openFlyout, setOpenFlyout] = useState(null); // label of currently open flyout

	return (
		<div
			className="absolute top-full left-0 mt-1.5 w-52 rounded-xl border p-1.5 z-50"
			style={{ background: "var(--bg-nav)", borderColor: "var(--border)" }}
		>
			{A1_SECTIONS.map((section, i) => {
				// ── Simple link (Overview) ──
				if (!section.children) {
					const active = pathname === section.to;
					return (
						<Link
							key={section.to}
							to={section.to}
							onClick={onClose}
							className="flex items-center justify-between px-3 py-2 rounded-lg text-[12px] font-mono no-underline transition-colors duration-150"
							style={{
								color: active ? "var(--accent)" : "var(--text-label)",
								background: active ? "var(--surface)" : "transparent",
							}}
							onMouseEnter={(e) => {
								if (!active) {
									e.currentTarget.style.color = "var(--text-primary)";
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
							{section.label}
						</Link>
					);
				}

				// ── Section with flyout children ──
				const isActive = section.children.some((c) => pathname === c.to);
				const isOpen = openFlyout === section.label;

				return (
					<div key={section.label}>
						{/* Divider before each section */}
						<div
							className="mx-3 my-1.5 border-t"
							style={{ borderColor: "var(--border)" }}
						/>

						<div className="relative">
							<button
								onClick={() => setOpenFlyout(isOpen ? null : section.label)}
								className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[12px] font-mono transition-colors duration-150 cursor-pointer"
								style={{
									color:
										isActive || isOpen ? "var(--accent)" : "var(--text-label)",
									background:
										isActive || isOpen ? "var(--surface)" : "transparent",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.background = "var(--surface)";
									e.currentTarget.style.color = "var(--text-primary)";
								}}
								onMouseLeave={(e) => {
									if (!isOpen && !isActive) {
										e.currentTarget.style.background = "transparent";
										e.currentTarget.style.color = "var(--text-label)";
									}
								}}
							>
								<span>{section.label}</span>
								<ArrowIcon />
							</button>

							{isOpen && (
								<SectionFlyout
									label={section.label}
									items={section.children}
									pathname={pathname}
									grid={!!section.grid}
									onClose={() => {
										setOpenFlyout(null);
										onClose();
									}}
								/>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

// ── Mobile accordion item ──────────────────────────────────────────────────
function MobileAccordion({ label, children, defaultOpen = false }) {
	const [open, setOpen] = useState(defaultOpen);
	return (
		<div>
			<button
				onClick={() => setOpen((o) => !o)}
				className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-mono cursor-pointer transition-colors duration-150"
				style={{ color: "var(--text-label)", background: "transparent" }}
			>
				<span>{label}</span>
				<ChevronIcon open={open} />
			</button>
			<div
				className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
			>
				<div className="pl-3 pb-1 flex flex-col gap-0.5">{children}</div>
			</div>
		</div>
	);
}

function MobileLink({ to, children, pathname, onClick }) {
	const active = pathname === to;
	return (
		<Link
			to={to}
			onClick={onClick}
			className="flex items-center justify-between px-3 py-2 rounded-lg text-[12px] font-mono no-underline transition-colors duration-150"
			style={{
				color: active ? "var(--accent)" : "var(--text-label)",
				background: active ? "var(--surface)" : "transparent",
			}}
		>
			{children}
			{active && (
				<span
					className="w-1 h-1 rounded-full inline-block"
					style={{ background: "var(--accent)" }}
				/>
			)}
		</Link>
	);
}

// ── Main Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
	const { pathname } = useLocation();
	const { theme, toggleTheme } = useTheme();
	const [greeting, setGreeting] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);
	const [a1Open, setA1Open] = useState(false);

	const a1Ref = useRef(null);
	useOutsideClick(a1Ref, () => setA1Open(false));

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
		setA1Open(false);
	}, [pathname]);

	const isA1Active = pathname.startsWith("/a1");

	return (
		<nav
			className="sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300"
			style={{ background: "var(--bg-nav)", borderColor: "var(--border)" }}
		>
			<div className="max-w-5xl mx-auto px-6 h-[52px] flex items-center gap-3">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2 no-underline shrink-0">
					<span
						className="text-[10px] tracking-[0.12em] font-mono"
						style={{ color: "var(--text-label)" }}
					>
						Aprende
					</span>
					<span
						className="text-[14px] font-bold px-2 py-0.5 rounded tracking-[0.06em] font-mono"
						style={{ background: "var(--accent)", color: "var(--accent-text)" }}
					>
						Español
					</span>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-0.5 ml-2">
					<div className="relative" ref={a1Ref}>
						<button
							onClick={() => setA1Open((o) => !o)}
							className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-mono transition-all duration-150 cursor-pointer"
							style={{
								color:
									isA1Active || a1Open ?
										"var(--text-primary)"
									:	"var(--text-label)",
								background:
									isA1Active || a1Open ? "var(--surface)" : "transparent",
							}}
						>
							A1
							{isA1Active && !a1Open && (
								<span
									className="w-1 h-1 rounded-full"
									style={{ background: "var(--accent)" }}
								/>
							)}
							<ChevronIcon open={a1Open} />
						</button>
						{a1Open && (
							<A1Dropdown
								pathname={pathname}
								onClose={() => setA1Open(false)}
							/>
						)}
					</div>

					<NavLink to="/grammar" active={pathname.startsWith("/grammar")}>
						Grammar
						{pathname.startsWith("/grammar") && (
							<span
								className="inline-block ml-1.5 w-1 h-1 rounded-full align-middle"
								style={{ background: "var(--accent)" }}
							/>
						)}
					</NavLink>

					<NavLink to="/vocabulary" active={pathname.startsWith("/vocabulary")}>
						Vocabulary
						{pathname.startsWith("/vocabulary") && (
							<span
								className="inline-block ml-1.5 w-1 h-1 rounded-full align-middle"
								style={{ background: "var(--accent)" }}
							/>
						)}
					</NavLink>

					<NavLink to="/phrases" active={pathname.startsWith("/phrases")}>
						Phrases
						{pathname.startsWith("/phrases") && (
							<span
								className="inline-block ml-1.5 w-1 h-1 rounded-full align-middle"
								style={{ background: "var(--accent)" }}
							/>
						)}
					</NavLink>
				</div>

				<div className="flex-1" />

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

				{/* Greeting — desktop */}
				<div
					className="hidden sm:flex items-center gap-2 pl-3 border-l"
					style={{ borderColor: "var(--border)" }}
				>
					<span
						className="text-[10px] tracking-[0.05em] font-mono"
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
					className="md:hidden flex flex-col justify-center items-center w-7 h-7 gap-[5px] cursor-pointer"
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

			{/* Mobile drawer — also driven by A1_SECTIONS */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-250 border-t ${menuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 border-t-0"}`}
				style={{ borderColor: "var(--border)" }}
			>
				<div
					className="px-4 py-3 flex flex-col gap-0.5 overflow-y-auto max-h-[80vh]"
					style={{ background: "var(--bg)" }}
				>
					<MobileAccordion label="A1" defaultOpen={isA1Active}>
						{A1_SECTIONS.map((section) => {
							// Simple link (Overview)
							if (!section.children) {
								return (
									<MobileLink
										key={section.to}
										to={section.to}
										pathname={pathname}
										onClick={() => setMenuOpen(false)}
									>
										{section.label}
									</MobileLink>
								);
							}

							// Section with children
							const isGrammar = !!section.grid;
							return (
								<MobileAccordion
									key={section.label}
									label={section.label}
									defaultOpen={section.children.some((c) => pathname === c.to)}
								>
									<div
										className={
											isGrammar ?
												"grid grid-cols-2 gap-0.5"
											:	"flex flex-col gap-0.5"
										}
									>
										{section.children.map((item) => (
											<MobileLink
												key={item.to}
												to={item.to}
												pathname={pathname}
												onClick={() => setMenuOpen(false)}
											>
												{item.label}
											</MobileLink>
										))}
									</div>
								</MobileAccordion>
							);
						})}
					</MobileAccordion>

					<div
						className="mx-2 my-1 border-t"
						style={{ borderColor: "var(--border)" }}
					/>

					<MobileLink
						to="/grammar"
						pathname={pathname}
						onClick={() => setMenuOpen(false)}
					>
						Grammar
					</MobileLink>

					<MobileLink
						to="/vocabulary"
						pathname={pathname}
						onClick={() => setMenuOpen(false)}
					>
						Vocabulary
					</MobileLink>
					<MobileLink
						to="/phrases"
						pathname={pathname}
						onClick={() => setMenuOpen(false)}
					>
						Phrases
					</MobileLink>

					<div
						className="mt-2 pt-2 border-t flex items-center gap-2 px-3"
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
