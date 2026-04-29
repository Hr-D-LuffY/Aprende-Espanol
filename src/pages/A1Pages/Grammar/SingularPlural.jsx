import { useState } from "react";
import BackNext from "../../../components/BackNext";

// ── Shared primitives ──────────────────────────────────────────────────────

function Eyebrow({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[#3f3f46] mb-5">
			{children}
		</p>
	);
}

function TabBar({ tabs, active, onChange }) {
	return (
		<div className="flex gap-1 border border-[#1c1c1f] rounded-lg p-1 w-fit mb-8 flex-wrap">
			{tabs.map((t) => (
				<button
					key={t.id}
					onClick={() => onChange(t.id)}
					className="px-4 py-1.5 rounded-md text-[11px] font-semibold tracking-widest transition-all duration-200 cursor-pointer"
					style={
						active === t.id ?
							{ background: "#f59e0b", color: "#09090b" }
						:	{ background: "transparent", color: "#52525b" }
					}
				>
					{t.label}
				</button>
			))}
		</div>
	);
}

function WordPair({ from, to }) {
	return (
		<div className="flex items-center gap-3 py-3 border-b border-[#1c1c1f] last:border-b-0 group">
			<span className="text-[13px] text-[#a1a1aa] w-32">{from}</span>
			<span className="text-[#3f3f46] text-[11px]">→</span>
			<span className="text-[13px] text-[#f59e0b]">{to}</span>
		</div>
	);
}

function RuleCard({ rule }) {
	return (
		<div>
			{/* Rule header */}
			<div className="flex items-start gap-4 mb-6">
				<div className="border border-[#f59e0b]/30 bg-[#f59e0b]/5 rounded-lg px-3 py-1.5 shrink-0">
					<span className="text-[13px] font-semibold text-[#f59e0b] tracking-wide">
						{rule.pattern}
					</span>
				</div>
				<div>
					<p className="text-[14px] text-[#a1a1aa] leading-snug mb-1">
						{rule.title}
					</p>
					<p className="text-[12px] text-[#52525b] leading-relaxed">
						{rule.desc}
					</p>
				</div>
			</div>

			{/* Word pairs */}
			<div className="border border-[#1c1c1f] rounded-xl px-5 bg-[#111113]">
				{rule.pairs.map((p, i) => (
					<WordPair key={i} {...p} />
				))}
			</div>

			{/* Exception note if any */}
			{rule.note && (
				<div className="mt-4 border border-[#1c1c1f] rounded-xl p-4 bg-[#111113]">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-1">
						Note
					</p>
					<p className="text-[12px] text-[#52525b] leading-relaxed">
						{rule.note}
					</p>
				</div>
			)}
		</div>
	);
}

// ── Content ────────────────────────────────────────────────────────────────

const RULES = [
	{
		id: "rule1",
		label: "Rule 1",
		pattern: "vowel + S",
		title: "Nouns ending in a vowel → add -S",
		desc: "Most Spanish nouns end in a vowel. Simply append -s to form the plural.",
		pairs: [
			{ from: "libro", to: "libros" },
			{ from: "casa", to: "casas" },
			{ from: "pollo", to: "pollos" },
			{ from: "chica", to: "chicas" },
			{ from: "mesa", to: "mesas" },
			{ from: "amigo", to: "amigos" },
		],
		note: null,
	},
	{
		id: "rule2",
		label: "Rule 2",
		pattern: "consonant + ES",
		title: "Nouns ending in a consonant → add -ES",
		desc: "When a noun ends in any consonant (other than Z), add -es to form the plural.",
		pairs: [
			{ from: "árbol", to: "árboles" },
			{ from: "doctor", to: "doctores" },
			{ from: "animal", to: "animales" },
			{ from: "hotel", to: "hoteles" },
			{ from: "ciudad", to: "ciudades" },
			{ from: "papel", to: "papeles" },
		],
		note: "Nouns ending in -s or -x with an unstressed final syllable don't change: el lunes → los lunes.",
	},
	{
		id: "rule3",
		label: "Rule 3",
		pattern: "Z → CES",
		title: "Nouns ending in -Z → change to -CES",
		desc: "The Z softens to C before the plural ending -es. The spelling changes but the sound is consistent.",
		pairs: [
			{ from: "luz", to: "luces" },
			{ from: "pez", to: "peces" },
			{ from: "voz", to: "voces" },
			{ from: "nariz", to: "narices" },
			{ from: "vez", to: "veces" },
			{ from: "cruz", to: "cruces" },
		],
		note: "The accent mark is sometimes added or dropped when the stress pattern shifts: lápiz → lápices.",
	},
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function SingularPluralPage() {
	const [activeTab, setActiveTab] = useState("rule1");

	const activeRule = RULES.find((r) => r.id === activeTab);

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-24 pb-20">
				{/* Header */}
				<Eyebrow>Grammar · A1</Eyebrow>
				<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
					Singular → Plural
				</h1>
				<p className="text-[13px] text-[#52525b] leading-relaxed mb-12 max-w-lg">
					Spanish plurals follow three consistent rules based on the final
					letter of the word. Learn the pattern, not the exceptions.
				</p>

				{/* Quick reference strip */}
				<div className="grid grid-cols-3 border border-[#1c1c1f] rounded-xl overflow-hidden mb-12">
					{RULES.map((r) => (
						<button
							key={r.id}
							onClick={() => setActiveTab(r.id)}
							className="p-4 flex flex-col gap-1 border-r border-[#1c1c1f] last:border-r-0 text-left cursor-pointer transition-colors duration-150"
							style={
								activeTab === r.id ?
									{ background: "#111113" }
								:	{ background: "transparent" }
							}
						>
							<span
								className="text-[11px] font-semibold tracking-widest"
								style={
									activeTab === r.id ?
										{ color: "#f59e0b" }
									:	{ color: "#3f3f46" }
								}
							>
								{r.label}
							</span>
							<span className="text-[12px] text-[#52525b]">{r.pattern}</span>
						</button>
					))}
				</div>

				{/* Tab bar */}
				<TabBar
					tabs={RULES.map((r) => ({ id: r.id, label: r.label }))}
					active={activeTab}
					onChange={setActiveTab}
				/>

				{/* Active rule */}
				<RuleCard rule={activeRule} />

				{/* Bottom note */}
				<div className="mt-14 border-t border-[#1c1c1f] pt-8">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3">
						Summary
					</p>
					<div className="flex flex-col gap-2">
						{RULES.map((r) => (
							<div key={r.id} className="flex items-center gap-4">
								<span className="text-[11px] text-[#f59e0b] w-28 shrink-0">
									{r.pattern}
								</span>
								<span className="text-[12px] text-[#52525b]">{r.title}</span>
							</div>
						))}
					</div>
				</div>

				{/* Back & Next link */}
				<BackNext
					back="/a1/grammar/noun-gender"
					next="/a1/grammar/article"
					backLabel="Noun-Gender"
					nextLabel="Article"
				/>
			</div>
		</div>
	);
}
