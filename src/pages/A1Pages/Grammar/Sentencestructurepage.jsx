import { useState } from "react";
import BackNext from "../../../components/BackNext";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SLOTS = [
	{
		id: "subject",
		label: "Subject",
		abbr: "S",
		color: "#93C5FD",
		desc: "Who does the action. Can be dropped — the verb ending already shows it.",
		notes: [
			"Yo, tú, él, ella, nosotros, ellos",
			"Proper names: María, Carlos",
			"Often omitted in Spanish (pro-drop language)",
		],
	},
	{
		id: "verb",
		label: "Verb",
		abbr: "V",
		color: "#f59e0b",
		desc: "The action — always conjugated to match the subject.",
		notes: [
			"Habla = he/she speaks (not 'hablar')",
			"Verb carries the subject info via its ending",
			"Usually the most important word in the sentence",
		],
	},
	{
		id: "object",
		label: "Object",
		abbr: "O",
		color: "#6EE7B7",
		desc: "What the action is done to. Can be direct or indirect.",
		notes: [
			"Direct: what receives the action — veo el perro",
			"Indirect: who benefits — le doy el libro",
			"Objects often come after the verb in Spanish",
		],
	},
];

const EXAMPLES = [
	{
		id: "basic",
		label: "Basic SVO",
		parts: [
			{ slot: "subject", text: "El libro" },
			{ slot: "verb", text: "es" },
			{ slot: "object", text: "rojo" },
		],
		translation: "The book is red",
	},

	{
		id: "dropped",
		label: "Subject dropped",
		parts: [
			{ slot: "verb", text: "eres" },
			{ slot: "object", text: "bonita" },
		],
		translation: "You are beautiful",
		note: "Subject 'tú' is understood from the verb ending",
	},

	{
		id: "question",
		label: "Yes/No question",
		parts: [
			{ slot: "verb", text: "¿el libro" },
			{ slot: "subject", text: "es" },
			{ slot: "object", text: "rojo?" },
		],
		translation: "Is the book red?",
		note: "Just add ¿…? — word order stays the same",
	},

	{
		id: "neg",
		label: "Negation",
		parts: [
			{ slot: "subject", text: "El libro" },
			{ slot: "verb", text: "no es" },
			{ slot: "object", text: "rojo" },
		],
		translation: "The book is not red",
		note: "Put 'no' directly before the verb",
	},

	{
		id: "wh",
		label: "WH-question",
		parts: [
			{ slot: "wh", text: "¿Dónde" },
			{ slot: "verb", text: "vives" }, // (optional: you can also change this later)
			{ slot: "subject", text: "tú?" },
		],
		translation: "Where do you live?",
		note: "Question word → verb → subject",
	},
];

const SLOT_COLOR = {
	subject: "#93C5FD",
	verb: "#f59e0b",
	object: "#6EE7B7",
	wh: "#C4B5FD",
};

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function SlotPill({ slot, text, dim }) {
	const color = SLOT_COLOR[slot] ?? "#52525b";
	return (
		<span
			className="inline-flex flex-col items-center gap-1"
			style={{ opacity: dim ? 0.3 : 1, transition: "opacity 0.15s" }}
		>
			<span
				className="text-[22px] font-light tracking-[-0.01em] px-3 py-1.5 rounded-lg border"
				style={{
					color,
					borderColor: color + "30",
					background: color + "08",
				}}
			>
				{text}
			</span>
			<span
				className="text-[8px] tracking-[0.14em] uppercase"
				style={{ color: color + "80" }}
			>
				{slot === "wh" ? "WH" : slot}
			</span>
		</span>
	);
}

function ExampleCard({ ex, activeSlot }) {
	return (
		<div className="border border-[var(--border)] rounded-xl bg-[var(--bg)] p-5">
			<p className="text-[9px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-4">
				{ex.label}
			</p>
			<div className="flex items-end gap-3 flex-wrap mb-4">
				{ex.parts.map((p, i) => (
					<SlotPill
						key={i}
						slot={p.slot}
						text={p.text}
						dim={activeSlot && p.slot !== activeSlot}
					/>
				))}
			</div>
			<div className="border-t border-[var(--border)] pt-3">
				<p className="text-[12px] text-[var(--text-muted)] italic">
					{ex.translation}
				</p>
				{ex.note && (
					<p className="text-[10px] text-[var(--text-label)] mt-1">{ex.note}</p>
				)}
			</div>
		</div>
	);
}

