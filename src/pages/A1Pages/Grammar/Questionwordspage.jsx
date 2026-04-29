import { useState } from "react";
import BackNext from "../../../components/BackNext";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const QUESTION_WORDS = [
	{
		en: "Who",
		es: "¿Quién?",
		note: "People only",
		example: "¿Quién es ella?",
		ex_en: "Who is she?",
		category: "person",
	},
	{
		en: "Where",
		es: "¿Dónde?",
		note: "Location",
		example: "¿Dónde vives?",
		ex_en: "Where do you live?",
		category: "place",
	},
	{
		en: "When",
		es: "¿Cuándo?",
		note: "Time",
		example: "¿Cuándo llega?",
		ex_en: "When does it arrive?",
		category: "time",
	},
	{
		en: "Why",
		es: "¿Por qué?",
		note: "Two words — reason",
		example: "¿Por qué estudias?",
		ex_en: "Why do you study?",
		category: "reason",
	},
	{
		en: "What",
		es: "¿Qué?",
		note: "Things / general",
		example: "¿Qué quieres?",
		ex_en: "What do you want?",
		category: "thing",
	},
	{
		en: "What else",
		es: "¿Qué más?",
		note: "Additional info",
		example: "¿Qué más necesitas?",
		ex_en: "What else do you need?",
		category: "thing",
	},
	{
		en: "How",
		es: "¿Cómo?",
		note: "Manner / description",
		example: "¿Cómo estás?",
		ex_en: "How are you?",
		category: "manner",
	},
	{
		en: "How much",
		es: "¿Cuánto?",
		note: "Amount / quantity",
		example: "¿Cuánto cuesta?",
		ex_en: "How much does it cost?",
		category: "amount",
	},
	{
		en: "How many",
		es: "¿Cuántos?",
		note: "Countable plural",
		example: "¿Cuántos años tienes?",
		ex_en: "How many years old are you?",
		category: "amount",
	},
	{
		en: "Which",
		es: "¿Cuál?",
		note: "Singular selection",
		example: "¿Cuál prefieres?",
		ex_en: "Which do you prefer?",
		category: "select",
	},
	{
		en: "Which (pl.)",
		es: "¿Cuáles?",
		note: "Plural selection",
		example: "¿Cuáles son tus favoritos?",
		ex_en: "Which are your favorites?",
		category: "select",
	},
	{
		en: "How + adj",
		es: "¿Qué tan?",
		note: "Degree — how + adjective",
		example: "¿Qué tan lejos está?",
		ex_en: "How far is it?",
		category: "degree",
	},
];

const CATEGORY_COLORS = {
	person: "#FCA5A5",
	place: "#6EE7B7",
	time: "#93C5FD",
	reason: "#FCD34D",
	thing: "#f59e0b",
	manner: "#C4B5FD",
	amount: "#6EE7B7",
	select: "#93C5FD",
	degree: "#FCA5A5",
};

