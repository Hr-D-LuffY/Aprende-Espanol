import { useState } from "react";
import {
	DISTANCE_GROUPS,
	LOCATION_WORDS,
	GENDER_COLORS,
} from "../../../context/DemoCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";

import DistanceGroup from "../../../components/Demonstrative/DistanceGroup";
import LocationRow from "../../../components/Demonstrative/LocationRow";
import SectionBox from "../../../components/Demonstrative/SectionBox";

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DemonstrativePage() {
	const [activeGroup, setActiveGroup] = useState("near");

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Demonstratives"
					es="demostrativos"
					description="Point at things near, mid-range, or far away. Three distances, three sets — masculine, feminine, and neuter →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Distance legend */}
			<div className="flex flex-wrap items-center gap-3 mb-8 px-1">
				<div className="flex items-center gap-2">
					<span className="w-2 h-2 rounded-full bg-[var(--accent)] inline-block" />
					<span className="text-[10px] text-[var(--text-muted)] tracking-[0.1em] uppercase">
						Speaker
					</span>
				</div>
				<div className="flex-1 border-t border-dashed border-[var(--border)]" />
				<div className="flex items-center gap-2">
					<span className="text-[10px] text-[var(--text-label)] tracking-[0.1em] uppercase">
						Listener
					</span>
				</div>
				<div className="flex-1 border-t border-dashed border-[var(--border)]" />
				<div className="flex items-center gap-2">
					<span className="text-[10px] text-[#27272a] tracking-[0.1em] uppercase">
						Far away
					</span>
				</div>
			</div>

			{/* Distance groups */}
			<div className="flex flex-col gap-3 mb-14">
				{DISTANCE_GROUPS.map((group) => (
					<DistanceGroup
						key={group.id}
						group={group}
						isActive={activeGroup === group.id}
						onClick={() =>
							setActiveGroup(activeGroup === group.id ? null : group.id)
						}
					/>
				))}
			</div>

			{/* Gender key */}
			<div className="flex flex-wrap items-center gap-4 mb-14 px-1">
				<span className="text-[10px] tracking-[0.14em] uppercase text-[#27272a]">
					Gender key
				</span>
				{Object.entries(GENDER_COLORS)
					.slice(0, 3)
					.map(([k, v]) => (
						<div key={k} className="flex items-center gap-1.5">
							<span
								className={`w-1.5 h-1.5 rounded-full inline-block ${v.dot}`}
							/>
							<span className={`text-[10px] ${v.text}`}>{v.label}</span>
						</div>
					))}
			</div>

			{/* Location words */}
			<SectionBox
				eyebrow="Location adverbs"
				title="Aquí · Allí · Hay"
				footer={
					<div className="border-l-2 border-[#f59e0b]/40 pl-4">
						<p className="text-[10px] tracking-[0.12em] uppercase text-[var(--accent)]/60 mb-1">
							tip
						</p>
						<p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
							<span className="text-[var(--text-secondary)]">Hay</span> never
							changes — use it for both "there is" and "there are". Hay un
							libro. Hay tres libros.
						</p>
					</div>
				}
			>
				{LOCATION_WORDS.map((item) => (
					<LocationRow key={item.spanish} item={item} />
				))}
			</SectionBox>

			<BackNext
				back="/a1/grammar/sentence-structure"
				next="/a1/grammar/possessive-adjectives"
				backLabel="Sentence Structure"
				nextLabel="Possessive Adjectives"
			/>
		</PageWrapper>
	);
}
