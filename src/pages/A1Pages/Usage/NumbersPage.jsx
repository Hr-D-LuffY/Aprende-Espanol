import { useState } from "react";
import BackNext from "../../../components/BackNext";

// ── Data ──────────────────────────────────────────────────────────────────────

const numbers = [
	{ n: 0, es: "cero", pron: "seh-ro" },
	{ n: 1, es: "uno", pron: "oo-no" },
	{ n: 2, es: "dos", pron: "dohs" },
	{ n: 3, es: "tres", pron: "trehs" },
	{ n: 4, es: "cuatro", pron: "kwah-tro" },
	{ n: 5, es: "cinco", pron: "seen-ko" },
	{ n: 6, es: "seis", pron: "says" },
	{ n: 7, es: "siete", pron: "syeh-teh" },
	{ n: 8, es: "ocho", pron: "oh-cho" },
	{ n: 9, es: "nueve", pron: "nweh-beh" },
	{ n: 10, es: "diez", pron: "dyehs" },
	{ n: 11, es: "once", pron: "on-seh" },
	{ n: 12, es: "doce", pron: "doh-seh" },
	{ n: 13, es: "trece", pron: "treh-seh" },
	{ n: 14, es: "catorce", pron: "ka-tor-seh" },
	{ n: 15, es: "quince", pron: "keen-seh" },
	{ n: 16, es: "dieciséis", pron: "dyeh-see-says" },
	{ n: 17, es: "diecisiete", pron: "dyeh-see-syeh-teh" },
	{ n: 18, es: "dieciocho", pron: "dyeh-see-oh-cho" },
	{ n: 19, es: "diecinueve", pron: "dyeh-see-nweh-beh" },
	{ n: 20, es: "veinte", pron: "bayn-teh" },
	{ n: 21, es: "veintiuno", pron: "bayn-tyoo-no" },
	{ n: 22, es: "veintidós", pron: "bayn-tee-dohs" },
	{ n: 23, es: "veintitrés", pron: "bayn-tee-trehs" },
	{ n: 24, es: "veinticuatro", pron: "bayn-tee-kwah-tro" },
	{ n: 25, es: "veinticinco", pron: "bayn-tee-seen-ko" },
	{ n: 26, es: "veintiséis", pron: "bayn-tee-says" },
	{ n: 27, es: "veintisiete", pron: "bayn-tee-syeh-teh" },
	{ n: 28, es: "veintiocho", pron: "bayn-tee-oh-cho" },
	{ n: 29, es: "veintinueve", pron: "bayn-tee-nweh-beh" },
	{ n: 30, es: "treinta", pron: "trayn-tah" },
	{ n: 40, es: "cuarenta", pron: "kwah-ren-tah" },
	{ n: 50, es: "cincuenta", pron: "seen-kwen-tah" },
	{ n: 60, es: "sesenta", pron: "seh-sen-tah" },
	{ n: 70, es: "setenta", pron: "seh-ten-tah" },
	{ n: 80, es: "ochenta", pron: "oh-chen-tah" },
	{ n: 90, es: "noventa", pron: "noh-ben-tah" },
	{ n: 100, es: "cien", pron: "syen" },
	{ n: 101, es: "ciento uno", pron: "syen-to oo-no" },
	{ n: 200, es: "doscientos", pron: "dos-syen-tos" },
	{
		n: 299,
		es: "doscientos noventa y nueve",
		pron: "dos-syen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 300, es: "trescientos", pron: "tres-syen-tos" },
	{
		n: 399,
		es: "trescientos noventa y nueve",
		pron: "tres-syen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 400, es: "cuatrocientos", pron: "kwah-tro-syen-tos" },
	{
		n: 499,
		es: "cuatrocientos noventa y nueve",
		pron: "kwah-tro-syen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 500, es: "quinientos", pron: "kee-nyen-tos" },
	{
		n: 599,
		es: "quinientos noventa y nueve",
		pron: "kee-nyen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 600, es: "seiscientos", pron: "says-syen-tos" },
	{
		n: 699,
		es: "seiscientos noventa y nueve",
		pron: "says-syen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 700, es: "setecientos", pron: "seh-teh-syen-tos" },
	{
		n: 799,
		es: "setecientos noventa y nueve",
		pron: "seh-teh-syen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 800, es: "ochocientos", pron: "oh-cho-syen-tos" },
	{
		n: 899,
		es: "ochocientos noventa y nueve",
		pron: "oh-cho-syen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 900, es: "novecientos", pron: "no-beh-syen-tos" },
	{
		n: 999,
		es: "novecientos noventa y nueve",
		pron: "no-beh-syen-tos no-ben-tah ee nweh-beh",
	},
	{ n: 1000, es: "mil", pron: "meel" },
];

const yearExamples = [
	{
		n: 1492,
		es: "mil cuatrocientos noventa y dos",
		note: "Columbus reaches the Americas",
	},
	{ n: 1776, es: "mil setecientos setenta y seis", note: "US independence" },
	{ n: 1900, es: "mil novecientos", note: "start of the 20th century" },
	{ n: 1969, es: "mil novecientos sesenta y nueve", note: "moon landing" },
	{ n: 2000, es: "dos mil", note: "año dos mil" },
	{ n: 2001, es: "dos mil uno", note: "note: no y after mil" },
	{ n: 2024, es: "dos mil veinticuatro", note: "this year" },
	{ n: 2500, es: "dos mil quinientos", note: "mid-millennium" },
	{ n: 3000, es: "tres mil", note: "upper boundary example" },
];

// ── Tabs config ───────────────────────────────────────────────────────────────

const TABS = [
	{
		id: "0-10",
		label: "0 – 10",
		color: "amber",
		dot: "bg-[#f59e0b]",
		active: "bg-[#f59e0b] text-[#09090b] border-[#f59e0b]",
		inactive:
			"text-[#52525b] border-[#27272a] hover:border-[#3f3f46] hover:text-[#71717a]",
		filter: (n) => n >= 0 && n <= 10,
		note: {
			title: "0 – 10 · the core set",
			body: "These are the atoms. Every other number is built from these. Drill them until they're automatic — you'll use them in every compound number.",
			tag: "memorise first",
			color: "amber",
		},
	},
	{
		id: "11-20",
		label: "11 – 20",
		color: "red",
		dot: "bg-[#f87171]",
		active: "bg-[#f87171] text-[#09090b] border-[#f87171]",
		inactive:
			"text-[#52525b] border-[#27272a] hover:border-[#3f3f46] hover:text-[#71717a]",
		filter: (n) => n >= 11 && n <= 20,
		note: {
			title: "11 – 20 · the irregular teens",
			body: "11–15 are completely unique words (once, doce…). 16–19 are fused forms of diez + the unit — written as one word. 20 is veinte, not veintiuno yet.",
			tag: "watch out",
			color: "red",
		},
	},
	{
		id: "21-29",
		label: "21 – 29",
		color: "purple",
		dot: "bg-[#a78bfa]",
		active: "bg-[#a78bfa] text-[#09090b] border-[#a78bfa]",
		inactive:
			"text-[#52525b] border-[#27272a] hover:border-[#3f3f46] hover:text-[#71717a]",
		filter: (n) => n >= 21 && n <= 29,
		note: {
			title: "21 – 29 · veinti- compounds",
			body: "All fused with veinti-. Note: veintiún (before masculine noun), veintiuna (before feminine noun). After 29 the pattern switches — treinta y uno (separate words).",
			tag: "pattern shift at 30",
			color: "purple",
		},
	},
	{
		id: "30-100",
		label: "30 – 100",
		color: "green",
		dot: "bg-[#4ade80]",
		active: "bg-[#4ade80] text-[#09090b] border-[#4ade80]",
		inactive:
			"text-[#52525b] border-[#27272a] hover:border-[#3f3f46] hover:text-[#71717a]",
		filter: (n) => n >= 30 && n <= 100,
		note: {
			title: "31 – 99 · tens + y + unit",
			body: "From 31 onwards: [ten] y [unit]. Treinta y uno, cuarenta y dos… The y (and) is always there. Tens are regular except sesenta (not seisenta) and setenta (not sietenta).",
			tag: "formula: ten + y + unit",
			color: "green",
		},
	},
	{
		id: "101-999",
		label: "101 – 999",
		color: "sky",
		dot: "bg-[#38bdf8]",
		active: "bg-[#38bdf8] text-[#09090b] border-[#38bdf8]",
		inactive:
			"text-[#52525b] border-[#27272a] hover:border-[#3f3f46] hover:text-[#71717a]",
		filter: (n) => n >= 101 && n <= 999,
		note: {
			title: "100 vs 101+",
			body: "Cien is used alone (exactly 100). The moment you go above 100, it becomes ciento — ciento uno, ciento veinte. This is one of the most common mistakes.",
			tag: "cien ≠ ciento",
			color: "sky",
		},
	},
	{
		id: "1000+",
		label: "1000+",
		color: "pink",
		dot: "bg-[#e879f9]",
		active: "bg-[#e879f9] text-[#09090b] border-[#e879f9]",
		inactive:
			"text-[#52525b] border-[#27272a] hover:border-[#3f3f46] hover:text-[#71717a]",
		filter: (n) => n >= 1000,
		note: null, // uses the special year block
	},
];

// ── Colour helpers ────────────────────────────────────────────────────────────

const numColor = (n) => {
	if (n <= 10) return "text-[#f59e0b]";
	if (n <= 20) return "text-[#f87171]";
	if (n <= 29) return "text-[#a78bfa]";
	if (n <= 100) return "text-[#4ade80]";
	if (n <= 999) return "text-[#38bdf8]";
	return "text-[#e879f9]";
};

const noteStyles = {
	amber: {
		border: "border-[#f59e0b]/30",
		bg: "bg-[#f59e0b]/5",
		tag: "text-[#f59e0b] border-[#f59e0b]/30 bg-[#f59e0b]/10",
		dot: "bg-[#f59e0b]",
	},
	red: {
		border: "border-[#f87171]/30",
		bg: "bg-[#f87171]/5",
		tag: "text-[#f87171] border-[#f87171]/30 bg-[#f87171]/10",
		dot: "bg-[#f87171]",
	},
	blue: {
		border: "border-[#38bdf8]/30",
		bg: "bg-[#38bdf8]/5",
		tag: "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/10",
		dot: "bg-[#38bdf8]",
	},
	sky: {
		border: "border-[#38bdf8]/30",
		bg: "bg-[#38bdf8]/5",
		tag: "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/10",
		dot: "bg-[#38bdf8]",
	},
	green: {
		border: "border-[#4ade80]/30",
		bg: "bg-[#4ade80]/5",
		tag: "text-[#4ade80] border-[#4ade80]/30 bg-[#4ade80]/10",
		dot: "bg-[#4ade80]",
	},
	purple: {
		border: "border-[#a78bfa]/30",
		bg: "bg-[#a78bfa]/5",
		tag: "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/10",
		dot: "bg-[#a78bfa]",
	},
	pink: {
		border: "border-[#e879f9]/30",
		bg: "bg-[#e879f9]/5",
		tag: "text-[#e879f9] border-[#e879f9]/30 bg-[#e879f9]/10",
		dot: "bg-[#e879f9]",
	},
};

// ── Sub-components ────────────────────────────────────────────────────────────

function NoteBlock({ title, body, tag, color }) {
	const s = noteStyles[color];
	return (
		<div className={`border ${s.border} ${s.bg} px-5 py-4 mb-4`}>
			<div className="flex items-center gap-2 mb-2">
				<span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
				<span
					className={`text-[10px] tracking-[0.14em] uppercase border px-2 py-0.5 ${s.tag}`}
				>
					{tag}
				</span>
			</div>
			<p className="text-[12px] font-semibold text-[#fafafa] tracking-[-0.01em] mb-1">
				{title}
			</p>
			<p className="text-[12px] text-[#a1a1aa] leading-relaxed">{body}</p>
		</div>
	);
}

function NumberRow({ n, es, pron }) {
	return (
		<div className="group flex items-baseline border-b border-[#0f0f11] hover:bg-[#111113] transition-colors duration-100">
			<span
				className={`w-20 shrink-0 text-[13px] font-semibold tracking-[-0.01em] py-3 pl-5 ${numColor(n)}`}
			>
				{n}
			</span>
			<span className="flex-1 text-[13px] text-[#fafafa] font-normal tracking-[-0.01em] py-3">
				{es}
			</span>
			<span className="w-52 shrink-0 text-[11px] text-[#52525b] tracking-[0.02em] py-3 pr-5 text-right group-hover:text-[#71717a] transition-colors">
				{pron}
			</span>
		</div>
	);
}

function YearRow({ n, es, note }) {
	return (
		<div className="group flex items-start border-b border-[#0f0f11] hover:bg-[#111113] transition-colors duration-100">
			<span className="w-20 shrink-0 text-[13px] font-semibold text-[#e879f9] py-3 pl-5 tracking-[-0.01em]">
				{n}
			</span>
			<div className="flex-1 py-3">
				<p className="text-[13px] text-[#fafafa]">{es}</p>
				<p className="text-[11px] text-[#52525b] mt-0.5">{note}</p>
			</div>
		</div>
	);
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NumbersPage() {
	const [activeTab, setActiveTab] = useState("0-10");
	const tab = TABS.find((t) => t.id === activeTab);
	const filtered = numbers.filter((num) => tab.filter(num.n));

	return (
		<div className="min-h-screen bg-[#09090b] font-mono text-[#fafafa]">
			<div className="max-w-3xl mx-auto px-0 pb-24">
				{/* Header */}
				<div className="px-5 pt-10 pb-6">
					<p className="text-[10px] tracking-[0.18em] text-[#3f3f46] uppercase mb-3">
						Reference · A1 · Numbers
					</p>
					<h1 className="text-[36px] font-light tracking-[-0.04em] text-[#fafafa] mb-2">
						Numbers <span className="text-[#3f3f46]">0 – 1000+</span>
					</h1>
					<p className="text-[13px] text-[#52525b] leading-relaxed">
						Complete reference with pronunciation. Select a range to focus on
						that section.
					</p>
				</div>

				{/* Tab pills */}
				<div className="px-5 mb-6 flex flex-wrap gap-2">
					{TABS.map((t) => (
						<button
							key={t.id}
							onClick={() => setActiveTab(t.id)}
							className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest border transition-all duration-150 cursor-pointer ${
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

				{/* Note for active tab */}
				{tab.note && (
					<div className="px-5">
						<NoteBlock {...tab.note} />
					</div>
				)}

				{/* Table header */}
				{activeTab !== "1000+" && (
					<div className="flex items-center border-y border-[#1c1c1f] bg-[#0d0d0f]">
						<span className="w-20 shrink-0 text-[9px] tracking-[0.2em] text-[#27272a] uppercase py-2.5 pl-5">
							NUM
						</span>
						<span className="flex-1 text-[9px] tracking-[0.2em] text-[#27272a] uppercase py-2.5">
							ESPAÑOL
						</span>
						<span className="w-52 shrink-0 text-[9px] tracking-[0.2em] text-[#27272a] uppercase py-2.5 pr-5 text-right">
							PRONUNCIATION
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
					<div className="px-5">
						<div className="border border-[#e879f9]/20 bg-[#e879f9]/5 px-5 py-4 mb-5">
							<div className="flex items-center gap-2 mb-2">
								<span className="w-1.5 h-1.5 rounded-full bg-[#e879f9]" />
								<span className="text-[10px] tracking-[0.14em] uppercase text-[#e879f9] border border-[#e879f9]/30 bg-[#e879f9]/10 px-2 py-0.5">
									key rule
								</span>
							</div>
							<p className="text-[12px] font-semibold text-[#fafafa] mb-1">
								mil, dos mil, tres mil — never "un mil"
							</p>
							<p className="text-[12px] text-[#a1a1aa] leading-relaxed">
								1000 is just <span className="text-[#fafafa]">mil</span> (never
								un mil). For compound years: mil + hundreds + tens + units — no
								"y" directly after mil. 2001 = dos mil uno, not dos mil y uno.
							</p>
						</div>

						<p className="text-[10px] tracking-[0.18em] text-[#3f3f46] uppercase mb-4">
							Years 1000 – 3000
						</p>

						{/* Year table header */}
						<div className="flex items-center border-y border-[#1c1c1f] bg-[#0d0d0f]">
							<span className="w-20 shrink-0 text-[9px] tracking-[0.2em] text-[#27272a] uppercase py-2.5 pl-5">
								YEAR
							</span>
							<span className="flex-1 text-[9px] tracking-[0.2em] text-[#27272a] uppercase py-2.5">
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
			</div>
		</div>
	);
}
