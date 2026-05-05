import {
	ESTAR_CONJUGATIONS,
	ESTAR_CRITERIA,
} from "../../../context/Ser&EstarCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import RuleBanner from "../../../components/Verb/RuleBanner";
import ConjRow from "../../../components/Verb/ConjRow";
import CriteriaBlock from "../../../components/Verb/CriteriaBlock";

export default function EstarPage() {
	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="ESTAR"
					es=" To be (temporary)"
					description="Use ESTAR for temporary states, conditions, emotions, and locations →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			<RuleBanner
				rule="ESTAR = HOW something IS / WHERE it is"
				note="Use ESTAR for temporary states, conditions, emotions, and locations. Also for progressive (-ing) forms →"
				flag="E"
			/>

			{/* Conjugation */}
			<div className="mb-8">
				<Eyebrow>Conjugation</Eyebrow>
				<div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] px-6">
					{ESTAR_CONJUGATIONS.map((c) => (
						<ConjRow key={c.pronoun} {...c} />
					))}
				</div>
			</div>

			{/* Criteria */}
			<div className="mb-8">
				<Eyebrow>Criteria</Eyebrow>
				<div className="flex flex-col gap-3">
					{ESTAR_CRITERIA.map((c) => (
						<CriteriaBlock key={c.title} {...c} />
					))}
				</div>
			</div>

			<BackNext
				back="/a1/grammar/ser"
				next="/a1/grammar/tener"
				backLabel="Ser Verb"
				nextLabel="Tener Verb"
			/>
		</PageWrapper>
	);
}
