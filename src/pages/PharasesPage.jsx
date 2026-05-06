import { useState, useEffect } from "react";
import { supabase } from "../App";

import PageWrapper from "../components/PageWrapper.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";

import SkeletonCard from "../components/Vocab & Phrases/SkeletonCard.jsx";
import Modal from "../components/Vocab & Phrases/Modal.jsx";
import CategoryCard from "../components/Vocab & Phrases/CategoryCard.jsx";
// ── Main Page ──────────────────────────────────────────────────────────────
export default function DailyPhrasesPage() {
	const [allPhrases, setAllPhrases] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null); // null = no modal open

	useEffect(() => {
		async function fetchPhrases() {
			setLoading(true);
			setError(null);

			const { data, error } = await supabase
				.from("Phrases")
				.select("*")
				.eq("level", "A1")
				.order("category", { ascending: true });

			if (error) {
				setError(error.message);
				setLoading(false);
				return;
			}

			setAllPhrases(data);
			setLoading(false);
		}
		fetchPhrases();
	}, []);

	// Group phrases by category
	const grouped = allPhrases.reduce((acc, phrase) => {
		if (!acc[phrase.category]) acc[phrase.category] = [];
		acc[phrase.category].push(phrase);
		return acc;
	}, {});

	const categories = Object.keys(grouped).sort();

	const modalPhrases = selectedCategory ? grouped[selectedCategory] : [];

	return (
		<PageWrapper>
			{/* Header */}
			<div className="mb-10">
				<PageHeader
					title="Daily Phrases"
					es="Frases Diarias"
					description="Practice common Spanish phrases for everyday situations. Pick a category to start practising →"
				/>

				{/* Stats row */}
				{!loading && (
					<div className="flex items-center gap-4 mt-5">
						<div className="border border-[var(--border)] rounded-lg px-4 py-2">
							<span className="text-[11px] text-[var(--text-label)] tracking-wide">
								{categories.length} categories
							</span>
						</div>
						<div className="border border-[var(--border)] rounded-lg px-4 py-2">
							<span className="text-[11px] text-[var(--text-label)] tracking-wide">
								{allPhrases.length} words total
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

			{/* Empty state */}
			{!loading && !error && categories.length === 0 && (
				<Card className="p-10 text-center">
					<p className="text-[13px] text-[var(--text-muted)] tracking-wide mb-1">
						No phrases found.
					</p>
					<p className="text-[11px] text-[var(--text-label)]">
						add phrases to your Supabase Phrases table to see them here.
					</p>
				</Card>
			)}

			{!loading && !error && categories.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{categories.map((cat) => (
						<CategoryCard
							key={cat}
							category={cat}
							count={grouped[cat].length}
							onClick={() => setSelectedCategory(cat)}
						/>
					))}
				</div>
			)}

			{/* Modal */}
			{selectedCategory && (
				<Modal
					category={selectedCategory.replace(/_/g, " ")}
					words={modalPhrases}
					onClose={() => setSelectedCategory(null)}
					type="p"
				/>
			)}
		</PageWrapper>
	);
}
