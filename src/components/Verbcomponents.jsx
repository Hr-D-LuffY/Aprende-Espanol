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
export function ExampleRow({ es, en, active, onToggle }) {
	return (
		<div
			onClick={onToggle}
			className={`py-3 border-b border-[var(--border)] last:border-0 cursor-pointer rounded-sm transition-colors duration-150
				${active ? "bg-[var(--accent)]/5 px-2 -mx-2" : "hover:bg-[var(--surface)]"}`}
		>
			<p
				className={`text-[13px] tracking-[-0.01em] mb-0.5 transition-colors
				${active ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
			>
				{es}
			</p>
			<p
				className={`text-[11px] tracking-wide transition-all duration-200 overflow-hidden
				${active ? "text-[var(--text-muted)] max-h-10 opacity-100" : "max-h-0 opacity-0"}`}
			>
				{en}
			</p>
		</div>
	);
}

// Section label / eyebrow  **Double**
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
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
				{children}
			</div>
		</div>
	);
}
