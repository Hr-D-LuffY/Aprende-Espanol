import { useState } from "react";
import {
	MASCULINE_RULES,
	FEMININE_RULES,
	GENDER_PAIRS,
	CONSONANT_PAIRS,
	EXCEPTIONS,
} from "../../../context/NounCon.js";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import RuleTag from "../../../components/NounGender/RuleTag.jsx";
import WordCard from "../../../components/NounGender/WordCard.jsx";
import WordGrid from "../../../components/NounGender/WordGrid.jsx";
import RuleBlock from "../../../components/NounGender/RuleBlock.jsx";
import InfoNote from "../../../components/NounGender/InfoNote.jsx";
import PairTable from "../../../components/NounGender/PairTable.jsx";
import GenderDot from "../../../components/NounGender/GenderDot.jsx";

const TABS = [
	{ id: "masculine", label: "Masculine" },
	{ id: "feminine", label: "Feminine" },
	{ id: "changing", label: "Changing Gender" },
];

function SectionLabel({ children }) {
	return (
		<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--accent)]/80 mb-3 mt-8">
			{children}
		</p>
	);
}

// ── GENDER BADGE (inline helper, used in ChangingPanel) ──────────────────────

function GenderBadge({ gender }) {
	const isM = gender === "M";
	return (
		<span
			className="text-[10px] px-1.5 py-0.5 rounded-full border"
			style={
				isM ?
					{
						color: "#60a5fa",
						borderColor: "rgba(96,165,250,0.3)",
						background: "rgba(96,165,250,0.08)",
					}
				:	{
						color: "#f472b6",
						borderColor: "rgba(244,114,182,0.3)",
						background: "rgba(244,114,182,0.08)",
					}
			}
		>
			{gender}
		</span>
	);
}

// ── TAB PANELS ────────────────────────────────────────────────────────────────

function MasculinePanel() {
	return (
		<div>
			<InfoNote gender="M">
				Masculine nouns use{" "}
				<strong className="text-[var(--text-secondary)]">el</strong> (singular)
				and <strong className="text-[var(--text-secondary)]">los</strong>{" "}
				(plural). We will learn about articles later.
			</InfoNote>
			{MASCULINE_RULES.map((rule, i) => (
				<div key={rule.num}>
					<RuleBlock rule={rule} gender="M" />
					{i < MASCULINE_RULES.length - 1 && (
						<div className="h-px bg-[#1c1c1f] my-6" />
					)}
				</div>
			))}
		</div>
	);
}

function FemininePanel() {
	return (
		<div>
			<InfoNote gender="F">
				Feminine nouns use{" "}
				<strong className="text-[var(--text-secondary)]">la</strong> (singular)
				and <strong className="text-[var(--text-secondary)]">las</strong>{" "}
				(plural). We will learn about articles later.
			</InfoNote>
			{FEMININE_RULES.map((rule, i) => (
				<div key={rule.num}>
					<RuleBlock rule={rule} gender="F" />
					{i < FEMININE_RULES.length - 1 && (
						<div className="h-px bg-[#1c1c1f] my-6" />
					)}
				</div>
			))}
		</div>
	);
}

function ChangingPanel() {
	return (
		<div>
			<InfoNote gender="M">
				Most nouns change gender by swapping the ending. Base pattern:{" "}
				<strong className="text-[var(--text-secondary)]">-o → -a</strong>.
			</InfoNote>

			<PairTable
				pairs={GENDER_PAIRS}
				pattern="Pattern 01"
				description="Change -O → -A"
			/>
			<PairTable
				pairs={CONSONANT_PAIRS}
				pattern="Pattern 02"
				description="Add -A to consonant nouns"
			/>

			{/* Exceptions */}
			<div className="mt-8 border border-[var(--border)] rounded-xl overflow-hidden">
				<div className="px-4 py-2.5 bg-[var(--surface)] border-b border-[var(--border)]">
					<span className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]">
						⚡ Exceptions — surprising genders
					</span>
				</div>
				{/* MOBILE FIX: 1-col on mobile → 2-col on sm → 3-col on lg */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1c1c1f]">
					{EXCEPTIONS.map((exc) => (
						<div
							key={exc.es}
							className="bg-[var(--bg)] p-3 hover:bg-[var(--surface)] transition-colors duration-150"
						>
							<div className="flex items-center gap-2 mb-0.5">
								<span className="text-[13px] text-[var(--text-primary)]">
									{exc.es}
								</span>
								<GenderBadge gender={exc.gender} />
							</div>
							<p className="text-[10px] text-[var(--text-label)] tracking-[0.04em] mb-0.5">
								{exc.pron}
							</p>
							<p className="text-[11px] text-[var(--text-muted)] leading-snug">
								{exc.en}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Tip */}
			<div className="mt-6 border border-[var(--border)] rounded-xl p-4 bg-[var(--surface)]">
				<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
					Tip
				</p>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed tracking-[0.02em]">
					The safest approach is to learn each noun with its article —{" "}
					<span className="text-[#60a5fa]">el libro</span>,{" "}
					<span className="text-[#f472b6]">la casa</span>. Over time, patterns
					become instinct. Exceptions are few — but they matter.
				</p>
			</div>
		</div>
	);
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function NounGenderPage() {
	const [activeTab, setActiveTab] = useState("masculine");

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Noun Gender"
					es="Género de sustantivos"
					description="Every Spanish noun is Masculine or Feminine — even objects and things
					have gender →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Tabs — MOBILE FIX: scrollable on narrow screens */}
			<div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
				<div className="flex gap-0 border-b border-[var(--border)] mb-9 min-w-max sm:min-w-0">
					{TABS.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase border-b-2 -mb-px transition-colors duration-150 cursor-pointer bg-transparent whitespace-nowrap
                ${
									activeTab === tab.id ?
										"text-[var(--accent)] border-[#f59e0b]"
									:	"text-[var(--text-muted)] border-transparent hover:text-[var(--text-secondary)]"
								}`}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>

			{/* Panels */}
			{activeTab === "masculine" && <MasculinePanel />}
			{activeTab === "feminine" && <FemininePanel />}
			{activeTab === "changing" && <ChangingPanel />}

			{/* Back & Next link */}
			<BackNext
				back="/a1/pronunciation"
				next="/a1/grammar/singular-plural"
				backLabel="Pronunciation"
				nextLabel="Singular-Plural"
			/>
		</PageWrapper>
	);
}
