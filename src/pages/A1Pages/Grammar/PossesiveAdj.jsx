import { useState } from "react";
import { PERSON_COLOR, POSSESSIVES } from "../../../context/PossesiveAdjCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import DetailPanel from "../../../components/Pronoun/DetailPanel";
import PossessiveAdjCard from "../../../components/Pronoun/PossessiveAdjCard";

// ── Page ──────────────────────────────────────────────────────────────────

export default function PossessiveAdjPage() {
	const [active, setActive] = useState("mi");
	const activeData = POSSESSIVES.find((p) => p.id === active);

	const singular = POSSESSIVES.filter((p) => p.number === "singular");
	const plural = POSSESSIVES.filter((p) => p.number === "plural");
	const both = POSSESSIVES.filter((p) => p.number === "both");

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Possessive Adjectives"
					es="adjetivos posesivos"
					description="Possessive adjectives show who owns something. They come before the
					noun: mi libro (my book), tu casa (your house). In Spanish, one word
					like “su” can mean his, her, their, or your (formal) →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Split layout */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
				{/* Left — item grid */}
				<div className="flex flex-col gap-6">
					{/* Singular group */}
					<div>
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3 flex items-center gap-2">
							<span className="w-4 h-px bg-[#27272a] inline-block" />
							Singular
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
							{singular.map((p) => (
								<PossessiveAdjCard
									key={p.id}
									item={p}
									active={active}
									onClick={setActive}
								/>
							))}
							{both.map((p) => (
								<PossessiveAdjCard
									key={p.id}
									item={p}
									active={active}
									onClick={setActive}
								/>
							))}
						</div>
					</div>

					{/* Plural group */}
					<div>
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3 flex items-center gap-2">
							<span className="w-4 h-px bg-[#27272a] inline-block" />
							Plural
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
							{plural.map((p) => (
								<PossessiveAdjCard
									key={p.id}
									item={p}
									active={active}
									onClick={setActive}
								/>
							))}
							{both.map((p) => (
								<PossessiveAdjCard
									key={p.id}
									item={p}
									active={active}
									onClick={setActive}
								/>
							))}
						</div>
					</div>

					{/* Legend */}
					<div className="flex gap-4 pt-2">
						{Object.entries(PERSON_COLOR).map(([person, color]) => (
							<div key={person} className="flex items-center gap-1.5">
								<span
									className="w-1.5 h-1.5 rounded-full"
									style={{ background: color }}
								/>
								<span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-label)]">
									{person} person
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Right — detail panel */}
				<div className="lg:sticky lg:top-8 order-last lg:order-none">
					<DetailPanel item={activeData} />
				</div>
			</div>

			<BackNext
				back="/a1/grammar/demonstrative"
				next="/a1/grammar/ser"
				backLabel="Demonstratives"
				nextLabel="Ser Verb"
			/>
		</PageWrapper>
	);
}