const KEY_NOTES = [
	{
		note: "¿Por qué?",
		detail:
			"is why (question). Porque is because (answer). Two different spellings.",
	},
	{
		note: "¿Cuál?",
		detail:
			"vs ¿Qué? — use Cuál when choosing from a set; Qué when asking for a definition.",
	},
	{
		note: "¿Cuánto?",
		detail: "changes gender: cuánto/cuánta/cuántos/cuántas to match the noun.",
	},
	{
		note: "Accent mark",
		detail:
			"All question words carry an accent mark. Without it, they become conjunctions: que, como, cuando…",
	},
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function QuestionRow({ word, isActive, onClick }) {
	const color = CATEGORY_COLORS[word.category] ?? "#f59e0b";
	return (
		<div
			onClick={onClick}
			className={`grid grid-cols-[1fr_2fr] lg:grid-cols-[140px_200px_1fr] gap-0 border-b border-[#1c1c1f] last:border-0 cursor-pointer transition-colors duration-100 ${
				isActive ? "bg-[#f59e0b]/5" : "hover:bg-[#111113]"
			}`}
		>
			{/* EN word */}
			<div className="px-6 py-4 flex items-center gap-3 border-r border-[#1c1c1f]">
				<span
					className="w-1 h-full min-h-[20px] rounded-full flex-shrink-0"
					style={{ background: color + "60" }}
				/>
				<span className="text-[13px] text-[#52525b]">{word.en}</span>
			</div>

			{/* ES word */}
			<div
				className={`px-6 py-4 flex items-center border-r border-[#1c1c1f] ${isActive ? "border-[#f59e0b]/20" : ""}`}
			>
				<span
					className="text-[20px] font-light tracking-[-0.02em]"
					style={{ color: isActive ? "#fafafa" : "#a1a1aa" }}
				>
					{word.es}
				</span>
			</div>

			{/* Note + example (hidden on mobile unless active) */}
			<div className="hidden lg:flex px-6 py-4 flex-col justify-center gap-1">
				<span className="text-[11px] text-[#3f3f46]">{word.note}</span>
				{isActive && (
					<div className="mt-1">
						<span className="text-[13px] text-[#a1a1aa] italic">
							{word.example}
						</span>
						<span className="text-[11px] text-[#52525b] ml-3">
							— {word.ex_en}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}

/* Mobile example panel shown below selected row */
function ExamplePanel({ word }) {
	if (!word) return null;
	return (
		<div className="lg:hidden border border-[#f59e0b]/20 bg-[#f59e0b]/5 rounded-xl px-5 py-4 mx-4 mb-2">
			<p className="text-[11px] tracking-[0.1em] uppercase text-[#f59e0b]/60 mb-1">
				{word.note}
			</p>
			<p className="text-[15px] font-light text-[#a1a1aa] italic">
				{word.example}
			</p>
			<p className="text-[12px] text-[#52525b] mt-1">— {word.ex_en}</p>
		</div>
	);
}

function KeyNoteRow({ item }) {
	return (
		<div className="flex gap-4 py-3 border-b border-[#1c1c1f] last:border-0">
			<span className="text-[13px] font-light text-[#f59e0b] w-28 flex-shrink-0">
				{item.note}
			</span>
			<span className="text-[12px] text-[#52525b] leading-relaxed">
				{item.detail}
			</span>
		</div>
	);
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function QuestionWordsPage() {
	const [activeIdx, setActiveIdx] = useState(0);

	const toggle = (i) => setActiveIdx(activeIdx === i ? null : i);

	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[11px] tracking-[0.18em] uppercase text-[#3f3f46] mb-4">
						Grammar — A1 · Foundation
					</p>
					<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
						Question Words
					</h1>
					<p className="text-[13px] text-[#52525b] leading-relaxed max-w-lg">
						12 WH-words. Every Spanish question starts with one of these —
						always with an accent mark and opening ¿.
					</p>
				</div>

				{/* Column labels */}
				<div className="hidden lg:grid grid-cols-[140px_200px_1fr] gap-0 mb-0 border border-b-0 border-[#1c1c1f] rounded-t-2xl overflow-hidden bg-[#111113]">
					{["English", "Español", "Note — tap any row"].map((h) => (
						<div
							key={h}
							className="px-6 py-3 border-r border-[#1c1c1f] last:border-0"
						>
							<span className="text-[9px] tracking-[0.16em] uppercase text-[#27272a]">
								{h}
							</span>
						</div>
					))}
				</div>

				{/* Question words table */}
				<div className="border border-[#1c1c1f] rounded-b-2xl lg:rounded-t-none rounded-t-2xl bg-[#111113] overflow-hidden mb-14">
					{QUESTION_WORDS.map((word, i) => (
						<div key={word.es}>
							<QuestionRow
								word={word}
								isActive={activeIdx === i}
								onClick={() => toggle(i)}
							/>
							{activeIdx === i && <ExamplePanel word={word} />}
						</div>
					))}
				</div>

				{/* Key notes */}
				<div className="border border-[#1c1c1f] rounded-2xl bg-[#111113] overflow-hidden">
					<div className="border-b border-[#1c1c1f] px-8 py-5">
						<p className="text-[10px] tracking-[0.16em] uppercase text-[#3f3f46] mb-1">
							Watch out for
						</p>
						<h2 className="text-xl font-light tracking-[-0.03em] text-[#fafafa]">
							Common confusions
						</h2>
					</div>
					<div className="px-8 py-2">
						{KEY_NOTES.map((n) => (
							<KeyNoteRow key={n.note} item={n} />
						))}
					</div>
				</div>

				<BackNext
					back="/a1/grammar/demonstratives"
					next="/a1/grammar/sentence-structure"
					backLabel="Demonstratives"
					nextLabel="Sentence Structure"
				/>
			</div>
		</div>
	);
}
