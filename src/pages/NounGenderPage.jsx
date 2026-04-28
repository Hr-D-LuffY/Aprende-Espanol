import { useState } from "react";
import {
	MASCULINE_RULES,
	FEMININE_RULES,
	MASCULINE_VOCAB,
	FEMININE_VOCAB,
	GENDER_PAIRS,
	CONSONANT_PAIRS,
	EXCEPTIONS,
} from "../context/NounCon.js";

import RuleTag from "../components/NounGender/RuleTag.jsx";
import WordCard from "../components/NounGender/WordCard.jsx";
import WordGrid from "../components/NounGender/WordGrid.jsx";
import RuleBlock from "../components/NounGender/RuleBlock.jsx";
import InfoNote from "../components/NounGender/InfoNote.jsx";
import PairTable from "../components/NounGender/PairTable.jsx";
import GenderDot from "../components/NounGender/GenderDot.jsx";

const TABS = [
	{ id: "masculine", label: "Masculine" },
	{ id: "feminine", label: "Feminine" },
	{ id: "changing", label: "Changing Gender" },
];

function SectionLabel({ children }) {
	return (
		<p className="text-[10px] tracking-[0.16em] uppercase text-[#f59e0b]/80 mb-3 mt-8">
			{children}
		</p>
	);
}

// ── TAB PANELS ────────────────────────────────────────────────────────────────

function MasculinePanel() {
	return (
		<div>
			<InfoNote gender="M">
				Masculine nouns use <strong className="text-[#a1a1aa]">el</strong>{" "}
				(singular) and <strong className="text-[#a1a1aa]">los</strong> (plural).
				We will learn about articles later.
			</InfoNote>
			{MASCULINE_RULES.map((rule, i) => (
				<div key={rule.num}>
					<RuleBlock rule={rule} gender="M" />
					{i < MASCULINE_RULES.length - 1 && (
						<div className="h-px bg-[#1c1c1f] my-6" />
					)}
				</div>
			))}
			<SectionLabel>Vocab</SectionLabel>
			<WordGrid words={MASCULINE_VOCAB} />
		</div>
	);
}

function FemininePanel() {
	return (
		<div>
			<InfoNote gender="F">
				Feminine nouns use <strong className="text-[#a1a1aa]">la</strong>{" "}
				(singular) and <strong className="text-[#a1a1aa]">las</strong> (plural).
				We will learn about articles later.
			</InfoNote>
			{FEMININE_RULES.map((rule, i) => (
				<div key={rule.num}>
					<RuleBlock rule={rule} gender="F" />
					{i < FEMININE_RULES.length - 1 && (
						<div className="h-px bg-[#1c1c1f] my-6" />
					)}
				</div>
			))}
			<SectionLabel>Vocab</SectionLabel>
			<WordGrid words={FEMININE_VOCAB} />
		</div>
	);
}

function ChangingPanel() {
	return (
		<div>
			<InfoNote gender="M">
				Most nouns change gender by swapping the ending. Base pattern:{" "}
				<strong className="text-[#a1a1aa]">-o → -a</strong>.
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
			<div className="mt-8 border border-[#1c1c1f] rounded-xl overflow-hidden">
				<div className="px-4 py-2.5 bg-[#111113] border-b border-[#1c1c1f]">
					<span className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46]">
						⚡ Exceptions — surprising genders
					</span>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#1c1c1f]">
					{EXCEPTIONS.map((exc) => (
						<div
							key={exc.es}
							className="bg-[#09090b] p-3 hover:bg-[#111113] transition-colors duration-150"
						>
							<div className="flex items-center gap-2 mb-0.5">
								<span className="text-[13px] text-[#fafafa]">{exc.es}</span>
								<span
									className="text-[10px] px-1.5 py-0.5 rounded-full border"
									style={
										exc.gender === "M" ?
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
									{exc.gender}
								</span>
							</div>
							<p className="text-[10px] text-[#3f3f46] tracking-[0.04em] mb-0.5">
								{exc.pron}
							</p>
							<p className="text-[11px] text-[#52525b] leading-snug">
								{exc.en}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Tip */}
			<div className="mt-6 border border-[#1c1c1f] rounded-xl p-4 bg-[#111113]">
				<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
					Tip
				</p>
				<p className="text-[12px] text-[#52525b] leading-relaxed tracking-[0.02em]">
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
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
					Reference — A1 · Grammar · Noun Gender
				</p>
				<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
					Noun Gender
				</h1>
				<p className="text-[13px] text-[#52525b] leading-relaxed mb-8 tracking-wide max-w-lg">
					Every Spanish noun is Masculine or Feminine — even objects and things
					have gender.
				</p>

				{/* Tabs */}
				<div className="flex gap-0 border-b border-[#1c1c1f] mb-9">
					{TABS.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase border-b-2 -mb-px transition-colors duration-150 cursor-pointer bg-transparent
                ${
									activeTab === tab.id ?
										"text-[#f59e0b] border-[#f59e0b]"
									:	"text-[#52525b] border-transparent hover:text-[#a1a1aa]"
								}`}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Panels */}
				{activeTab === "masculine" && <MasculinePanel />}
				{activeTab === "feminine" && <FemininePanel />}
				{activeTab === "changing" && <ChangingPanel />}
			</div>
		</div>
	);
}
