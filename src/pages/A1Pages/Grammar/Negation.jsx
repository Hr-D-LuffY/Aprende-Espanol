import { useState } from "react";
import {
	Eyebrow,
	Card,
	UsePill,
	PageWrapper,
	BackNav,
} from "../../../components/VerbComponents";
import BackNext from "../../../components/BackNext";

// ── Reusable within this page ──

function CompareRow({ positive, negative, en }) {
	const [revealed, setRevealed] = useState(false);
	return (
		<div
			onClick={() => setRevealed((r) => !r)}
			className={`py-3 border-b border-[#1c1c1f] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                ${revealed ? "bg-[#f59e0b]/5 px-2 -mx-2" : "hover:bg-[#111113]"}`}
		>
			<div className="flex items-start gap-3">
				<span className="text-[10px] text-[#27272a] mt-1 w-3 shrink-0">+</span>
				<p className="text-[12px] text-[#52525b] tracking-[-0.01em]">
					{positive}
				</p>
			</div>
			<div className="flex items-start gap-3 mt-1">
				<span
					className={`text-[10px] mt-1 w-3 shrink-0 transition-colors ${revealed ? "text-[#f59e0b]" : "text-[#27272a]"}`}
				>
					−
				</span>
				<p
					className={`text-[13px] tracking-[-0.01em] transition-colors ${revealed ? "text-[#f59e0b]" : "text-[#fafafa]"}`}
				>
					{negative}
				</p>
			</div>
			<p
				className={`text-[11px] tracking-wide mt-1 pl-6 transition-all duration-150
                ${revealed ? "text-[#52525b] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
			>
				{en}
			</p>
		</div>
	);
}

function RuleBlock({ rule, example, note }) {
	return (
		<div className="py-4 border-b border-[#1c1c1f] last:border-0">
			<p className="text-[12px] text-[#fafafa] tracking-[-0.01em] mb-1">
				{rule}
			</p>
			<p className="text-[11px] text-[#f59e0b] mb-1">{example}</p>
			{note && (
				<p className="text-[10px] text-[#3f3f46] tracking-wide">{note}</p>
			)}
		</div>
	);
}

// ── Data ──

const BASIC_PAIRS = [
	{
		positive: "Yo hablo español.",
		negative: "Yo no hablo español.",
		en: "I don't speak Spanish.",
	},
	{
		positive: "Tengo dinero.",
		negative: "No tengo dinero.",
		en: "I don't have money.",
	},
	{
		positive: "Él tiene coche.",
		negative: "Él no tiene coche.",
		en: "He doesn't have a car.",
	},
	{
		positive: "Me gusta el café.",
		negative: "No me gusta el café.",
		en: "I don't like coffee.",
	},
	{
		positive: "Tienes novia.",
		negative: "No tienes novia.",
		en: "You don't have a girlfriend.",
	},
	{
		positive: "Nos gusta la música.",
		negative: "No nos gusta la música.",
		en: "We don't like music.",
	},
];

const DOUBLE_NEG = [
	{
		rule: "no + verb + nada",
		example: "No tengo nada.",
		note: "I have nothing. / I don't have anything.",
	},
	{
		rule: "no + verb + nadie",
		example: "No hay nadie aquí.",
		note: "There is nobody here.",
	},
	{
		rule: "no + verb + nunca",
		example: "No hablo nunca.",
		note: "I never speak.",
	},
	{
		rule: "no + verb + ningún/ninguna",
		example: "No tengo ningún problema.",
		note: "I have no problem.",
	},
];

const QUESTION_NEG = [
	{ es: "¿No tienes dinero?", en: "Don't you have money?" },
	{ es: "¿No te gusta?", en: "Don't you like it?" },
	{ es: "¿No hablas español?", en: "Don't you speak Spanish?" },
];

export default function NegationPage() {
	const [activeQ, setActiveQ] = useState(null);

	return (
		<PageWrapper>
			<BackNav to="/" label="← grammar" />

			{/* Header */}
			<div className="mb-12">
				<Eyebrow>Grammar · Negation · Sentence structure</Eyebrow>
				<div className="flex items-baseline gap-4 mb-3">
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[#fafafa]">
						negation
					</h1>
					<span className="text-[16px] text-[#52525b] font-light">
						saying no
					</span>
				</div>
				<div className="flex flex-wrap gap-2 mt-4">
					{["no", "nada", "nadie", "nunca", "ningún"].map((u) => (
						<UsePill key={u}>{u}</UsePill>
					))}
				</div>
			</div>

			{/* Core rule */}
			<Card className="mb-6 p-6">
				<Eyebrow>The rule — one word</Eyebrow>
				<p className="text-[12px] text-[#52525b] leading-relaxed mb-5 tracking-wide max-w-lg">
					Spanish negation is simple: place{" "}
					<span className="text-[#fafafa]">no</span> directly before the verb.
					That's it.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="border border-[#1c1c1f] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3">
							Positive
						</p>
						<div className="flex items-center gap-2 text-[13px]">
							<span className="text-[#a1a1aa]">Yo</span>
							<span className="text-[#fafafa] font-semibold">hablo</span>
							<span className="text-[#a1a1aa]">español.</span>
						</div>
					</div>
					<div className="border border-[#f59e0b]/30 rounded-lg p-4 bg-[#f59e0b]/5">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3">
							Negative
						</p>
						<div className="flex items-center gap-2 text-[13px]">
							<span className="text-[#a1a1aa]">Yo</span>
							<span className="text-[#f59e0b] font-semibold">no</span>
							<span className="text-[#fafafa] font-semibold">hablo</span>
							<span className="text-[#a1a1aa]">español.</span>
						</div>
					</div>
				</div>
				<div className="mt-4 pt-4 border-t border-[#1c1c1f]">
					<p className="text-[11px] text-[#3f3f46] tracking-wide">
						formula: <span className="text-[#a1a1aa]">subject</span>{" "}
						<span className="text-[#f59e0b]">+ no +</span>{" "}
						<span className="text-[#a1a1aa]">verb + rest</span>
					</p>
				</div>
			</Card>

			{/* Main grid */}
			<div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
				{/* Compare pairs */}
				<Card>
					<div className="px-5 pt-5 pb-2">
						<Eyebrow>Positive → Negative</Eyebrow>
					</div>
					<div className="px-5 pb-4">
						{BASIC_PAIRS.map((pair, i) => (
							<CompareRow key={i} {...pair} />
						))}
						<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
							tap a row to reveal translation
						</p>
					</div>
				</Card>

				{/* Double negatives */}
				<Card>
					<div className="px-5 pt-5 pb-2">
						<Eyebrow>Double negatives</Eyebrow>
						<p className="text-[11px] text-[#52525b] tracking-wide leading-relaxed mb-2">
							Spanish allows — and requires — double negatives. Both words must
							be negative.
						</p>
					</div>
					<div className="px-5 pb-4">
						{DOUBLE_NEG.map((r, i) => (
							<RuleBlock key={i} {...r} />
						))}
					</div>
				</Card>
			</div>

			{/* Negative questions */}
			<Card className="mt-6 p-6">
				<Eyebrow>Negative questions</Eyebrow>
				<p className="text-[12px] text-[#52525b] leading-relaxed mb-5 tracking-wide max-w-lg">
					Same rule — <span className="text-[#fafafa]">no</span> goes before the
					verb, wrap in ¿ ?
				</p>
				<div>
					{QUESTION_NEG.map((q, i) => (
						<div
							key={i}
							onClick={() => setActiveQ(activeQ === i ? null : i)}
							className={`py-3 border-b border-[#1c1c1f] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                                ${activeQ === i ? "bg-[#f59e0b]/5 px-2 -mx-2" : "hover:bg-[#111113]"}`}
						>
							<p
								className={`text-[13px] tracking-[-0.01em] transition-colors ${activeQ === i ? "text-[#f59e0b]" : "text-[#fafafa]"}`}
							>
								{q.es}
							</p>
							<p
								className={`text-[11px] tracking-wide transition-all duration-150
                                ${activeQ === i ? "text-[#52525b] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
							>
								{q.en}
							</p>
						</div>
					))}
					<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
						tap to reveal
					</p>
				</div>
			</Card>

			{/* Quick ref */}
			<Card className="mt-6 p-6">
				<Eyebrow>Quick reference</Eyebrow>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
					{[
						{ word: "no", meaning: "not / no" },
						{ word: "nada", meaning: "nothing" },
						{ word: "nadie", meaning: "nobody" },
						{ word: "nunca", meaning: "never" },
						{ word: "ningún", meaning: "no (masc.)" },
						{ word: "ninguna", meaning: "no (fem.)" },
						{ word: "tampoco", meaning: "neither / not either" },
						{ word: "jamás", meaning: "never (strong)" },
					].map((item) => (
						<div
							key={item.word}
							className="border border-[#1c1c1f] rounded-lg p-3 hover:border-[#27272a] transition-colors"
						>
							<p className="text-[14px] text-[#f59e0b] font-semibold mb-1">
								{item.word}
							</p>
							<p className="text-[10px] text-[#3f3f46] tracking-wide">
								{item.meaning}
							</p>
						</div>
					))}
				</div>
			</Card>
			<BackNext
				back="/a1/grammar/question-words"
				next="/a1/grammar/prepositions"
				backLabel="Question Words"
				nextLabel="Prepositions"
			/>
		</PageWrapper>
	);
}
