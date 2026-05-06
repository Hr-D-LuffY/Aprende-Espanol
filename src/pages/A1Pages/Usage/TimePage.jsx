import { useState, useEffect } from "react";
import {
	AMPM_EXAMPLES,
	MENOS_EXAMPLES,
	MINUTES_EXAMPLES,
	ASKING_EXAMPLES,
	STRUCTURE_EXAMPLES,
} from "../../../context/TimeCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";
import Eyebrow from "../../../components/Eyebrow";

import ExPair from "/src/components/Usage/ExPair.jsx";
import Card from "../../../components/Card";

function RuleChip({ label, value, accent }) {
	return (
		<div
			className={`border rounded-lg px-3 py-2.5 flex flex-col gap-1
            ${accent ? "border-[#f59e0b]/30 bg-[var(--accent)]/5" : "border-[var(--border)] bg-[var(--bg)]"}`}
		>
			<span className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]">
				{label}
			</span>
			<span
				className={`text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em] ${accent ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`}
			>
				{value}
			</span>
		</div>
	);
}

export default function TimePage() {
	return (
		<PageWrapper>
			{/* Header */}
			<div className="mb-10">
				<PageReference reference="A1" topic="Usage" />
				<PageHeader
					title="Time "
					es="La hora	"
					description="Learn how to tell time in Spanish with clear examples →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Core rule */}
			<Card className="mb-6 p-4 sm:p-6">
				<Eyebrow>The core rule</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-5 tracking-wide max-w-lg">
					Spanish uses two different starters for time — one for 1 o'clock,
					another for everything else.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
					<div className="border border-[#f59e0b]/30 rounded-lg p-4 bg-[var(--accent)]/5">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
							Only for 1:00
						</p>
						<p className="text-[18px] sm:text-[20px] font-light text-[var(--accent)] tracking-[-0.02em]">
							Es la una
						</p>
						<p className="text-[11px] text-[var(--text-muted)] mt-1">
							singular — it's one
						</p>
					</div>
					<div className="border border-[var(--border)] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
							For 2–12
						</p>
						<p className="text-[18px] sm:text-[20px] font-light text-[var(--text-secondary)] tracking-[-0.02em]">
							Son las <span className="text-[var(--text-primary)]">___</span>
						</p>
						<p className="text-[11px] text-[var(--text-muted)] mt-1">
							plural — they are the hours
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
					{STRUCTURE_EXAMPLES.map((ex, i) => (
						<ExPair key={i} {...ex} />
					))}
				</div>
			</Card>

			{/* Minutes + Menos */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
				{/* Y — adding minutes */}
				<Card>
					<div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
						<Eyebrow>Adding minutes — y</Eyebrow>
						<div className="flex flex-wrap gap-2 mb-4">
							<RuleChip label="formula" value="hour + y + minutes" />
						</div>
						<div className="grid grid-cols-2 gap-2 mb-4">
							<RuleChip label=":15" value="y cuarto" accent />
							<RuleChip label=":30" value="y media" accent />
						</div>
					</div>
					<div className="px-4 sm:px-5 pb-4">
						{MINUTES_EXAMPLES.map((ex, i) => (
							<ExPair key={i} {...ex} />
						))}
						<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
							tap to reveal
						</p>
					</div>
				</Card>

				{/* Menos — after :30 */}
				<Card>
					<div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
						<Eyebrow>After :30 — menos</Eyebrow>
						<p className="text-[11px] text-[var(--text-muted)] tracking-wide leading-relaxed mb-3">
							For minutes past :30, count down from the next hour using menos
							(minus).
						</p>
						<div className="border border-[#f59e0b]/30 rounded-lg p-3 bg-[var(--accent)]/5 mb-4">
							<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1">
								structure
							</p>
							<p className="text-[12px] text-[var(--text-secondary)]">
								Son las{" "}
								<span className="text-[var(--text-primary)]">(next hour)</span>{" "}
								menos{" "}
								<span className="text-[var(--accent)]">(minutes left)</span>
							</p>
						</div>
						<div className="border border-[var(--border)] rounded-lg p-3 mb-4">
							<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1">
								:45 special
							</p>
							<p className="text-[12px] text-[var(--text-secondary)]">
								→ <span className="text-[var(--accent)]">menos cuarto</span>
							</p>
						</div>
					</div>
					<div className="px-4 sm:px-5 pb-4">
						{MENOS_EXAMPLES.map((ex, i) => (
							<ExPair key={i} {...ex} />
						))}
						<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
							tap to reveal
						</p>
					</div>
				</Card>
			</div>

			{/* AM / PM */}
			<Card className="mb-6">
				<div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
					<Eyebrow>AM / PM — time of day</Eyebrow>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
						{[
							{
								label: "de la mañana",
								range: "12 AM – 12 PM",
								note: "morning",
							},
							{
								label: "de la tarde",
								range: "12 PM – 9 PM",
								note: "afternoon",
							},
							{ label: "de la noche", range: "9 PM – 12 AM", note: "night" },
						].map((p) => (
							<div
								key={p.label}
								className="border border-[var(--border)] rounded-lg p-3 hover:border-[#27272a] transition-colors"
							>
								<p className="text-[13px] text-[var(--accent)] font-semibold mb-1">
									{p.label}
								</p>
								<p className="text-[10px] text-[var(--text-label)] tracking-wide mb-0.5">
									{p.note}
								</p>
								<p className="text-[10px] text-[#27272a] tracking-wide">
									{p.range}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="px-4 sm:px-5 pb-4">
					{AMPM_EXAMPLES.map((ex, i) => (
						<ExPair key={i} {...ex} />
					))}
					<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
						tap to reveal
					</p>
				</div>
			</Card>

			{/* Asking time */}
			<Card className="mb-6">
				<div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-3">
					<Eyebrow>Asking the time</Eyebrow>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
						<div className="border border-[var(--border)] rounded-lg p-3">
							<p className="text-[12px] text-[var(--accent)] mb-0.5">
								¿Qué hora es?
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-wide">
								What time is it?
							</p>
						</div>
						<div className="border border-[var(--border)] rounded-lg p-3">
							<p className="text-[12px] text-[var(--accent)] mb-0.5">
								¿A qué hora?
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-wide">
								At what time?
							</p>
						</div>
					</div>
					<div className="border border-[#f59e0b]/30 rounded-lg p-3 bg-[var(--accent)]/5 mb-5">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
							⚡ key distinction
						</p>
						{/* Stack vertically on mobile to prevent overflow */}
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
							<div>
								<p className="text-[12px] text-[var(--text-primary)]">
									Son las diez.
								</p>
								<p className="text-[10px] text-[var(--text-muted)] tracking-wide">
									It's 10 o'clock.
								</p>
							</div>
							<div>
								<p className="text-[12px] text-[var(--text-primary)]">
									<span className="text-[var(--accent)]">A</span> las diez.
								</p>
								<p className="text-[10px] text-[var(--text-muted)] tracking-wide">
									At 10 o'clock.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 sm:px-5 pb-4">
					{ASKING_EXAMPLES.map((ex, i) => (
						<ExPair key={i} {...ex} />
					))}
					<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
						tap to reveal
					</p>
				</div>
			</Card>

			{/* Remember strip */}
			<Card className="p-4 sm:p-5">
				<Eyebrow>Remember</Eyebrow>
				{/* 1-col on mobile, 3-col on sm+ */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
					{[
						{ rule: "1 o'clock", value: "→ Es la", note: "singular" },
						{ rule: "2–12 o'clock", value: "→ Son las", note: "plural" },
						{
							rule: "minutes > :30",
							value: "→ menos",
							note: "count down from next hour",
						},
					].map((r) => (
						<div
							key={r.rule}
							className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-lg p-3"
						>
							<p className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)] mb-1">
								{r.rule}
							</p>
							<p className="text-[14px] text-[var(--accent)] font-semibold">
								{r.value}
							</p>
							<p className="text-[10px] text-[var(--text-muted)] tracking-wide mt-0.5">
								{r.note}
							</p>
						</div>
					))}
				</div>
			</Card>
			<BackNext
				back="/a1/usage/numbers"
				next="/a1/usage/days-months"
				backLabel="Numbers"
				nextLabel="Days & Months"
			/>
		</PageWrapper>
	);
}