function SlotCard({ slot, isActive, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
				isActive ?
					"bg-[var(--surface)] border-[#27272a]"
				:	"bg-transparent border-[var(--border)] hover:bg-[var(--surface)] hover:border-[#27272a]"
			}`}
		>
			<div className="flex items-center gap-3 mb-3">
				<span
					className="text-[28px] font-extralight leading-none"
					style={{ color: slot.color }}
				>
					{slot.abbr}
				</span>
				<span className="text-[12px] text-[var(--text-secondary)]">
					{slot.label}
				</span>
			</div>
			<p className="text-[11px] text-[var(--text-muted)] leading-relaxed mb-3">
				{slot.desc}
			</p>
			{isActive && (
				<ul className="flex flex-col gap-1.5 border-t border-[var(--border)] pt-3">
					{slot.notes.map((n, i) => (
						<li key={i} className="flex items-start gap-2">
							<span
								style={{ color: slot.color + "60" }}
								className="text-[10px] mt-0.5"
							>
								→
							</span>
							<span className="text-[11px] text-[var(--text-label)] leading-relaxed">
								{n}
							</span>
						</li>
					))}
				</ul>
			)}
		</button>
	);
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SentenceStructurePage() {
	const [activeSlot, setActiveSlot] = useState(null);

	const toggleSlot = (id) => setActiveSlot(activeSlot === id ? null : id);

	return (
		<div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-mono">
			<div className="max-w-5xl mx-auto px-8 pt-16 pb-24">
				{/* Header */}
				<div className="mb-14">
					<p className="text-[11px] tracking-[0.18em] uppercase text-[var(--text-label)] mb-4">
						Grammar — A1 · Foundation
					</p>
					<h1 className="text-5xl font-light tracking-[-0.04em] text-[var(--text-primary)] mb-3">
						Sentence Structure
					</h1>
					<p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-lg">
						Spanish follows Subject → Verb → Object. But it's flexible — and the
						verb does a lot of the work.
					</p>
				</div>

				{/* SVO diagram */}
				<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] p-8 mb-6">
					<p className="text-[10px] tracking-[0.16em] uppercase text-[var(--text-label)] mb-6">
						Basic order — tap a slot to explore
					</p>

					{/* Large visual */}
					<div className="flex items-center gap-4 mb-8 flex-wrap">
						{SLOTS.map((slot, i) => (
							<div key={slot.id} className="flex items-center gap-4">
								<button
									onClick={() => toggleSlot(slot.id)}
									className="flex flex-col items-center gap-2 cursor-pointer group"
								>
									<span
										className="text-[56px] font-extralight leading-none transition-colors duration-150"
										style={{
											color:
												activeSlot === slot.id ? slot.color
												: activeSlot ? "#27272a"
												: slot.color + "70",
										}}
									>
										{slot.abbr}
									</span>
									<span
										className="text-[9px] tracking-[0.16em] uppercase transition-colors duration-150"
										style={{
											color:
												activeSlot === slot.id ? slot.color + "80" : "#27272a",
										}}
									>
										{slot.label}
									</span>
								</button>
								{i < SLOTS.length - 1 && (
									<span className="text-[#27272a] text-[20px] font-light">
										→
									</span>
								)}
							</div>
						))}

						<div className="ml-auto border border-[var(--border)] rounded-xl px-5 py-3 hidden lg:block">
							<p className="text-[11px] text-[var(--text-label)] mb-1">
								Canonical example
							</p>
							<p className="text-[15px] font-light">
								<span style={{ color: "#93C5FD" }}>Ella</span>{" "}
								<span style={{ color: "#f59e0b" }}>come</span>{" "}
								<span style={{ color: "#6EE7B7" }}>pan</span>.
							</p>
							<p className="text-[10px] text-[var(--text-label)] mt-1">
								She eats bread.
							</p>
						</div>
					</div>

					{/* Slot detail cards */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
						{SLOTS.map((slot) => (
							<SlotCard
								key={slot.id}
								slot={slot}
								isActive={activeSlot === slot.id}
								onClick={() => toggleSlot(slot.id)}
							/>
						))}
					</div>
				</div>

				{/* Example sentences */}
				<div className="mb-14">
					<div className="flex items-center gap-4 mb-5">
						<h2 className="text-[13px] font-light tracking-[-0.01em] text-[var(--text-secondary)]">
							Sentence patterns
						</h2>
						{activeSlot && (
							<span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
								— highlighting{" "}
								<span style={{ color: SLOT_COLOR[activeSlot] }}>
									{activeSlot}
								</span>{" "}
								slots
							</span>
						)}
						{activeSlot && (
							<button
								onClick={() => setActiveSlot(null)}
								className="ml-auto text-[10px] text-[#27272a] hover:text-[var(--text-muted)] transition-colors cursor-pointer"
							>
								clear ✕
							</button>
						)}
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
						{EXAMPLES.map((ex) => (
							<ExampleCard key={ex.id} ex={ex} activeSlot={activeSlot} />
						))}
					</div>
				</div>

				<BackNext
					back="/a1/grammar/pronouns"
					next="/a1/grammar/demonstrative"
					backLabel="Subject Pronouns"
					nextLabel="Demonstratives"
				/>
			</div>
		</div>
	);
}
