import { useState } from "react";
import { numbers, yearExamples, TABS } from "../../../context/NumberCon";

import { PageWrapper } from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";

import NoteBlock from "/src/components/Usage/NoteBlock.jsx";
import NumberRow from "/src/components/Usage/NumberRow";
import YearRow from "/src/components/Usage/YearRow";

export default function NumbersPage() {
	const [activeTab, setActiveTab] = useState("0-10");
	const tab = TABS.find((t) => t.id === activeTab);
	const filtered = numbers.filter((num) => tab.filter(num.n));

	return (
		<PageWrapper>
			{/* Header */}
			<div className="mb-10">
				<PageReference reference="A1" topic="Usage" />
				<PageHeader
					title="Numbers"
					es="números"
					description="Complete reference with pronunciation. Select a range to focus on that
					section →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Tab pills — scrollable on mobile */}
			<div className="px-4 sm:px-5 mb-6 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
				{TABS.map((t) => (
					<button
						key={t.id}
						onClick={() => setActiveTab(t.id)}
						className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest border transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
							activeTab === t.id ? t.active : t.inactive
						}`}
					>
						<span
							className={`w-1.5 h-1.5 rounded-full ${activeTab === t.id ? "bg-[#09090b]" : t.dot}`}
						/>
						{t.label}
					</button>
				))}
			</div>

			{/* Note block */}
			{tab.note && (
				<div className="px-4 sm:px-5">
					<NoteBlock {...tab.note} />
				</div>
			)}

			{/* Table header */}
			{activeTab !== "1000+" && (
				<div className="flex items-center border-y border-[var(--border)] bg-[#0d0d0f]">
					<span className="w-14 sm:w-20 shrink-0 text-[9px] tracking-[0.2em] text-[#ffffff] uppercase py-2.5 pl-3 sm:pl-5">
						NUM
					</span>
					<span className="flex-1 text-[9px] tracking-[0.2em] text-[#ffffff] uppercase py-2.5">
						ESPAÑOL
					</span>
					<span className="hidden sm:block w-52 shrink-0 text-[9px] tracking-[0.2em] text-[#ffffff] uppercase py-2.5 pr-5 text-right">
						PRONUNCIATION
					</span>
					<span className="sm:hidden text-[9px] tracking-[0.2em] text-[#ffffff] uppercase py-2.5 pr-3">
						PRON.
					</span>
				</div>
			)}

			{/* Number rows */}
			{activeTab !== "1000+" && (
				<div>
					{filtered.map((num) => (
						<NumberRow key={num.n} {...num} />
					))}
				</div>
			)}

			{/* 1000+ — year examples */}
			{activeTab === "1000+" && (
				<div className="">
					<div className="border border-[#e879f9]/20 bg-[#e879f9]/5 px-4 sm:px-5 py-4 mb-5">
						<div className="flex items-center gap-2 mb-2">
							<span className="w-1.5 h-1.5 rounded-full bg-[#e879f9]" />
							<span className="text-[10px] tracking-[0.14em] uppercase text-[#e879f9] border border-[#e879f9]/30 bg-[#e879f9]/10 px-2 py-0.5">
								key rule
							</span>
						</div>
						<p className="text-[12px] font-semibold text-[var(--text-primary)] mb-1">
							mil, dos mil, tres mil — never "un mil"
						</p>
						<p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
							1000 is just{" "}
							<span className="text-[var(--text-primary)]">mil</span> (never un
							mil). For compound years: mil + hundreds + tens + units — no "y"
							directly after mil. 2001 = dos mil uno, not dos mil y uno.
						</p>
					</div>

					<p className="text-[10px] tracking-[0.18em] text-[var(--text-label)] uppercase mb-4">
						Years 1000 – 3000
					</p>

					<div className="flex items-center border-y border-[var(--border)] bg-[#0d0d0f]">
						<span className="w-14 sm:w-20 shrink-0 text-[9px] tracking-[0.2em] text-[#ffffff] uppercase py-2.5 pl-3 sm:pl-5">
							YEAR
						</span>
						<span className="flex-1 text-[9px] tracking-[0.2em] text-[#ffffff] uppercase py-2.5">
							EN ESPAÑOL
						</span>
					</div>

					{yearExamples.map((y) => (
						<YearRow key={y.n} {...y} />
					))}
				</div>
			)}

			<BackNext
				back="/a1/grammar/negation"
				next="/a1/usage/time"
				backLabel="Negation"
				nextLabel="Time"
			/>
		</PageWrapper>
	);
}
