import { useState } from "react";

// ── Reusable components ──────────────────────────────────────────

function SectionTitle({ children }) {
	return (
		<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-4 pb-3 border-b border-[var(--border)]">
			{children}
		</p>
	);
}

function GrammarNote({ tag, children }) {
	return (
		<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-xl p-5 flex gap-4 items-start">
			<span className="text-[9px] tracking-[0.14em] uppercase text-[var(--accent)] border border-[#f59e0b]/30 rounded px-2 py-1 whitespace-nowrap mt-0.5">
				{tag}
			</span>
			<p className="text-[12px] text-[var(--text-secondary)] leading-relaxed tracking-wide">
				{children}
			</p>
		</div>
	);
}

function PhraseCard({ es, en }) {
	return (
		<div className="group bg-[var(--bg)] border border-[var(--border)] p-5 relative hover:bg-[var(--surface)] transition-colors duration-150 cursor-default">
			<span className="absolute top-5 right-5 text-[#27272a] text-sm group-hover:text-[var(--accent)] transition-colors">
				→
			</span>
			<p className="text-[14px] text-[var(--text-primary)] tracking-[-0.01em] mb-1">
				{es}
			</p>
			<p className="text-[11px] text-[var(--text-muted)] tracking-wide">{en}</p>
		</div>
	);
}

function VocabPill({ word, trans }) {
	return (
		<div className="bg-[var(--bg)] border border-[var(--border)] p-3.5 hover:bg-[var(--surface)] transition-colors duration-150 cursor-default">
			<div className="text-[12px] text-[var(--text-secondary)] tracking-[-0.01em] mb-1">
				{word}
			</div>
			<div className="text-[10px] text-[var(--text-label)] tracking-[0.06em]">
				{trans}
			</div>
		</div>
	);
}

function PlaceCard({ es, en }) {
	return (
		<div className="group bg-[var(--bg)] border border-[var(--border)] p-4 relative hover:bg-[var(--surface)] transition-colors duration-150 cursor-default">
			<span className="absolute top-4 right-4 text-[#27272a] text-xs group-hover:text-[var(--accent)] transition-colors">
				→
			</span>
			<div className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em] mb-1">
				{es}
			</div>
			<div className="text-[10px] text-[var(--text-muted)] tracking-[0.06em]">
				{en}
			</div>
		</div>
	);
}

function DirCard({ es, en }) {
	return (
		<div className="p-2.5 border border-[var(--border)] rounded-md bg-[var(--bg)]">
			<div className="text-[12px] text-[var(--text-secondary)] mb-0.5">
				{es}
			</div>
			<div className="text-[10px] text-[var(--text-label)] tracking-[0.06em]">
				{en}
			</div>
		</div>
	);
}

// ── Scene constants ──────────────────────────────────────────────

const PREPS = [
	{
		tag: "A la derecha de",
		es: "El coche está a la derecha del árbol",
		en: "→ right of",
		pos: "right",
	},
	{
		tag: "A la izquierda de",
		es: "El coche está a la izquierda de la casa",
		en: "→ left of",
		pos: "left",
	},
	{
		tag: "Entre",
		es: "El coche está entre el árbol y la casa",
		en: "→ between",
		pos: "between",
	},
	{
		tag: "Enfrente de",
		es: "El coche está enfrente de la casa",
		en: "→ in front of",
		pos: "front",
	},
	{
		tag: "Arriba de",
		es: "El pájaro está arriba del árbol",
		en: "→ above / over",
		pos: "above",
	},
	{
		tag: "Abajo de",
		es: "El fútbol está abajo del árbol",
		en: "→ under / below",
		pos: "below",
	},
	{
		tag: "Cerca de",
		es: "Mi casa está cerca del árbol",
		en: "→ near",
		pos: "near",
	},
	{
		tag: "Lejos de",
		es: "Mi casa está lejos del árbol",
		en: "→ far from",
		pos: "far",
	},
	{
		tag: "Al lado de",
		es: "La regla está al lado del lápiz",
		en: "→ beside / next to",
		pos: "beside",
	},
	{
		tag: "Dentro de",
		es: "Los zapatos están dentro de la caja",
		en: "→ inside",
		pos: "inside",
	},
	{
		tag: "Detrás de",
		es: "El coche está detrás de la casa",
		en: "→ behind",
		pos: "behind",
	},
	{
		tag: "Alrededor de",
		es: "El coche está alrededor de la casa",
		en: "→ around",
		pos: "around",
	},
];

