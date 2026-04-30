import { useEffect, useState } from "react";
import FlipCard from "./FlipCard.jsx";

// Default is "v" (3-col), pass type="p" for 2-col
export default function Modal({ category, words, onClose, type = "v" }) {
	const [resetKey, setResetKey] = useState(0);

	// close on Escape
	useEffect(() => {
		const handler = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onClose]);

	// prevent body scroll
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<div
			className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
			style={{ background: "rgba(9,9,11,0.85)" }}
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div className="bg-[var(--surface)] border border-[var(--border)] rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
				{/* Modal header */}
				<div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] shrink-0">
					<div>
						<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-1">
							vocabulary
						</p>
						<h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] capitalize">
							{category}
						</h2>
					</div>
					<div className="flex items-center gap-3">
						<button
							onClick={() => setResetKey((k) => k + 1)}
							className="text-[11px] text-[var(--text-muted)] tracking-wide border border-[#27272a] px-3 py-1.5 rounded-full hover:text-[var(--text-secondary)] hover:border-[#3f3f46] transition-colors cursor-pointer"
						>
							reset cards
						</button>
						<button
							onClick={onClose}
							className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-lg cursor-pointer w-7 h-7 flex items-center justify-center border border-[#27272a] rounded-full"
						>
							×
						</button>
					</div>
				</div>

				{/* Word count + hint */}
				<div className="px-6 py-3 border-b border-[var(--border)] shrink-0 flex items-center justify-between">
					<span className="text-[11px] text-[var(--text-label)] tracking-wide">
						{words.length} {words.length === 1 ? "word" : "words"}
					</span>
					<span className="text-[10px] text-[#27272a] tracking-wide">
						tap a card to flip · Spanish → English
					</span>
				</div>

				{/* Flip cards grid — scrollable */}
				<div className="overflow-y-auto flex-1 p-5">
					<div
						key={resetKey}
						className={`grid gap-3 ${type === "p" ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}
					>
						{words.map((w) => (
							<FlipCard key={w.id} es={w.es} en={w.en} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
