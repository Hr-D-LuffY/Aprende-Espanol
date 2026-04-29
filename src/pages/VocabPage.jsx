import { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import {
	Eyebrow,
	Card,
	PageWrapper,
	BackNav,
} from "../components/VerbComponents";

// ── Supabase client ──
// Replace with your actual Supabase URL and anon key
const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

// ── Flip Card ──
function FlipCard({ es, en }) {
	const [flipped, setFlipped] = useState(false);
	return (
		<div
			onClick={() => setFlipped((f) => !f)}
			className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 select-none min-h-[90px] flex flex-col justify-between
                ${
									flipped ?
										"border-[#f59e0b]/30 bg-[var(--accent)]/5"
									:	"border-[var(--border)] bg-[var(--bg)] hover:border-[#27272a]"
								}`}
		>
			<div>
				<p className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--text-primary)] leading-snug">
					{es}
				</p>
				{flipped && (
					<p className="text-[16px] font-semibold text-[var(--accent)] tracking-[-0.01em] mt-2 leading-snug">
						{en}
					</p>
				)}
			</div>
			<p className="text-[10px] text-[#27272a] tracking-wide self-end mt-2">
				{flipped ? "← hide" : "en →"}
			</p>
		</div>
	);
}

// ── Category Card (grid item) ──
function CategoryCard({ category, count, onClick }) {
	return (
		<button
			onClick={onClick}
			className="group border border-[var(--border)] rounded-xl bg-[var(--surface)] p-5 text-left hover:border-[#27272a] hover:bg-[var(--surface)] transition-all duration-150 cursor-pointer w-full relative"
		>
			<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-3">
				category
			</p>
			<p className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] mb-1 capitalize leading-tight">
				{category}
			</p>
			<p className="text-[11px] text-[var(--text-muted)] tracking-wide">
				{count} {count === 1 ? "word" : "words"}
			</p>
			<span className="absolute top-5 right-5 text-[#27272a] group-hover:text-[var(--accent)] transition-colors text-sm">
				→
			</span>
		</button>
	);
}

// ── Modal ──
function Modal({ category, words, onClose }) {
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
					<div key={resetKey} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
						{words.map((w) => (
							<FlipCard key={w.id} es={w.es} en={w.en} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

// ── Skeleton loader ──
function SkeletonCard() {
	return (
		<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-5 animate-pulse">
			<div className="h-2 w-16 bg-[#1c1c1f] rounded mb-4" />
			<div className="h-4 w-28 bg-[#1c1c1f] rounded mb-2" />
			<div className="h-2 w-10 bg-[#1c1c1f] rounded" />
		</div>
	);
}

// ── Page ──
export default function VocabPage() {
	const [grouped, setGrouped] = useState({}); // { category: [words] }
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeCategory, setActiveCategory] = useState(null); // category string

	useEffect(() => {
		async function fetchVocab() {
			setLoading(true);
			setError(null);
			const { data, error } = await supabase
				.from("Vocab")
				.select("id, catagory, es, en")
				.order("catagory", { ascending: true });

			if (error) {
				setError(error.message);
				setLoading(false);
				return;
			}

			// Group by category
			const groups = {};
			for (const row of data) {
				if (!groups[row.catagory]) groups[row.catagory] = [];
				groups[row.catagory].push(row);
			}
			setGrouped(groups);
			setLoading(false);
		}
		fetchVocab();
	}, []);

	const categories = Object.keys(grouped).sort();
	const totalWords = Object.values(grouped).reduce(
		(s, arr) => s + arr.length,
		0,
	);

	const activeWords = activeCategory ? grouped[activeCategory] : [];

	return (
		<PageWrapper>
			<BackNav to="/" label="← home" />

			{/* Header */}
			<div className="mb-10">
				<Eyebrow>Study · Vocabulary · By topic</Eyebrow>
				<div className="flex items-baseline gap-4 mb-3">
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
						Vocabulary
					</h1>
				</div>
				<p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-md tracking-wide">
					Browse by category. Tap a category to open all words. Flip cards to
					test yourself.
				</p>

				{/* Stats row */}
				{!loading && !error && (
					<div className="flex items-center gap-4 mt-5">
						<div className="border border-[var(--border)] rounded-lg px-4 py-2">
							<span className="text-[11px] text-[var(--text-label)] tracking-wide">
								{categories.length} categories
							</span>
						</div>
						<div className="border border-[var(--border)] rounded-lg px-4 py-2">
							<span className="text-[11px] text-[var(--text-label)] tracking-wide">
								{totalWords} words total
							</span>
						</div>
					</div>
				)}
			</div>

			{/* Error state */}
			{error && (
				<Card className="p-6">
					<p className="text-[12px] text-[var(--text-muted)] tracking-wide mb-1">
						failed to load vocabulary
					</p>
					<p className="text-[11px] text-[var(--text-label)]">{error}</p>
				</Card>
			)}

			{/* Loading skeleton */}
			{loading && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{Array.from({ length: 6 }).map((_, i) => (
						<SkeletonCard key={i} />
					))}
				</div>
			)}

			{/* Category grid */}
			{!loading && !error && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{categories.map((cat) => (
						<CategoryCard
							key={cat}
							category={cat}
							count={grouped[cat].length}
							onClick={() => setActiveCategory(cat)}
						/>
					))}
				</div>
			)}

			{/* Empty state */}
			{!loading && !error && categories.length === 0 && (
				<Card className="p-10 text-center">
					<p className="text-[13px] text-[var(--text-muted)] tracking-wide mb-1">
						no vocabulary yet
					</p>
					<p className="text-[11px] text-[var(--text-label)]">
						add words to your Supabase Vocab table to see them here.
					</p>
				</Card>
			)}

			{/* Modal */}
			{activeCategory && (
				<Modal
					category={activeCategory}
					words={activeWords}
					onClose={() => setActiveCategory(null)}
				/>
			)}
		</PageWrapper>
	);
}
