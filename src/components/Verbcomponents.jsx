// ── Shared Components for Verb Pages ──

// Conjugation table row
export function ConjRow({ pronoun, form, highlight }) {
	return (
		<div
			className={`flex items-center justify-between py-2.5 px-4 border-b border-[var(--border)] last:border-0 transition-colors duration-150 group cursor-default
                ${highlight ? "bg-[var(--accent)]/5" : "hover:bg-[var(--surface)]"}`}
		>
			<span className="text-[12px] text-[var(--text-muted)] tracking-[0.06em] w-28">
				{pronoun}
			</span>
			<span
				className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors
                    ${highlight ? "text-[var(--accent)]" : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"}`}
			>
				{form}
			</span>
		</div>
	);
}

// Example sentence block
export function ExampleRow({ es, en }) {
	return (
		<div className="py-3 border-b border-[var(--border)] last:border-0">
			<p className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em] mb-0.5">
				{es}
			</p>
			<p className="text-[11px] text-[var(--text-label)] tracking-wide">{en}</p>
		</div>
	);
}

// Section label / eyebrow
export function Eyebrow({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-4">
			{children}
		</p>
	);
}

// Card container
export function Card({ children, className = "" }) {
	return (
		<div
			className={`border border-[var(--border)] rounded-xl bg-[var(--surface)] ${className}`}
		>
			{children}
		</div>
	);
}

// Info pill / tag
export function UsePill({ children }) {
	return (
		<span className="text-[11px] text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-full tracking-wide">
			{children}
		</span>
	);
}

// Page wrapper
export function PageWrapper({ children }) {
	return (
		<div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-20 pb-24">{children}</div>
		</div>
	);
}

// Back nav
export function BackNav({ to = "/", label = "← back" }) {
	return (
		<a
			href={to}
			className="inline-block text-[11px] text-[var(--text-label)] tracking-[0.12em] uppercase hover:text-[var(--text-muted)] transition-colors mb-10 no-underline"
		>
			{label}
		</a>
	);
}

// Conjugation explainer mini-block
export function ConjugationNote({ subject, verb, note }) {
	return (
		<div className="flex items-center gap-3 py-2">
			<span className="text-[12px] text-[var(--text-muted)] w-16">
				{subject}
			</span>
			<span className="text-[#27272a]">→</span>
			<span className="text-[13px] text-[var(--accent)] font-semibold">
				{verb}
			</span>
			{note && (
				<span className="text-[11px] text-[var(--text-label)]">{note}</span>
			)}
		</div>
	);
}
