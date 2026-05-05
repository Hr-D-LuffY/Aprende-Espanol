import { SER_CONJUGATIONS, SER_CRITERIA } from "../../../context/Ser&EstarCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import RuleBanner from "../../../components/Verb/RuleBanner";
import ConjRow from "../../../components/Verb/ConjRow";
import CriteriaBlock from "../../../components/Verb/CriteriaBlock";

export default function SerPage() {
	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="SER"
					es=" To be (permanent)"
					description="Use SER for things that are permanent or defining — identity, origin, time, occupation →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			<RuleBanner
				rule="SER = WHAT something IS"
				note="Use SER for things that are permanent or defining — identity, origin, time, occupation."
				flag="S"
			/>

			{/* Conjugation */}
			<div className="mb-8">
				<Eyebrow>Conjugation</Eyebrow>
				<div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] px-6">
					{SER_CONJUGATIONS.map((c) => (
						<ConjRow key={c.pronoun} {...c} />
					))}
				</div>
			</div>

			{/* DOCTOR */}
			<div className="mb-8">
				<Eyebrow>Criteria</Eyebrow>
				<div className="border border-[var(--border)] rounded-xl px-5 py-3 bg-[var(--surface)] mb-6 inline-flex items-center gap-3">
					{"DOCTOR".split("").map((l, i) => (
						<span
							key={i}
							className="text-[18px] font-semibold text-[var(--accent)] tracking-[0.12em]"
						>
							{l}
						</span>
					))}
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					{SER_CRITERIA.map((c) => (
						<CriteriaBlock key={c.title} {...c} />
					))}
				</div>
			</div>

			<BackNext
				back="/a1/grammar/possessive-adjectives"
				next="/a1/grammar/estar"
				backLabel="Possessive Adjectives"
				nextLabel="Estar Verb"
			/>
		</PageWrapper>
	);
}
