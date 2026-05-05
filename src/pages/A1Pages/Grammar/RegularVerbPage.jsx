import { useState, useEffect } from "react";
import { supabase } from "../../../App";

import {
	TABS,
	CONJUGATION_PATTERNS,
	ENDINGS_BY_TYPE,
} from "../../../context/RegVerbCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";
import TabBar from "../../../components/TabBar";

import ConjugationBar from "../../../components/Verb/ConjugationBar";
import VerbsGrid from "../../../components/Verb/VerbsGrid";

export default function RegularVerbsPage() {
	const [activeTab, setActiveTab] = useState(TABS[0].id);
	const [verbsByType, setVerbsByType] = useState({
		ar: null,
		er: null,
		ir: null,
	});
	const [expandedId, setExpandedId] = useState(null);

	useEffect(() => {
		if (verbsByType[activeTab] !== null) return;

		(async () => {
			const enumValue = `-${activeTab.toUpperCase()}`;

			const { data, error } = await supabase
				.from("VERBs")
				.select("*")
				.eq("category", "regular")
				.eq("type", enumValue)
				.order("name");

			if (error) {
				console.error(error);
				setVerbsByType((prev) => ({ ...prev, [activeTab]: [] }));
			} else {
				setVerbsByType((prev) => ({ ...prev, [activeTab]: data }));
			}
		})();
	}, [activeTab]);

	function handleTabSwitch(id) {
		setActiveTab(id);
		setExpandedId(null);
	}

	function handleToggle(id) {
		setExpandedId((prev) => (prev === id ? null : id));
	}

	// derive the key ConjugationBar expects, e.g. "-AR"
	const conjugationKey = `-${activeTab.toUpperCase()}`;

	return (
		<PageWrapper>
			<div>
				<div className="mb-8">
					<PageReference reference="A1" topic="Grammar" />
					<PageHeader
						title="Regular verb"
						es="Verbos regulares"
						description="Present tense conjugation — consistent endings, no stem changes →"
					/>
				</div>

				<TabBar tabs={TABS} activeTab={activeTab} onSwitch={handleTabSwitch} />
				<ConjugationBar
					type={activeTab}
					tabs={TABS}
					patterns={CONJUGATION_PATTERNS}
				/>

				<Eyebrow>Verbs in this category</Eyebrow>

				<VerbsGrid
					verbs={verbsByType[activeTab]}
					type={activeTab}
					expandedId={expandedId}
					onToggle={handleToggle}
				/>

				<BackNext
					back="/a1/grammar/contraction"
					next="/a1/grammar/irregular-verbs"
					backLabel="Contraction"
					nextLabel="Irregular Verbs"
				/>
			</div>
		</PageWrapper>
	);
}
