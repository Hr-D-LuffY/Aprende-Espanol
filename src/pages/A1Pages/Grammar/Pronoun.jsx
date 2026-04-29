import { useState } from "react";
import BackNext from "../../../components/BackNext";
import DetailPanel from "../../../components/DetailPanel";

// ── Primitives ─────────────────────────────────────────────────────────────

function Eyebrow({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[#3f3f46] mb-5">
			{children}
		</p>
	);
}

// ── Data ───────────────────────────────────────────────────────────────────

const PRONOUNS = [
	{
		id: "yo",
		es: "Yo",
		en: "I",
		person: "1st",
		number: "singular",
		note: null,
		examples: [
			{ q: "¿Quién soy yo?", a: "Yo soy un estudiante." },
			{ q: "Who am I?", a: "I am a student." },
		],
	},
	{
		id: "tu",
		es: "Tú",
		en: "You (informal)",
		person: "2nd",
		number: "singular",
		note: "Accent on Tú distinguishes it from tu (your)",
		examples: [
			{ q: "¿Quién eres tú?", a: "Tú eres un profesor." },
			{ q: "Who are you?", a: "You are a professor." },
		],
	},
	{
		id: "el-ella",
		es: "Él / Ella",
		en: "He / She",
		person: "3rd",
		number: "singular",
		note: "Él = He · Ella = She (ey-ya)",
		examples: [
			{ q: "¿Quién es Taspia?", a: "Ella es una estudiante." },
			{ q: "Who is Taspia?", a: "She is a student." },
		],
	},
	{
		id: "nosotros",
		es: "Nosotros / Nosotras",
		en: "We",
		person: "1st",
		number: "plural",
		note: "Nosotros = mixed/M group · Nosotras = all female",
		examples: [
			{ q: "¿Quiénes son ustedes?", a: "Nosotros somos estudiantes." },
			{ q: "Who are you all?", a: "We are students." },
		],
	},
	{
		id: "vosotros",
		es: "Vosotros / Vosotras",
		en: "You all (Spain)",
		person: "2nd",
		number: "plural",
		note: "Used mainly in Spain · Latin America uses Ustedes instead",
		examples: [
			{ q: "¿Quiénes sois vosotros?", a: "Vosotros sois profesores." },
			{ q: "Who are you all?", a: "You all are professors." },
		],
	},
	{
		id: "ellos-ellas",
		es: "Ellos / Ellas",
		en: "They",
		person: "3rd",
		number: "plural",
		note: "Ellos = mixed/M group · Ellas = all female",
		examples: [
			{ q: "¿Quiénes son?", a: "Ellos son estudiantes." },
			{ q: "Who are they?", a: "They are students." },
		],
	},
];

const PERSON_COLOR = {
	"1st": "#f59e0b",
	"2nd": "#a1a1aa",
	"3rd": "#52525b",
};

// ── Sub-components ─────────────────────────────────────────────────────────

function PronounCard({ pronoun, active, onClick }) {
	const isActive = active === pronoun.id;
	return (
		<button
			onClick={() => onClick(pronoun.id)}
			className="text-left border rounded-xl p-4 transition-all duration-200 cursor-pointer w-full"
			style={
				isActive ?
					{
						borderColor: "#f59e0b",
						background: "#f59e0b08",
					}
				:	{
						borderColor: "#1c1c1f",
						background: "transparent",
					}
			}
		>
			<div className="flex items-start justify-between gap-2">
				<div>
					<p
						className="text-[15px] font-semibold leading-tight"
						style={{ color: isActive ? "#f59e0b" : "#a1a1aa" }}
					>
						{pronoun.es}
					</p>
					<p className="text-[11px] text-[#3f3f46] mt-0.5">{pronoun.en}</p>
				</div>
				<span
					className="text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border shrink-0 mt-0.5"
					style={{
						color: PERSON_COLOR[pronoun.person],
						borderColor: PERSON_COLOR[pronoun.person] + "40",
						background: PERSON_COLOR[pronoun.person] + "08",
					}}
				>
					{pronoun.person}
				</span>
			</div>
		</button>
	);
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function PronounsPage() {
	const [active, setActive] = useState("yo");
	const activeData = PRONOUNS.find((p) => p.id === active);

	const singular = PRONOUNS.filter((p) => p.number === "singular");
	const plural = PRONOUNS.filter((p) => p.number === "plural");

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-24 pb-20">
				{/* Header */}
				<Eyebrow>Grammar · A1</Eyebrow>
				<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
					Subject Pronouns
				</h1>
				<p className="text-[13px] text-[#52525b] leading-relaxed mb-14 max-w-lg">
					Spanish pronouns identify who is performing the action. They're often
					omitted in speech since verb endings already encode person — but
					essential to know.
				</p>

				{/* Split layout */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
					{/* Left — pronoun grid */}
					<div className="flex flex-col gap-6">
						{/* Singular group */}
						<div>
							<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3 flex items-center gap-2">
								<span className="w-4 h-px bg-[#27272a] inline-block" />
								Singular
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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
							<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3 flex items-center gap-2">
								<span className="w-4 h-px bg-[#27272a] inline-block" />
								Plural
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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
									<span className="text-[10px] tracking-[0.1em] uppercase text-[#3f3f46]">
										{person} person
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Right — detail panel */}
					<div className="lg:sticky lg:top-8">
						<DetailPanel item={activeData} />
					</div>
				</div>

				{/* Full table reference */}
				<div className="mt-14">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-4">
						Full table
					</p>
					<div className="border border-[#1c1c1f] rounded-xl overflow-hidden">
						<div className="grid grid-cols-2 border-b border-[#1c1c1f] bg-[#111113]">
							<div className="px-5 py-3 text-[10px] tracking-[0.12em] uppercase text-[#3f3f46]">
								Singular
							</div>
							<div className="px-5 py-3 text-[10px] tracking-[0.12em] uppercase text-[#3f3f46] border-l border-[#1c1c1f]">
								Plural
							</div>
						</div>
						{[
							{
								s: { es: "Yo", en: "I" },
								p: { es: "Nosotros / Nosotras", en: "We" },
							},
							{
								s: { es: "Tú", en: "You" },
								p: { es: "Vosotros / Vosotras", en: "You all" },
							},
							{
								s: { es: "Él / Ella", en: "He / She" },
								p: { es: "Ellos / Ellas", en: "They" },
							},
						].map((row, i) => (
							<div
								key={i}
								className="grid grid-cols-2 border-b border-[#1c1c1f] last:border-b-0 hover:bg-[#111113] transition-colors duration-150"
							>
								{[row.s, row.p].map((cell, ci) => (
									<div
										key={ci}
										className={`px-5 py-3.5 ${ci === 1 ? "border-l border-[#1c1c1f]" : ""}`}
									>
										<p className="text-[14px] text-[#a1a1aa]">{cell.es}</p>
										<p className="text-[11px] text-[#3f3f46] mt-0.5">
											{cell.en}
										</p>
									</div>
								))}
							</div>
						))}
					</div>
				</div>

				{/* Back & Next link */}
				<BackNext
					back="/a1/grammar/adjective"
					next="/a1/grammar/sentence-structure"
					backLabel="Adjective"
					nextLabel="Sentence Structure"
				/>
			</div>
		</div>
	);
}
