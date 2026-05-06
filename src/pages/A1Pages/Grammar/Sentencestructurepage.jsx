import { useState } from "react";
import { SLOTS, SLOT_COLOR, EXAMPLES } from "../../../context/SenCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import ExampleCard from "../../../components/Sentence/ExampleCard";
import SlotCard from "../../../components/Sentence/SlotCard";
import SlotPill from "../../../components/Sentence/SlotPill";

export default function SentenceStructurePage() {
	const [activeSlot, setActiveSlot] = useState(null);

	const toggleSlot = (id) => setActiveSlot(activeSlot === id ? null : id);

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Grammar" />
				<PageHeader
					title="Sentence Structure"
					es="estructura de la oración"
					description="Spanish follows Subject → Verb → Object. But it's flexible — and the
						verb does a lot of the work →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* SVO diagram */}
			<div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] p-8 mb-6">
				<Eyebrow>Basic order — tap a slot to explore</Eyebrow>

				{/* Large visual */}
				<div className="flex items-center gap-3 mb-8 flex-wrap justify-center lg:justify-start">
					{SLOTS.map((slot, i) => (
						<div key={slot.id} className="flex items-center gap-4">
							<button
								onClick={() => toggleSlot(slot.id)}
								className="flex flex-col items-center gap-2 cursor-pointer group"
							>
								<span
									className="text-[36px] lg:text-[56px] font-extralight leading-none transition-colors duration-150"
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
								<span className="text-[#27272a] text-[20px] font-light">→</span>
							)}
						</div>
					))}

					<div className="mt-4 lg:mt-0 lg:ml-auto border border-[var(--border)] rounded-xl px-5 py-3">
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
					<Eyebrow>Sentence patterns</Eyebrow>
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
		</PageWrapper>
	);
}
