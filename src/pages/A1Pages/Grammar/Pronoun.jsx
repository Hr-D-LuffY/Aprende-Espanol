import { useState } from "react";
import { PRONOUNS, PERSON_COLOR } from "../../../context/PronounCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import DetailPanel from "../../../components/Pronoun/DetailPanel";
import PronounCard from "../../../components/Pronoun/PronounCard";

export default function PronounsPage() {
	const [active, setActive] = useState("yo");
	const activeData = PRONOUNS.find((p) => p.id === active);

	const singular = PRONOUNS.filter((p) => p.number === "singular");
	const plural = PRONOUNS.filter((p) => p.number === "plural");

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Subject Pronouns"
					es="pronombre sujeto"
					description="Spanish pronouns identify who is performing the action. They're often
					omitted in speech since verb endings already encode person — but
					essential to know →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Split layout */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
				{/* Left — pronoun grid */}
				<div className="flex flex-col gap-6">
					{/* Singular group */}
					<div>
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-3 flex items-center gap-2">
							<span className="w-4 h-px bg-[#27272a] inline-block" />
							Singular
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
							{singular.map((p) => (
								<PronounCard
									key={p.id}
									pronoun={p}
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
								<PronounCard
									key={p.id}
									pronoun={p}
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
				back="/a1/grammar/adjective"
				next="/a1/grammar/sentence-structure"
				backLabel="Adjective"
				nextLabel="Sentence Structure"
			/>
		</PageWrapper>
	);
}
