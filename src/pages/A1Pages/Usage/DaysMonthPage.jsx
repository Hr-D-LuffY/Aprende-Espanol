import { useState } from "react";
import {
	KEY_RULES,
	DAYS,
	MONTHS,
	SEASONS,
	DAY_EXAMPLES,
	MONTH_EXAMPLES,
	DATE_EXAMPLES,
} from "../../../context/DaysCon";

import PageWrapper from "../../../components/PageWrapper";
import PageHeader from "../../../components/PageHeader";
import PageReference from "../../../components/PageReference";
import BackNext from "/src/components/BackNext.jsx";

import KeyRule from "../../../components/Usage/KeyRule";
import ExPair from "../../../components/Usage/ExPair";
import WeekStrip from "../../../components/Usage/WeekStrip";
import MonthGrid from "../../../components/Usage/MonthGrid";
import Eyebrow from "../../../components/Eyebrow";
import Card from "../../../components/Card";

export default function DaysMonthsPage() {
	const [activeMonth, setActiveMonth] = useState(null);
	const [todayIdx, setTodayIdx] = useState(0);

	const selectedMonth = activeMonth !== null ? MONTHS[activeMonth] : null;
	const selectedSeason = selectedMonth ? SEASONS[selectedMonth.season] : null;

	return (
		<PageWrapper>
			{/* Header */}
			<div className="mb-10">
				<PageReference reference="A1" topic="Usage" />
				<PageHeader
					title="Days and Months"
					es="días y meses"
					description="Days of the week and months of the year — lowercase in Spanish, no
					capitalization →"
				/>
			</div>

			<div className="border-t border-[var(--border)] mb-10" />

			{/* Key rules */}
			<Card className="mb-6 p-4 sm:p-6">
				<Eyebrow>Key rules</Eyebrow>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
					{KEY_RULES.map((r) => (
						<KeyRule key={r.tag} {...r} />
					))}
				</div>
			</Card>

			{/* ── Days of the week ── */}
			<div className="mb-6">
				<h2 className="text-lg sm:text-xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-4">
					Days of the week
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 sm:gap-6">
					{/* Days list */}
					<Card>
						<div className="px-4 pt-4 sm:pt-5 pb-2">
							<Eyebrow>Los días de la semana</Eyebrow>
							<div className="mb-4">
								<WeekStrip today={todayIdx} />
								<p className="text-[10px] text-[var(--text-ghost)] mt-2 tracking-wide">
									week starts Monday in Spanish calendars
								</p>
							</div>
						</div>
						{DAYS.map((d, i) => (
							<div
								key={d.es}
								onClick={() => setTodayIdx(i)}
								className={`flex items-center justify-between py-2.5 px-4 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors group
                                    ${todayIdx === i ? "bg-[var(--accent)]/5" : "hover:bg-[var(--surface)]"}`}
							>
								<div className="flex items-center gap-2 sm:gap-3 min-w-0">
									<span className="text-[10px] text-[var(--text-ghost)] w-5 shrink-0">
										{i + 1}
									</span>
									<div className="min-w-0">
										<span
											className={`text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] transition-colors
                                            ${todayIdx === i ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
										>
											{d.es}
										</span>
										{d.note && (
											<span className="text-[10px] text-[var(--text-ghost)] ml-2 tracking-wide hidden sm:inline">
												{d.note}
											</span>
										)}
									</div>
								</div>
								<span className="text-[11px] sm:text-[12px] text-[var(--text-muted)] shrink-0 ml-2">
									{d.en}
								</span>
							</div>
						))}
					</Card>

					{/* Days examples */}
					<Card>
						<div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
							<Eyebrow>Examples</Eyebrow>
						</div>
						<div className="px-4 sm:px-5 pb-4">
							{DAY_EXAMPLES.map((ex, i) => (
								<ExPair key={i} {...ex} />
							))}
							<p className="text-[10px] text-[var(--text-ghost)] mt-3 tracking-wide">
								tap to reveal
							</p>
						</div>
					</Card>
				</div>
			</div>

			{/* ── Months ── */}
			<div className="mb-6">
				<h2 className="text-lg sm:text-xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-4">
					Months of the year
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 sm:gap-6">
					{/* Month grid selector */}
					<Card className="p-4 sm:p-5">
						<Eyebrow>Los meses del año</Eyebrow>
						<MonthGrid active={activeMonth} onSelect={setActiveMonth} />

						{selectedMonth ?
							<div
								className={`mt-4 border rounded-lg p-3 sm:p-4 transition-all ${selectedSeason.border} ${selectedSeason.bg}`}
							>
								<div className="flex items-baseline gap-2 sm:gap-3 mb-1">
									<p
										className={`text-[18px] sm:text-[20px] font-light tracking-[-0.02em] ${selectedSeason.color}`}
									>
										{selectedMonth.es}
									</p>
									<span className="text-[12px] sm:text-[13px] text-[var(--text-muted)]">
										{selectedMonth.en}
									</span>
								</div>
								<p className="text-[10px] text-[var(--text-label)] tracking-wide">
									{selectedSeason.es} · {selectedMonth.season}
								</p>
							</div>
						:	<p className="text-[10px] text-[var(--text-ghost)] mt-4 tracking-wide">
								tap a month to see details
							</p>
						}

						{/* Seasons legend */}
						<div className="mt-4 pt-4 border-t border-[var(--border)]">
							<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-ghost)] mb-2">
								seasons
							</p>
							<div className="grid grid-cols-2 gap-1.5 sm:gap-2">
								{Object.entries(SEASONS).map(([key, s]) => (
									<div key={key} className="flex items-center gap-1.5 sm:gap-2">
										<div
											className={`w-2 h-2 rounded-full shrink-0 ${s.color.replace("text-", "bg-")}`}
										/>
										<span className={`text-[11px] ${s.color}`}>{s.es}</span>
										<span className="text-[10px] text-[var(--text-ghost)]">
											· {key}
										</span>
									</div>
								))}
							</div>
						</div>
					</Card>

					{/* Month examples */}
					<Card>
						<div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
							<Eyebrow>Examples</Eyebrow>
						</div>
						<div className="px-4 sm:px-5 pb-4">
							{MONTH_EXAMPLES.map((ex, i) => (
								<ExPair key={i} {...ex} />
							))}
							<p className="text-[10px] text-[var(--text-ghost)] mt-3 tracking-wide">
								tap to reveal
							</p>
						</div>
					</Card>
				</div>
			</div>

			{/* ── Writing dates ── */}
			<Card className="mb-6 p-4 sm:p-6">
				<Eyebrow>Writing dates</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-4 tracking-wide max-w-lg">
					Spanish dates use:{" "}
					<span className="text-[var(--text-primary)]">
						el + number + de + month
					</span>
					. No ordinal numbers (1st, 2nd) — just the plain number.
				</p>
				<div className="border border-[var(--accent)]/30 bg-[var(--accent)]/5 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
						structure
					</p>
					<p className="text-[12px] sm:text-[13px] text-[var(--text-secondary)]">
						el <span className="text-[var(--text-primary)]">[number]</span> de{" "}
						<span className="text-[var(--accent)]">[month]</span>
						<span className="text-[var(--text-muted)]"> (de [year])</span>
					</p>
				</div>
				<div>
					{DATE_EXAMPLES.map((ex, i) => (
						<ExPair key={i} {...ex} />
					))}
					<p className="text-[10px] text-[var(--text-ghost)] mt-3 tracking-wide">
						tap to reveal
					</p>
				</div>
			</Card>

			<BackNext
				back="/a1/usage/time"
				next="/a1/usage/location"
				backLabel="Time"
				nextLabel="Location"
			/>
		</PageWrapper>
	);
}
