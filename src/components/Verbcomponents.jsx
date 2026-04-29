// ── Shared Components for Verb Pages ──

// Conjugation table row
export function ConjRow({ pronoun, form, highlight }) {
	return (
		<div
			className={`flex items-center justify-between py-2.5 px-4 border-b border-[#1c1c1f] last:border-0 transition-colors duration-150 group cursor-default
                ${highlight ? "bg-[#f59e0b]/5" : "hover:bg-[#111113]"}`}
		>
			<span className="text-[12px] text-[#52525b] tracking-[0.06em] w-28">
				{pronoun}
			</span>
			<span
				className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors
                    ${highlight ? "text-[#f59e0b]" : "text-[#a1a1aa] group-hover:text-[#fafafa]"}`}
			>
				{form}
			</span>
		</div>
	);
}

// Example sentence block
export function ExampleRow({ es, en }) {
	return (
		<div className="py-3 border-b border-[#1c1c1f] last:border-0">
			<p className="text-[13px] text-[#fafafa] tracking-[-0.01em] mb-0.5">
				{es}
			</p>
			<p className="text-[11px] text-[#3f3f46] tracking-wide">{en}</p>
		</div>
	);
}

// Section label / eyebrow
export function Eyebrow({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
			{children}
		</p>
	);
}

// Card container
export function Card({ children, className = "" }) {
	return (
		<div
			className={`border border-[#1c1c1f] rounded-xl bg-[#111113] ${className}`}
		>
			{children}
		</div>
	);
}

// Info pill / tag
export function UsePill({ children }) {
	return (
		<span className="text-[11px] text-[#52525b] border border-[#1c1c1f] px-3 py-1 rounded-full tracking-wide">
			{children}
		</span>
	);
}

// Page wrapper
export function PageWrapper({ children }) {
	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-20 pb-24">{children}</div>
		</div>
	);
}

// Back nav
export function BackNav({ to = "/", label = "← back" }) {
	return (
		<a
			href={to}
			className="inline-block text-[11px] text-[#3f3f46] tracking-[0.12em] uppercase hover:text-[#52525b] transition-colors mb-10 no-underline"
		>
			{label}
		</a>
	);
}

// Conjugation explainer mini-block
export function ConjugationNote({ subject, verb, note }) {
	return (
		<div className="flex items-center gap-3 py-2">
			<span className="text-[12px] text-[#52525b] w-16">{subject}</span>
			<span className="text-[#27272a]">→</span>
			<span className="text-[13px] text-[#f59e0b] font-semibold">{verb}</span>
			{note && <span className="text-[11px] text-[#3f3f46]">{note}</span>}
		</div>
	);
}
