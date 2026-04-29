import { useState } from "react";
import BackNext from "/src/components/BackNext.jsx";
// ─── DATA ─────────────────────────────────────────────────────────────────────

const DISTANCE_GROUPS = [
	{
		id: "near",
		label: "Near",
		sublabel: "este / esta / esto",
		marker: "●",
		desc: "Right here — something close to the speaker",
		items: [
			{
				spanish: "Este",
				gender: "M",
				meaning: "This",
				example: "Este libro",
				ex_en: "This book",
			},
			{
				spanish: "Esta",
				gender: "F",
				meaning: "This",
				example: "Esta mesa",
				ex_en: "This table",
			},
			{
				spanish: "Esto",
				gender: "NEU",
				meaning: "This",
				example: "¿Qué es esto?",
				ex_en: "What is this?",
			},
			{
				spanish: "Estos",
				gender: "M·PL",
				meaning: "These",
				example: "Estos días",
				ex_en: "These days",
			},
			{
				spanish: "Estas",
				gender: "F·PL",
				meaning: "These",
				example: "Estas flores",
				ex_en: "These flowers",
			},
		],
	},
	{
		id: "mid",
		label: "There",
		sublabel: "ese / esa / eso",
		marker: "◉",
		desc: "Near the listener — something at a medium distance",
		items: [
			{
				spanish: "Ese",
				gender: "M",
				meaning: "That",
				example: "Ese coche",
				ex_en: "That car",
			},
			{
				spanish: "Esa",
				gender: "F",
				meaning: "That",
				example: "Esa silla",
				ex_en: "That chair",
			},
			{
				spanish: "Eso",
				gender: "NEU",
				meaning: "That",
				example: "¿Por qué eso?",
				ex_en: "Why that?",
			},
			{
				spanish: "Esos",
				gender: "M·PL",
				meaning: "Those",
				example: "Esos chicos",
				ex_en: "Those guys",
			},
			{
				spanish: "Esas",
				gender: "F·PL",
				meaning: "Those",
				example: "Esas ideas",
				ex_en: "Those ideas",
			},
		],
	},
	{
		id: "far",
		label: "Far",
		sublabel: "aquel / aquella / aquello",
		marker: "○",
		desc: "Over there — distant from both speaker and listener",
		items: [
			{
				spanish: "Aquel",
				gender: "M",
				meaning: "That",
				example: "Aquel hombre",
				ex_en: "That man (far)",
			},
			{
				spanish: "Aquella",
				gender: "F",
				meaning: "That",
				example: "Aquella ciudad",
				ex_en: "That city (far)",
			},
			{
				spanish: "Aquello",
				gender: "NEU",
				meaning: "That",
				example: "¿Qué es aquello?",
				ex_en: "What is that?",
			},
			{
				spanish: "Aquellos",
				gender: "M·PL",
				meaning: "Those",
				example: "Aquellos tiempos",
				ex_en: "Those times (far)",
			},
			{
				spanish: "Aquellas",
				gender: "F·PL",
				meaning: "Those",
				example: "Aquellas montañas",
				ex_en: "Those mountains",
			},
		],
	},
];

const LOCATION_WORDS = [
	{ spanish: "Aquí", meaning: "Here", note: "near the speaker" },
	{ spanish: "Allí", meaning: "There", note: "near the listener or far" },
	{ spanish: "Allá", meaning: "Over there", note: "more distant, vague" },
	{
		spanish: "Hay",
		meaning: "There is / are",
		note: "existence — singular & plural",
	},
];

const GENDER_COLORS = {
	M: { dot: "bg-[#93C5FD]", text: "text-[#93C5FD]", label: "Masc" },
	F: { dot: "bg-[#FCA5A5]", text: "text-[#FCA5A5]", label: "Fem" },
	NEU: { dot: "bg-[#C4B5FD]", text: "text-[#C4B5FD]", label: "Neut" },
	"M·PL": { dot: "bg-[#93C5FD]", text: "text-[#93C5FD]", label: "Masc·Pl" },
	"F·PL": { dot: "bg-[#FCA5A5]", text: "text-[#FCA5A5]", label: "Fem·Pl" },
};

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function GenderBadge({ gender }) {
	const g = GENDER_COLORS[gender] ?? GENDER_COLORS["NEU"];
	return (
		<span
			className={`text-[9px] tracking-[0.12em] uppercase font-semibold ${g.text}`}
		>
			{g.label}
		</span>
	);
}

