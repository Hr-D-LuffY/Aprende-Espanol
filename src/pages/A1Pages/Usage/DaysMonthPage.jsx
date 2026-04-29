import { useState } from "react";
import {
	Eyebrow,
	Card,
	UsePill,
	PageWrapper,
	BackNav,
} from "../../../components/VerbComponents";
import BackNext from "../../../components/BackNext";

// ── Local components ──

function ExPair({ es, en }) {
	const [shown, setShown] = useState(false);
	return (
		<div
			onClick={() => setShown((s) => !s)}
			className={`py-3 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors duration-150 rounded-sm
                ${shown ? "bg-[var(--accent)]/5 px-2 -mx-2" : "hover:bg-[var(--surface)]"}`}
		>
			<p
				className={`text-[13px] tracking-[-0.01em] transition-colors ${shown ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
			>
				{es}
			</p>
			<p
				className={`text-[11px] tracking-wide transition-all duration-150
                ${shown ? "text-[var(--text-muted)] max-h-10" : "text-[#1c1c1f] max-h-0 overflow-hidden"}`}
			>
				{en}
			</p>
		</div>
	);
}

// Flashcard-style flip card for drilling vocabulary
function FlipCard({ es, en, sub }) {
	const [flipped, setFlipped] = useState(false);
	return (
		<div
			onClick={() => setFlipped((f) => !f)}
			className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 select-none min-h-[80px] flex flex-col justify-between
                ${
									flipped ?
										"border-[#f59e0b]/30 bg-[var(--accent)]/5"
									:	"border-[var(--border)] bg-[var(--bg)] hover:border-[#27272a]"
								}`}
		>
			<div>
				<p
					className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors
                    ${flipped ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
				>
					{flipped ? en : es}
				</p>
				{sub && (
					<p className="text-[10px] text-[var(--text-label)] tracking-wide mt-0.5">
						{flipped ? "" : sub}
					</p>
				)}
			</div>
			<p className="text-[10px] text-[#27272a] tracking-wide self-end">
				{flipped ? "← tap back" : "tap →"}
			</p>
		</div>
	);
}

// Mini calendar grid for the week
function WeekStrip({ today }) {
	const DAYS_SHORT = ["L", "M", "X", "J", "V", "S", "D"];
	return (
		<div className="grid grid-cols-7 gap-1">
			{DAYS_SHORT.map((d, i) => (
				<div key={i} className="flex flex-col items-center gap-1">
					<span className="text-[9px] tracking-[0.1em] text-[var(--text-label)] uppercase">
						{d}
					</span>
					<div
						className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold
                        ${
													today === i ?
														"bg-[var(--accent)] text-[var(--accent-text)]"
													:	"text-[var(--text-muted)] border border-[var(--border)]"
												}`}
					>
						{i + 1}
					</div>
				</div>
			))}
		</div>
	);
}

// Month grid — 12-cell visual
function MonthGrid({ active, onSelect }) {
	const MONTHS_SHORT = [
		"ene",
		"feb",
		"mar",
		"abr",
		"may",
		"jun",
		"jul",
		"ago",
		"sep",
		"oct",
		"nov",
		"dic",
	];
	return (
		<div className="grid grid-cols-4 gap-2">
			{MONTHS_SHORT.map((m, i) => (
				<button
					key={i}
					onClick={() => onSelect(i)}
					className={`py-2 px-1 rounded-lg text-[11px] font-semibold tracking-wide border transition-all duration-150 cursor-pointer
                        ${
													active === i ?
														"bg-[var(--accent)] text-[var(--accent-text)] border-[#f59e0b]"
													:	"text-[var(--text-muted)] border-[var(--border)] hover:border-[#27272a] hover:text-[var(--text-secondary)]"
												}`}
				>
					{m}
				</button>
			))}
		</div>
	);
}

// ── Data ──

const DAYS = [
	{
		es: "lunes",
		en: "Monday",
		abbr: "lun.",
		note: "week starts here in Spanish",
	},
	{ es: "martes", en: "Tuesday", abbr: "mar." },
	{ es: "miércoles", en: "Wednesday", abbr: "mié." },
	{ es: "jueves", en: "Thursday", abbr: "jue." },
	{ es: "viernes", en: "Friday", abbr: "vie." },
	{ es: "sábado", en: "Saturday", abbr: "sáb.", note: "weekend" },
	{ es: "domingo", en: "Sunday", abbr: "dom.", note: "weekend" },
];

const MONTHS = [
	{ es: "enero", en: "January", season: "winter" },
	{ es: "febrero", en: "February", season: "winter" },
	{ es: "marzo", en: "March", season: "spring" },
	{ es: "abril", en: "April", season: "spring" },
	{ es: "mayo", en: "May", season: "spring" },
	{ es: "junio", en: "June", season: "summer" },
	{ es: "julio", en: "July", season: "summer" },
	{ es: "agosto", en: "August", season: "summer" },
	{ es: "septiembre", en: "September", season: "autumn" },
	{ es: "octubre", en: "October", season: "autumn" },
	{ es: "noviembre", en: "November", season: "autumn" },
	{ es: "diciembre", en: "December", season: "winter" },
];

const SEASONS = {
	winter: {
		es: "invierno",
		color: "text-[#60a5fa]",
		border: "border-[#60a5fa]/20",
		bg: "bg-[#60a5fa]/5",
	},
	spring: {
		es: "primavera",
		color: "text-[#4ade80]",
		border: "border-[#4ade80]/20",
		bg: "bg-[#4ade80]/5",
	},
	summer: {
		es: "verano",
		color: "text-[var(--accent)]",
		border: "border-[#f59e0b]/30",
		bg: "bg-[var(--accent)]/5",
	},
	autumn: {
		es: "otoño",
		color: "text-[#f97316]",
		border: "border-[#f97316]/20",
		bg: "bg-[#f97316]/5",
	},
};

const DAY_EXAMPLES = [
	{ es: "Hoy es lunes.", en: "Today is Monday." },
	{ es: "Mañana es martes.", en: "Tomorrow is Tuesday." },
	{ es: "El lunes tengo clase.", en: "On Monday I have class." },
	{ es: "Los lunes tengo clase.", en: "On Mondays I have class." },
	{ es: "¿Qué día es hoy?", en: "What day is today?" },
	{ es: "El fin de semana no trabajo.", en: "I don't work on weekends." },
];

const MONTH_EXAMPLES = [
	{ es: "Mi cumpleaños es en enero.", en: "My birthday is in January." },
	{ es: "Estamos en marzo.", en: "We are in March." },
	{ es: "¿En qué mes estamos?", en: "What month are we in?" },
	{
		es: "Las clases empiezan en septiembre.",
		en: "Classes start in September.",
	},
	{ es: "En diciembre hace frío.", en: "In December it's cold." },
	{ es: "Feliz Eid a todos — en abril.", en: "Happy Eid to all — in April." },
];

const DATE_EXAMPLES = [
	{ es: "Hoy es el 5 de mayo.", en: "Today is May 5th." },
	{
		es: "Mi cumpleaños es el 12 de octubre.",
		en: "My birthday is October 12th.",
	},
	{ es: "El examen es el 20 de junio.", en: "The exam is on June 20th." },
];

const VOCAB = [
	{ es: "hoy", en: "today" },
	{ es: "mañana", en: "tomorrow" },
	{ es: "ayer", en: "yesterday" },
	{ es: "la semana", en: "the week" },
	{ es: "el fin de semana", en: "the weekend" },
	{ es: "el mes", en: "the month" },
	{ es: "el año", en: "the year" },
	{ es: "el día", en: "the day" },
];

// ── Page ──

export default function DaysMonthsPage() {
	const [activeMonth, setActiveMonth] = useState(null);
	const [todayIdx, setTodayIdx] = useState(0);

	const selectedMonth = activeMonth !== null ? MONTHS[activeMonth] : null;
	const selectedSeason = selectedMonth ? SEASONS[selectedMonth.season] : null;

	return (
		<PageWrapper>
			<BackNav to="/" label="← vocabulary" />

			{/* Header */}
			<div className="mb-12">
				<Eyebrow>Vocabulary · Time · Calendar</Eyebrow>
				<div className="flex items-baseline gap-4 mb-3">
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
						días · meses
					</h1>
				</div>
				<p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-md tracking-wide mb-4">
					Days of the week and months of the year — lowercase in Spanish, no
					capitalization.
				</p>
				<div className="flex flex-wrap gap-2">
					{[
						"lowercase always",
						"el lunes = on Monday",
						"los lunes = every Monday",
						"en enero = in January",
					].map((u) => (
						<UsePill key={u}>{u}</UsePill>
					))}
				</div>
			</div>

			{/* Key rules */}
			<Card className="mb-6 p-6">
				<Eyebrow>Key rules</Eyebrow>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-lg p-4">
						<p className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)] mb-2">
							always lowercase
						</p>
						<p className="text-[13px] text-[var(--text-primary)]">
							lunes, enero
						</p>
						<p className="text-[10px] text-[var(--text-muted)] mt-1 tracking-wide">
							not: Lunes, Enero
						</p>
					</div>
					<div className="border border-[var(--border)] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)] mb-2">
							on a specific day
						</p>
						<p className="text-[13px] text-[var(--text-primary)]">
							<span className="text-[var(--accent)]">el</span> lunes
						</p>
						<p className="text-[10px] text-[var(--text-muted)] mt-1 tracking-wide">
							on Monday (singular)
						</p>
					</div>
					<div className="border border-[var(--border)] rounded-lg p-4">
						<p className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-label)] mb-2">
							every / recurring
						</p>
						<p className="text-[13px] text-[var(--text-primary)]">
							<span className="text-[var(--accent)]">los</span> lunes
						</p>
						<p className="text-[10px] text-[var(--text-muted)] mt-1 tracking-wide">
							on Mondays (plural)
						</p>
					</div>
				</div>
			</Card>

			{/* Days of the week */}
			<div className="mb-6">
				<h2 className="text-xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-4">
					Days of the week
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
					{/* Days list */}
					<Card>
						<div className="px-4 pt-5 pb-2">
							<Eyebrow>Los días de la semana</Eyebrow>
							{/* Mini week strip — tap to highlight */}
							<div className="mb-4">
								<WeekStrip today={todayIdx} />
								<p className="text-[10px] text-[#27272a] mt-2 tracking-wide">
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
								<div className="flex items-center gap-3">
									<span className="text-[10px] text-[#27272a] w-6">
										{i + 1}
									</span>
									<div>
										<span
											className={`text-[14px] font-semibold tracking-[-0.01em] transition-colors
                                            ${todayIdx === i ? "text-[var(--accent)]" : "text-[var(--text-primary)] group-hover:text-[var(--text-primary)]"}`}
										>
											{d.es}
										</span>
										{d.note && (
											<span className="text-[10px] text-[#27272a] ml-2 tracking-wide">
												{d.note}
											</span>
										)}
									</div>
								</div>
								<span className="text-[12px] text-[var(--text-muted)]">
									{d.en}
								</span>
							</div>
						))}
					</Card>

					{/* Days examples + flip cards */}
					<div className="flex flex-col gap-4">
						<Card>
							<div className="px-5 pt-5 pb-2">
								<Eyebrow>Examples</Eyebrow>
							</div>
							<div className="px-5 pb-4">
								{DAY_EXAMPLES.map((ex, i) => (
									<ExPair key={i} {...ex} />
								))}
								<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
									tap to reveal
								</p>
							</div>
						</Card>

						<Card className="p-5">
							<Eyebrow>Drill — flip cards</Eyebrow>
							<div className="grid grid-cols-2 gap-2">
								{DAYS.slice(0, 4).map((d) => (
									<FlipCard key={d.es} es={d.es} en={d.en} sub={d.abbr} />
								))}
							</div>
						</Card>
					</div>
				</div>
			</div>

			{/* Months */}
			<div className="mb-6">
				<h2 className="text-xl font-light tracking-[-0.03em] text-[var(--text-primary)] mb-4">
					Months of the year
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
					{/* Month grid selector */}
					<Card className="p-5">
						<Eyebrow>Los meses del año</Eyebrow>
						<MonthGrid active={activeMonth} onSelect={setActiveMonth} />

						{/* Selected month detail */}
						{selectedMonth ?
							<div
								className={`mt-4 border rounded-lg p-4 transition-all ${selectedSeason.border} ${selectedSeason.bg}`}
							>
								<div className="flex items-baseline gap-3 mb-1">
									<p
										className={`text-[20px] font-light tracking-[-0.02em] ${selectedSeason.color}`}
									>
										{selectedMonth.es}
									</p>
									<span className="text-[13px] text-[var(--text-muted)]">
										{selectedMonth.en}
									</span>
								</div>
								<p className="text-[10px] text-[var(--text-label)] tracking-wide">
									{selectedSeason.es} · {selectedMonth.season}
								</p>
							</div>
						:	<p className="text-[10px] text-[#27272a] mt-4 tracking-wide">
								tap a month to see details
							</p>
						}

						{/* Seasons legend */}
						<div className="mt-4 pt-4 border-t border-[var(--border)]">
							<p className="text-[10px] tracking-[0.14em] uppercase text-[#27272a] mb-2">
								seasons
							</p>
							<div className="grid grid-cols-2 gap-2">
								{Object.entries(SEASONS).map(([key, s]) => (
									<div key={key} className="flex items-center gap-2">
										<div
											className={`w-2 h-2 rounded-full ${s.color.replace("text-", "bg-")}`}
										/>
										<span className={`text-[11px] ${s.color}`}>{s.es}</span>
										<span className="text-[10px] text-[#27272a]">· {key}</span>
									</div>
								))}
							</div>
						</div>
					</Card>

					{/* Month examples + flip cards */}
					<div className="flex flex-col gap-4">
						<Card>
							<div className="px-5 pt-5 pb-2">
								<Eyebrow>Examples</Eyebrow>
							</div>
							<div className="px-5 pb-4">
								{MONTH_EXAMPLES.map((ex, i) => (
									<ExPair key={i} {...ex} />
								))}
								<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
									tap to reveal
								</p>
							</div>
						</Card>

						<Card className="p-5">
							<Eyebrow>Drill — flip cards</Eyebrow>
							<div className="grid grid-cols-3 gap-2">
								{MONTHS.slice(0, 6).map((m) => (
									<FlipCard key={m.es} es={m.es} en={m.en} />
								))}
							</div>
						</Card>
					</div>
				</div>
			</div>

			{/* Writing dates */}
			<Card className="mb-6 p-6">
				<Eyebrow>Writing dates</Eyebrow>
				<p className="text-[12px] text-[var(--text-muted)] leading-relaxed mb-4 tracking-wide max-w-lg">
					Spanish dates use:{" "}
					<span className="text-[var(--text-primary)]">
						el + number + de + month
					</span>
					. No ordinal numbers (1st, 2nd) — just the plain number.
				</p>
				<div className="border border-[#f59e0b]/30 bg-[var(--accent)]/5 rounded-lg p-4 mb-5">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-2">
						structure
					</p>
					<p className="text-[13px] text-[var(--text-secondary)]">
						el <span className="text-[var(--text-primary)]">[number]</span> de{" "}
						<span className="text-[var(--accent)]">[month]</span>
						<span className="text-[var(--text-muted)]"> (de [year])</span>
					</p>
				</div>
				<div>
					{DATE_EXAMPLES.map((ex, i) => (
						<ExPair key={i} {...ex} />
					))}
					<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
						tap to reveal
					</p>
				</div>
			</Card>

			{/* Vocab grid */}
			<Card className="p-6">
				<Eyebrow>Useful vocabulary</Eyebrow>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
					{VOCAB.map((v) => (
						<div
							key={v.es}
							className="border border-[var(--border)] rounded-lg p-3 hover:border-[#27272a] transition-colors"
						>
							<p className="text-[13px] text-[var(--accent)] font-semibold mb-1">
								{v.es}
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-wide">
								{v.en}
							</p>
						</div>
					))}
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