// car left%, bird show/pos, ball show/pos
const POSITIONS = {
	right: { carLeft: "42%", showBird: false, showBall: false },
	left: { carLeft: "8%", showBird: false, showBall: false },
	between: { carLeft: "38%", showBird: false, showBall: false },
	front: { carLeft: "55%", showBird: false, showBall: false },
	above: { carLeft: "72%", showBird: true, birdBottom: "66%", showBall: false },
	below: { carLeft: "72%", showBird: false, showBall: true, ballBottom: "20%" },
	near: { carLeft: "30%", showBird: false, showBall: false },
	far: { carLeft: "2%", showBird: false, showBall: false },
	beside: { carLeft: "22%", showBird: false, showBall: false },
	inside: { carLeft: "55%", showBird: false, showBall: false },
	behind: { carLeft: "68%", showBird: false, showBall: false },
	around: { carLeft: "35%", showBird: false, showBall: false },
};

// ── Scene component ──────────────────────────────────────────────

function PrepScene({ activePos }) {
	const p = POSITIONS[activePos] || POSITIONS.right;
	return (
		<div
			className="relative border border-[var(--border)] rounded-lg bg-[var(--bg)] overflow-hidden flex-shrink-0"
			style={{ width: 240, height: 180 }}
		>
			{/* ground */}
			<div className="absolute bottom-[30px] left-0 right-0 h-px bg-[#27272a]" />

			{/* tree */}
			<div
				className="absolute flex flex-col items-center"
				style={{ left: 52, bottom: 31 }}
			>
				<div
					style={{
						width: 0,
						height: 0,
						borderLeft: "22px solid transparent",
						borderRight: "22px solid transparent",
						borderBottom: "36px solid #3f3f46",
					}}
				/>
				<div style={{ width: 8, height: 40, background: "#52525b" }} />
			</div>

			{/* house */}
			<div
				className="absolute flex flex-col items-center"
				style={{ right: 32, bottom: 31 }}
			>
				<div
					style={{
						width: 0,
						height: 0,
						borderLeft: "22px solid transparent",
						borderRight: "22px solid transparent",
						borderBottom: "18px solid #3f3f46",
					}}
				/>
				<div
					style={{
						width: 44,
						height: 36,
						background: "#27272a",
						border: "1px solid #3f3f46",
					}}
				/>
			</div>

			{/* car */}
			<div
				className="absolute text-xl leading-none"
				style={{
					left: p.carLeft,
					bottom: 34,
					transition: "left 0.45s cubic-bezier(.4,0,.2,1)",
				}}
			>
				🚗
			</div>

			{/* bird */}
			{p.showBird && (
				<div
					className="absolute text-sm leading-none"
					style={{ left: 52, bottom: p.birdBottom, transition: "all 0.45s" }}
				>
					🐦
				</div>
			)}

			{/* ball */}
			{p.showBall && (
				<div
					className="absolute text-sm leading-none"
					style={{ left: 52, bottom: p.ballBottom, transition: "all 0.45s" }}
				>
					⚽
				</div>
			)}
		</div>
	);
}

// ── Quiz component ───────────────────────────────────────────────

const QUIZ_QUESTIONS = [
	{
		es: "El coche está ___ el árbol y la casa",
		en: "The car is between the tree and the house",
		answer: "Entre",
		options: ["Entre", "Cerca de", "Enfrente de", "Detrás de"],
	},
	{
		es: "Mi casa está ___ del árbol",
		en: "My house is near the tree",
		answer: "Cerca",
		options: ["Lejos", "Cerca", "Dentro", "Arriba"],
	},
	{
		es: "Los zapatos están ___ de la caja",
		en: "The shoes are inside the box",
		answer: "Dentro",
		options: ["Fuera", "Arriba", "Dentro", "Detrás"],
	},
	{
		es: "El pájaro está ___ del árbol",
		en: "The bird is above the tree",
		answer: "Arriba",
		options: ["Abajo", "Arriba", "Al lado", "Lejos"],
	},
	{
		es: "Bangladesh está en el ___ de la India",
		en: "Bangladesh is in the south of India",
		answer: "sur",
		options: ["norte", "este", "oeste", "sur"],
	},
	{
		es: "¿___ está Messi?",
		en: "Where is Messi?",
		answer: "Dónde",
		options: ["Quién", "Qué", "Dónde", "Cuándo"],
	},
];