function DemoCard({ item }) {
	return (
		<div className="group border border-[#1c1c1f] rounded-xl bg-[#09090b] p-4 hover:border-[#27272a] hover:bg-[#111113] transition-all duration-150">
			<div className="flex items-start justify-between mb-2">
				<p className="text-[22px] font-light text-[#fafafa] tracking-[-0.02em]">
					{item.spanish}
				</p>
				<GenderBadge gender={item.gender} />
			</div>
			<p className="text-[12px] text-[#52525b] mb-3">{item.meaning}</p>
			<div className="border-t border-[#1c1c1f] pt-3">
				<p className="text-[11px] text-[#a1a1aa] italic">{item.example}</p>
				<p className="text-[10px] text-[#3f3f46] mt-0.5">{item.ex_en}</p>
			</div>
		</div>
	);
}

function DistanceGroup({ group, isActive, onClick }) {
	return (
		<div
			className={`border rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
				isActive ?
					"border-[#f59e0b]/40 bg-[#111113]"
				:	"border-[#1c1c1f] bg-[#111113] hover:border-[#27272a]"
			}`}
			onClick={onClick}
		>
			{/* Group header */}
			<div
				className={`px-6 py-5 border-b ${isActive ? "border-[#f59e0b]/20" : "border-[#1c1c1f]"}`}
			>
				<div className="flex items-center gap-3 mb-1">
					<span
						className={`text-[18px] ${isActive ? "text-[#f59e0b]" : "text-[#27272a]"} transition-colors`}
					>
						{group.marker}
					</span>
					<p
						className={`text-[13px] font-semibold tracking-[-0.01em] ${isActive ? "text-[#fafafa]" : "text-[#52525b]"} transition-colors`}
					>
						{group.label}
					</p>
					<span className="text-[10px] text-[#3f3f46] tracking-wide ml-auto">
						{group.sublabel}
					</span>
				</div>
				<p className="text-[11px] text-[#3f3f46] leading-relaxed">
					{group.desc}
				</p>
			</div>

			{/* Cards — only shown when active */}
			{isActive && (
				<div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{group.items.map((item) => (
						<DemoCard key={item.spanish} item={item} />
					))}
				</div>
			)}
		</div>
	);
}

function LocationRow({ item }) {
	return (
		<div className="grid grid-cols-[100px_120px_1fr] gap-4 items-center py-3 border-b border-[#1c1c1f] last:border-0">
			<span className="text-[18px] font-light text-[#f59e0b]">
				{item.spanish}
			</span>
			<span className="text-[13px] text-[#a1a1aa]">{item.meaning}</span>
			<span className="text-[11px] text-[#3f3f46]">{item.note}</span>
		</div>
	);
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DemonstrativePage() {
	const [activeGroup, setActiveGroup] = useState("near");

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
						Grammar — A1 · Foundation
					</p>
					<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
						Demonstratives
					</h1>
					<p className="text-[13px] text-[#52525b] leading-relaxed max-w-lg">
						Point at things near, mid-range, or far away. Three distances, three
						sets — masculine, feminine, and neuter.
					</p>
				</div>

				{/* Distance legend */}
				<div className="flex items-center gap-6 mb-8 px-1">
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-[#f59e0b] inline-block" />
						<span className="text-[10px] text-[#52525b] tracking-[0.1em] uppercase">
							Speaker
						</span>
					</div>
					<div className="flex-1 border-t border-dashed border-[#1c1c1f]" />
					<div className="flex items-center gap-2">
						<span className="text-[10px] text-[#3f3f46] tracking-[0.1em] uppercase">
							Listener
						</span>
					</div>
					<div className="flex-1 border-t border-dashed border-[#1c1c1f]" />
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
				<div className="flex items-center gap-5 mb-14 px-1">
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
				<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] overflow-hidden">
					<div className="border-b border-[#1c1c1f] px-8 py-5">
						<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-1">
							Location adverbs
						</p>
						<h2 className="text-xl font-light tracking-[-0.03em] text-[#fafafa]">
							Aquí · Allí · Hay
						</h2>
					</div>
					<div className="px-8 py-2">
						{LOCATION_WORDS.map((item) => (
							<LocationRow key={item.spanish} item={item} />
						))}
					</div>
					<div className="border-t border-[#1c1c1f] px-8 py-4">
						<div className="border-l-2 border-[#f59e0b]/40 pl-4">
							<p className="text-[10px] tracking-[0.12em] uppercase text-[#f59e0b]/60 mb-1">
								tip
							</p>
							<p className="text-[12px] text-[#52525b] leading-relaxed">
								<span className="text-[#a1a1aa]">Hay</span> never changes — use
								it for both "there is" and "there are". Hay un libro. Hay tres
								libros.
							</p>
						</div>
					</div>
				</div>

				<BackNext
					back="/a1/grammar/sentence-structure"
					next="#"
					backLabel="Sentence Structure"
					nextLabel="Possessive Adjectives"
				/>
			</div>
		</div>
	);
}
