import { useState } from "react";
import {
	PHRASES,
	PLACES,
	VOCAB,
	DIRECTIONS,
	PLACE_SENTENCES,
	PREPS,
	GRAMMAR_NOTES,
} from "../../../context/LocationCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";

import PrepScene from "../../../components/Usage/PrepScene.jsx";
import PlaceCard from "../../../components/Usage/PlaceCard.jsx";
import LocCard from "../../../components/Usage/LocCard.jsx";
import VocabPill from "../../../components/Usage/VocabPill.jsx";
import KeyRule from "../../../components/Usage/KeyRule.jsx";
import Eyebrow from "../../../components/Eyebrow.jsx";
import Card from "../../../components/Card";

export default function LocationPage() {
	const [activePrep, setActivePrep] = useState(0);

	return (
		<PageWrapper>
			<div className="mb-10">
				<PageReference reference="A1" topic="Usage" />
				<PageHeader
					title="Location"
					es="Lugares"
					description="How to describe where things are — prepositions, places, and directions in Spanish →"
				/>
			</div>
			<div className="border-t border-[var(--border)] mb-10" />

			{/* Key rules */}
			<Card className="mb-6 p-4 sm:p-6">
				<Eyebrow>Key rules</Eyebrow>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
					{GRAMMAR_NOTES.map((r) => (
						<KeyRule key={r.tag} {...r} />
					))}
				</div>
			</Card>

			{/* ── PREPOSITIONS ── */}
			<section className="px-4 lg:px-0  mt-10 sm:mt-12">
				<Eyebrow>Prepositions of place — tap to visualize</Eyebrow>
				<div className="border-t border-[var(--border)] mb-4" />
				<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-4 sm:p-6 flex flex-col gap-4 sm:gap-5">
					{/* Tab strip */}
					<div className="flex flex-wrap gap-1.5">
						{PREPS.map((p, i) => (
							<button
								key={p.pos}
								onClick={() => setActivePrep(i)}
								className={`px-3 py-1.5 rounded-full border text-[10px] tracking-[0.06em] transition-all duration-150 cursor-pointer font-semibold ${
									activePrep === i ?
										"bg-[var(--accent)] text-[var(--accent-text)] border-[var(--accent)]"
									:	"bg-transparent border-[var(--border-hover)] text-[var(--text-muted)] hover:border-[var(--text-label)] hover:text-[var(--text-secondary)]"
								}`}
							>
								{p.tag}
							</button>
						))}
					</div>

					{/* Meaning badge + scene */}
					<div className="flex flex-col gap-3">
						{/* Meaning pill */}
						<div className="flex items-center gap-3">
							<span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-label)]">
								means
							</span>
							<span className="text-[12px] text-[var(--accent)] border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-full px-3 py-1 tracking-wide">
								{PREPS[activePrep].meaning}
							</span>
						</div>
						<PrepScene activePos={PREPS[activePrep].pos} />
						<div className="border border-[var(--border)] rounded-lg bg-[var(--bg)] px-4 py-3">
							<p className="text-[13px] text-[var(--text-primary)] tracking-[-0.01em] mb-1">
								{PREPS[activePrep].es}
							</p>
							<p className="text-[11px] text-[var(--text-muted)] tracking-wide">
								{PREPS[activePrep].en}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── KEY PHRASES ── */}
			<section className="px-4 lg:px-0  mt-10 sm:mt-12">
				<Eyebrow>Key phrases</Eyebrow>
				<div className="border-t border-[var(--border)] mb-4" />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3  overflow-hidden">
					{PHRASES.map((p) => (
						<LocCard key={p.es} {...p} />
					))}
				</div>
			</section>

			{/* ── DIRECTIONS ── */}
			<section className="px-4 lg:px-0  mt-10 sm:mt-12">
				<Eyebrow>Cardinal directions</Eyebrow>
				<div className="border-t border-[var(--border)] mb-4" />
				<div className="border border-[var(--border)] rounded-xl bg-[var(--surface)] p-5 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
					<div
						className="relative shrink-0"
						style={{ width: 140, height: 140 }}
					>
						<div className="w-full h-full border border-[#27272a] rounded-full relative">
							<div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-px h-[45%] bg-[#27272a]" />
							<div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-px h-[45%] bg-[#27272a]" />
							<div className="absolute left-[5%] top-1/2 -translate-y-1/2 h-px w-[45%] bg-[#27272a]" />
							<div className="absolute right-[5%] top-1/2 -translate-y-1/2 h-px w-[45%] bg-[#27272a]" />
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
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] rounded-full" />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-2 flex-1 w-full sm:min-w-[200px]">
						{DIRECTIONS.map((d) => (
							<LocCard key={d.es} {...d} />
						))}
					</div>
				</div>
			</section>

			{/* ── PLACES IN TOWN — clickable ── */}
			<section className="px-4 lg:px-0  mt-10 sm:mt-12">
				<Eyebrow>Places in town — tap for a sentence</Eyebrow>
				<div className="border-t border-[var(--border)] mb-4" />
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-[var(--border)] rounded-xl overflow-hidden">
					{PLACES.map((p) => (
						<PlaceCard key={p.es} {...p} />
					))}
				</div>
			</section>

			{/* ── VOCABULARY — list style ── */}
			<section className="px-4 lg:px-0  mt-10 sm:mt-12 ">
				<Eyebrow>Vocabulary — all location words</Eyebrow>
				<div className="border-t border-[var(--border)] mb-4" />
				<div className="grid grid-cols-1 sm:grid-cols-2 border border-[var(--border)] rounded-xl overflow-hidden divide-y divide-[var(--border)] sm:divide-y-0">
					{/* Left column */}
					<div className="border-r-0 sm:border-r border-[var(--border)]">
						{VOCAB.slice(0, Math.ceil(VOCAB.length / 2)).map((v) => (
							<VocabPill key={v.word} {...v} />
						))}
					</div>
					{/* Right column */}
					<div>
						{VOCAB.slice(Math.ceil(VOCAB.length / 2)).map((v) => (
							<VocabPill key={v.word} {...v} />
						))}
					</div>
				</div>
			</section>

			<BackNext
				back="/a1/usage/days-months"
				next="/vocabulary"
				backLabel="Days & Months"
				nextLabel="Vocabulary"
			/>
		</PageWrapper>
	);
}