function QuizSection() {
	const [idx, setIdx] = useState(0);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [done, setDone] = useState(false);

	const q = QUIZ_QUESTIONS[idx];

	function pick(opt) {
		if (selected) return;
		setSelected(opt);
		if (opt === q.answer) setScore((s) => s + 1);
	}

	function next() {
		if (idx + 1 >= QUIZ_QUESTIONS.length) {
			setDone(true);
		} else {
			setIdx((i) => i + 1);
			setSelected(null);
		}
	}

	function restart() {
		setIdx(0);
		setSelected(null);
		setScore(0);
		setDone(false);
	}

	if (done) {
		return (
			<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-8 text-center">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-4">
					Quiz complete
				</p>
				<p className="text-5xl font-light tracking-[-0.04em] text-[var(--text-primary)] mb-2">
					{score}
					<span className="text-[var(--text-label)]">
						/{QUIZ_QUESTIONS.length}
					</span>
				</p>
				<p className="text-[12px] text-[var(--text-muted)] mb-8">
					{score === QUIZ_QUESTIONS.length ?
						"Perfecto. 🎯"
					: score >= 4 ?
						"Muy bien. Keep it up."
					:	"Keep practicing."}
				</p>
				<button
					onClick={restart}
					className="text-[12px] tracking-[0.1em] uppercase text-[var(--text-muted)] border border-[#27272a] px-5 py-2 rounded-lg hover:text-[var(--text-secondary)] hover:border-[#3f3f46] transition-colors cursor-pointer"
				>
					Try again →
				</button>
			</div>
		);
	}

	return (
		<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-6">
			<div className="flex items-center justify-between mb-6">
				<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)]">
					Fill the blank
				</p>
				<p className="text-[10px] tracking-[0.1em] text-[#27272a]">
					{idx + 1} / {QUIZ_QUESTIONS.length}
				</p>
			</div>

			<p className="text-[16px] text-[var(--text-primary)] tracking-[-0.01em] leading-relaxed mb-1">
				{q.es}
			</p>
			<p className="text-[11px] text-[var(--text-muted)] tracking-wide mb-6">
				{q.en}
			</p>

			<div className="grid grid-cols-2 gap-2 mb-6">
				{q.options.map((opt) => {
					let cls =
						"border border-[var(--border)] rounded-lg px-4 py-2.5 text-[12px] text-left cursor-pointer transition-all duration-150 ";
					if (!selected) {
						cls +=
							"bg-[var(--bg)] text-[var(--text-secondary)] hover:border-[#27272a] hover:bg-[var(--bg)]";
					} else if (opt === q.answer) {
						cls +=
							"bg-[var(--accent)]/10 border-[#f59e0b]/40 text-[var(--accent)]";
					} else if (opt === selected) {
						cls += "bg-[#1c1c1f] border-[#27272a] text-[var(--text-muted)]";
					} else {
						cls +=
							"bg-[var(--bg)] text-[var(--text-label)] border-[var(--border)]";
					}
					return (
						<button key={opt} className={cls} onClick={() => pick(opt)}>
							{opt}
						</button>
					);
				})}
			</div>

			{selected && (
				<button
					onClick={next}
					className="text-[11px] tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors cursor-pointer"
				>
					{idx + 1 >= QUIZ_QUESTIONS.length ? "See results →" : "Next →"}
				</button>
			)}
		</div>
	);
}

// ── Main page ────────────────────────────────────────────────────

const PHRASES = [
	{ es: "¿De dónde eres?", en: "Where are you from?" },
	{ es: "¿Dónde está Messi?", en: "Where is Messi?" },
	{ es: "Messi está en la casa", en: "Messi is in the house" },
	{ es: "Mi novia está en su casa", en: "My girlfriend is in her house" },
	{ es: "Mi cuaderno está aquí", en: "My notebook is here" },
	{ es: "Mi cuaderno está allí", en: "My notebook is there" },
	{
		es: "Bangladesh está en el sur de la India",
		en: "Bangladesh is in the south of India",
	},
	{
		es: "La regla está al lado del lápiz",
		en: "The ruler is next to the pencil",
	},
	{
		es: "Los zapatos están dentro de la caja",
		en: "The shoes are inside the box",
	},
	{
		es: "El coche está entre el árbol y la casa",
		en: "The car is between the tree and the house",
	},
	{
		es: "El coche está enfrente de la casa",
		en: "The car is in front of the house",
	},
	{ es: "Mi casa está cerca del árbol", en: "My house is near the tree" },
	{ es: "Mi casa está lejos del árbol", en: "My house is far from the tree" },
];

