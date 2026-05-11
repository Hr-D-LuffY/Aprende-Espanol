import { useState, useEffect } from "react";
import { supabase } from "../../../App";

import { IRREGULAR_CATEGORIES } from "../../../context/IrregVerbCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";
import TabBar from "../../../components/TabBar";
import VerbsGrid from "../../../components/Verb/VerbsGrid";

const CATEGORY_TABS = Object.entries(IRREGULAR_CATEGORIES).map(
	([key, meta]) => ({
		id: key,
		label: meta.label,
	}),
);

function CategoryDescription({ category }) {
	const meta = IRREGULAR_CATEGORIES[category];
	return (
		<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-xl p-4 flex flex-col gap-2 mb-8 sm:mb-10">
			<p className="text-[13px] text-[var(--text-primary)]">
				{meta.description}
			</p>
			<p className="text-[10px] text-[var(--text-muted)] tracking-wide font-mono italic">
				{meta.example}
			</p>
		</div>
	);
}

export default function IrregularVerbsPage() {
	const [activeCategory, setActiveCategory] = useState("irregular_full");
	const [verbsByCategory, setVerbsByCategory] = useState(
		Object.fromEntries(Object.keys(IRREGULAR_CATEGORIES).map((k) => [k, null])),
	);
	const [expandedId, setExpandedId] = useState(null);

	useEffect(() => {
		if (verbsByCategory[activeCategory] !== null) return;
		(async () => {
			const { data, error } = await supabase
				.from("VERBs")
				.select("*")
				.eq("category", activeCategory)
				.order("name");
			if (error) {
				console.error(error);
				setVerbsByCategory((prev) => ({ ...prev, [activeCategory]: [] }));
			} else {
				setVerbsByCategory((prev) => ({ ...prev, [activeCategory]: data }));
			}
		})();
	}, [activeCategory]);

	function handleCategorySwitch(cat) {
		setActiveCategory(cat);
		setExpandedId(null);
	}

	const currentVerbs = verbsByCategory[activeCategory];
	const activeType = currentVerbs?.[0]?.type?.replace("-", "").toLowerCase();

	return (
		<PageWrapper>
			<div className="mb-8">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Irregular verb"
					es="Verbos irregulares"
					description="Present tense — verbs that break the regular conjugation rules →"
				/>
			</div>

			<TabBar
				tabs={CATEGORY_TABS}
				activeTab={activeCategory}
				onSwitch={handleCategorySwitch}
			/>
			<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-xl p-4 flex flex-col gap-2 mb-8 sm:mb-10">
				<p className="text-[12px] text-[var(--text-primary)]">
					❗ Nosotros & Vosotros forms of irregular verbs often follow a pattern
					based on their regular conjugation type (-AR, -ER, -IR). This means
					that even if the verb is irregular in other forms, you can often
					predict the nosotros and vosotros forms by looking at the regular
					pattern for its type. ❗
				</p>
			</div>
			<CategoryDescription category={activeCategory} />

			<Eyebrow>Verbs in this category</Eyebrow>

			<VerbsGrid
				verbs={currentVerbs}
				type={activeType}
				expandedId={expandedId}
				onToggle={(id) => setExpandedId((prev) => (prev === id ? null : id))}
			/>

			<BackNext
				back="/a1/grammar/regular-verbs"
				next="/a1/usage/numbers"
				backLabel="Regular Verbs"
				nextLabel="Numbers"
			/>
		</PageWrapper>
	);
}
