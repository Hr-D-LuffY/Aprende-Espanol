import { useState, useEffect, useCallback } from "react";
import { Card } from "../components/VerbComponents";
import { PageWrapper } from "../components/PageWrapper";
import { supabase } from "../App.jsx";

import PageHeader from "../components/PageHeader.jsx";
import CategoryCard from "../components/Vocab & Phrases/CategoryCard.jsx";
import Modal from "../components/Vocab & Phrases/Modal.jsx";
import SkeletonCard from "../components/Vocab & Phrases/SkeletonCard.jsx";

export default function VocabPage() {
	const [grouped, setGrouped] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeCategory, setActiveCategory] = useState(null);

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
			{/* Header */}
			<div className="mb-10">
				<PageHeader
					title="Vocabulary"
					es="Vocabulario"
					description="Browse by category. Tap a category to open all words. Flip cards to test yourself →"
				/>

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

			<div className="border-t border-[var(--border)] mb-10" />

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