const PLACES = [
	{ es: "Estación", en: "Station" },
	{ es: "Restaurante", en: "Restaurant" },
	{ es: "Hospital", en: "Hospital" },
	{ es: "Biblioteca", en: "Library" },
	{ es: "Aeropuerto", en: "Airport" },
	{ es: "Supermercado", en: "Supermarket" },
	{ es: "Iglesia", en: "Church" },
	{ es: "Parada de autobús", en: "Bus stop" },
	{ es: "Hotel", en: "Hotel" },
	{ es: "Cafetería", en: "Café" },
	{ es: "Farmacia", en: "Pharmacy" },
	{ es: "Mercado", en: "Market" },
	{ es: "Banco", en: "Bank" },
	{ es: "Parque", en: "Park" },
	{ es: "Escuela", en: "School" },
	{ es: "Correos", en: "Post office" },
];

const VOCAB = [
	{ word: "Derecha", trans: "Right" },
	{ word: "Izquierda", trans: "Left" },
	{ word: "Enfrente / Delante de", trans: "In front of" },
	{ word: "Detrás de", trans: "Behind" },
	{ word: "Arriba de", trans: "Above / Over" },
	{ word: "Abajo de", trans: "Under / Below" },
	{ word: "Cerca de", trans: "Near" },
	{ word: "Lejos de", trans: "Far from" },
	{ word: "Dentro de", trans: "Inside" },
	{ word: "Fuera de", trans: "Outside" },
	{ word: "Al lado de", trans: "Beside / Next to" },
	{ word: "Entre", trans: "Between" },
	{ word: "Alrededor de", trans: "Around" },
	{ word: "En medio de", trans: "In the middle of" },
	{ word: "En", trans: "In / On" },
	{ word: "A", trans: "To" },
	{ word: "Calle", trans: "Road / Street" },
	{ word: "Mochila", trans: "Bag" },
	{ word: "Pájaro", trans: "Bird" },
	{ word: "Jubilado", trans: "Retired person" },
	{ word: "Quien", trans: "Who" },
	{ word: "Donde", trans: "Where" },
	{ word: "Que", trans: "What" },
	{ word: "Mujer", trans: "Wife" },
	{ word: "Aquí", trans: "Here" },
	{ word: "Allí", trans: "There" },
];

const DIRECTIONS = [
	{ es: "El norte", en: "North" },
	{ es: "El sur", en: "South" },
	{ es: "El este", en: "East" },
	{ es: "El oeste", en: "West" },
	{ es: "Aquí", en: "Here" },
	{ es: "Allí", en: "There" },
];

export default function LocationPage() {
	const [activePrep, setActivePrep] = useState(0);

	return (
		<div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-mono">
			{/* ── HERO ── */}
			<section className="max-w-5xl mx-auto px-8 pt-28 pb-12">
				<p className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-5">
					Grammar · Location
				</p>
				<h1 className="text-6xl font-light leading-[1.04] tracking-[-0.04em] text-[var(--text-primary)] mb-4">
					Donde
					<br />
					<span className="text-[var(--text-label)] italic">
						&amp; position.
					</span>
				</h1>
				<p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-md tracking-wide">
					How to describe where things are — prepositions, places, and
					directions in Spanish.
				</p>
			</section>

			<div className="max-w-5xl mx-auto px-8">
				<div className="border-t border-[var(--border)]" />
			</div>

			{/* ── GRAMMAR NOTES ── */}
			<section className="max-w-5xl mx-auto px-8 mt-12">
				<SectionTitle>Grammar notes</SectionTitle>
				<div className="flex flex-col gap-3">
					<GrammarNote tag="Rule">
						<strong className="text-[var(--text-primary)] font-semibold">
							De + el = Del
						</strong>{" "}
						— These always contract. Never write "de el". Example:{" "}
						<strong className="text-[var(--text-primary)] font-semibold">
							a la derecha del árbol
						</strong>{" "}
						(to the right of the tree).
					</GrammarNote>
					<GrammarNote tag="Ser vs Estar">
						Location always uses{" "}
						<strong className="text-[var(--text-primary)] font-semibold">
							estar
						</strong>
						, never ser.{" "}
						<strong className="text-[var(--text-primary)] font-semibold">
							¿Dónde estás?
						</strong>{" "}
						— Where are you? Use <em>ser</em> for origin:{" "}
						<strong className="text-[var(--text-primary)] font-semibold">
							¿De dónde eres?
						</strong>
					</GrammarNote>
					<GrammarNote tag="Questions">
						<strong className="text-[var(--text-primary)] font-semibold">
							¿Dónde está?
						</strong>{" "}
						= Where is (something)?{" "}
						<strong className="text-[var(--text-primary)] font-semibold">
							¿De dónde eres?
						</strong>{" "}
						= Where are you from? Notice the accent on <em>dónde</em> in
						questions — always required.
					</GrammarNote>
				</div>
			</section>

			{/* ── INTERACTIVE PREPOSITIONS ── */}
			<section className="max-w-5xl mx-auto px-8 mt-12">
				<SectionTitle>Prepositions of place — click to visualize</SectionTitle>
				<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-6 flex flex-col lg:flex-row gap-6">
					<div className="flex flex-col gap-3 items-start">
						<PrepScene activePos={PREPS[activePrep].pos} />
						<div className="border border-[var(--border)] rounded-lg bg-[var(--bg)] px-4 py-3 w-full">
							<p className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em] mb-1">
								{PREPS[activePrep].es}
							</p>
							<p className="text-[11px] text-[var(--text-muted)] tracking-wide">
								{PREPS[activePrep].en.replace("→ ", "")}
							</p>
						</div>
					</div>

					<div className="flex-1 flex flex-col gap-1">
						{PREPS.map((p, i) => (
							<button
								key={p.pos}
								onClick={() => setActivePrep(i)}
								className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
									activePrep === i ?
										"bg-[var(--bg)] border-[var(--border)]"
									:	"bg-transparent border-transparent hover:bg-[var(--bg)] hover:border-[var(--border)]"
								}`}
							>
								<span
									className={`text-[10px] tracking-[0.08em] border rounded px-2 py-0.5 whitespace-nowrap min-w-[110px] text-center transition-all ${
										activePrep === i ?
											"text-[var(--accent)] border-[#f59e0b]/30 bg-[var(--accent)]/5"
										:	"text-[var(--text-label)] border-[#27272a]"
									}`}
								>
									{p.tag}
								</span>
								<span className="text-[11px] text-[var(--text-muted)] truncate">
									{p.es}
								</span>
								<span className="ml-auto text-[10px] text-[#27272a] shrink-0">
									{p.en}
								</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* ── KEY PHRASES ── */}
			<section className="max-w-5xl mx-auto px-8 mt-12">
				<SectionTitle>Key phrases</SectionTitle>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[var(--border)] rounded-xl overflow-hidden">
					{PHRASES.map((p) => (
						<PhraseCard key={p.es} {...p} />
					))}
				</div>
			</section>

			{/* ── COMPASS / DIRECTIONS ── */}
			<section className="max-w-5xl mx-auto px-8 mt-12">
				<SectionTitle>Cardinal directions</SectionTitle>
				<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-8 flex flex-col sm:flex-row gap-10 items-center">
					{/* compass */}
					<div
						className="relative shrink-0"
						style={{ width: 140, height: 140 }}
					>
						<div className="w-full h-full border border-[#27272a] rounded-full relative">
							{/* lines */}
							<div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-px h-[45%] bg-[#27272a]" />
							<div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-px h-[45%] bg-[#27272a]" />
							<div className="absolute left-[5%] top-1/2 -translate-y-1/2 h-px w-[45%] bg-[#27272a]" />
							<div className="absolute right-[5%] top-1/2 -translate-y-1/2 h-px w-[45%] bg-[#27272a]" />
							{/* labels */}
							<span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.1em] uppercase text-[var(--accent)]">
								N
							</span>
							<span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
								S
							</span>
							<span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
								E
							</span>
							<span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
								W
							</span>
							{/* center dot */}
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] rounded-full" />
						</div>
					</div>

					<div className="grid grid-cols-2 gap-2 flex-1 min-w-[200px]">
						{DIRECTIONS.map((d) => (
							<DirCard key={d.es} {...d} />
						))}
					</div>
				</div>
			</section>

			{/* ── QUIZ ── */}
			<section className="max-w-5xl mx-auto px-8 mt-12">
				<SectionTitle>Quick quiz — test yourself</SectionTitle>
				<QuizSection />
			</section>

			{/* ── PLACES ── */}
			<section className="max-w-5xl mx-auto px-8 mt-12">
				<SectionTitle>Places in town — Lugares</SectionTitle>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-[var(--border)] rounded-xl overflow-hidden">
					{PLACES.map((p) => (
						<PlaceCard key={p.es} {...p} />
					))}
				</div>
			</section>

			{/* ── VOCABULARY ── */}
			<section className="max-w-5xl mx-auto px-8 mt-12 pb-24">
				<SectionTitle>Vocabulary — all location words</SectionTitle>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-[var(--border)] rounded-xl overflow-hidden">
					{VOCAB.map((v) => (
						<VocabPill key={v.word} {...v} />
					))}
				</div>
			</section>
		</div>
	);
}
