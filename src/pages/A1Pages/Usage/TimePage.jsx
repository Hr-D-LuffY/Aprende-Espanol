import { useState, useEffect } from "react";
import {
	Eyebrow,
	Card,
	UsePill,
	PageWrapper,
	BackNav,
} from "../../../components/VerbComponents";
import BackNext from "../../../components/BackNext";

// ── Local reusable components ──

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

function RuleChip({ label, value, accent }) {
	return (
		<div
			className={`border rounded-lg px-4 py-3 flex flex-col gap-1
            ${accent ? "border-[#f59e0b]/30 bg-[var(--accent)]/5" : "border-[var(--border)] bg-[var(--bg)]"}`}
		>
			<span className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]">
				{label}
			</span>
			<span
				className={`text-[15px] font-semibold tracking-[-0.01em] ${accent ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`}
			>
				{value}
			</span>
		</div>
	);
}

// ── Analog Clock ──

function ClockFace({ hour, minute }) {
	const hourDeg = ((hour % 12) + minute / 60) * 30;
	const minDeg = minute * 6;
	const r = 80;
	const cx = 100,
		cy = 100;

	const handEnd = (deg, length) => {
		const rad = (deg - 90) * (Math.PI / 180);
		return { x: cx + Math.cos(rad) * length, y: cy + Math.sin(rad) * length };
	};
	const hEnd = handEnd(hourDeg, 45);
	const mEnd = handEnd(minDeg, 65);

	const ticks = Array.from({ length: 12 }, (_, i) => {
		const deg = i * 30;
		const rad = (deg - 90) * (Math.PI / 180);
		const outer = { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
		const inner = {
			x: cx + Math.cos(rad) * (r - 10),
			y: cy + Math.sin(rad) * (r - 10),
		};
		return { outer, inner, num: i === 0 ? 12 : i };
	});

	return (
		<svg viewBox="0 0 200 200" className="w-full max-w-[200px]">
			<circle
				cx={cx}
				cy={cy}
				r={r}
				fill="none"
				stroke="#1c1c1f"
				strokeWidth="1"
			/>
			<circle cx={cx} cy={cy} r={r - 1} fill="#09090b" />
			{ticks.map((t, i) => (
				<g key={i}>
					<line
						x1={t.inner.x}
						y1={t.inner.y}
						x2={t.outer.x}
						y2={t.outer.y}
						stroke="#27272a"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<text
						x={cx + Math.cos(((i * 30 - 90) * Math.PI) / 180) * (r - 22)}
						y={cy + Math.sin(((i * 30 - 90) * Math.PI) / 180) * (r - 22) + 4}
						textAnchor="middle"
						fontSize="9"
						fill="#3f3f46"
						fontFamily="monospace"
					>
						{t.num}
					</text>
				</g>
			))}
			{/* Hour hand */}
			<line
				x1={cx}
				y1={cy}
				x2={hEnd.x}
				y2={hEnd.y}
				stroke="#a1a1aa"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			{/* Minute hand */}
			<line
				x1={cx}
				y1={cy}
				x2={mEnd.x}
				y2={mEnd.y}
				stroke="#f59e0b"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle cx={cx} cy={cy} r="4" fill="#f59e0b" />
		</svg>
	);
}

// ── Interactive Time Builder ──

const HOUR_NAMES = [
	"",
	"una",
	"dos",
	"tres",
	"cuatro",
	"cinco",
	"seis",
	"siete",
	"ocho",
	"nueve",
	"diez",
	"once",
	"doce",
];
const MIN_NAMES = {
	0: "",
	5: "cinco",
	10: "diez",
	15: "cuarto",
	20: "veinte",
	25: "veinticinco",
	30: "media",
	35: "veinticinco",
	40: "veinte",
	45: "cuarto",
	50: "diez",
	55: "cinco",
};
const PERIODS = [
	{ label: "de la mañana", range: "12 AM–12 PM", en: "morning" },
	{ label: "de la tarde", range: "12 PM–9 PM", en: "afternoon" },
	{ label: "de la noche", range: "9 PM–12 AM", en: "night" },
];

function buildSpanish(h, m) {
	const prefix = h === 1 ? "Es la" : "Son las";
	const hourName = HOUR_NAMES[h];

	if (m === 0) return `${prefix} ${hourName}.`;
	if (m === 15) return `${prefix} ${hourName} y cuarto.`;
	if (m === 30) return `${prefix} ${hourName} y media.`;
	if (m === 45) {
		const nextH = h === 12 ? 1 : h + 1;
		return `Son las ${HOUR_NAMES[nextH]} menos cuarto.`;
	}
	if (m < 30) {
		return `${prefix} ${hourName} y ${MIN_NAMES[m] || m}.`;
	}
	// > 30 → menos
	const nextH = h === 12 ? 1 : h + 1;
	const remaining = 60 - m;
	return `Son las ${HOUR_NAMES[nextH]} menos ${MIN_NAMES[remaining] || remaining}.`;
}

function InteractiveClock() {
	const [hour, setHour] = useState(3);
	const [minute, setMinute] = useState(0);
	const [period, setPeriod] = useState(0);

	const spanish = buildSpanish(hour, minute);
	const displayMin = String(minute).padStart(2, "0");

	return (
		<Card className="p-6">
			<Eyebrow>Interactive — build any time</Eyebrow>
			<div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-center">
				<div className="flex justify-center">
					<ClockFace hour={hour} minute={minute} />
				</div>
				<div>
					{/* Digital display */}
					<div className="border border-[var(--border)] rounded-lg px-5 py-4 mb-5 bg-[var(--bg)]">
						<p className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)] mb-1">
							{PERIODS[period].label}
						</p>
						<p className="text-3xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
							{String(hour).padStart(2, "0")}:{displayMin}
						</p>
						<p className="text-[13px] text-[var(--accent)] mt-2 tracking-[-0.01em]">
							{spanish}
						</p>
					</div>

					{/* Hour slider */}
					<div className="mb-4">
						<div className="flex justify-between mb-1.5">
							<span className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]">
								Hour
							</span>
							<span className="text-[11px] text-[var(--text-muted)]">
								{HOUR_NAMES[hour]}
							</span>
						</div>
						<input
							type="range"
							min="1"
							max="12"
							value={hour}
							onChange={(e) => setHour(Number(e.target.value))}
							className="w-full accent-[#f59e0b] cursor-pointer"
						/>
					</div>

					{/* Minute slider — snaps to 5 */}
					<div className="mb-4">
						<div className="flex justify-between mb-1.5">
							<span className="text-[10px] tracking-[0.14em] uppercase text-[var(--text-label)]">
								Minute
							</span>
							<span className="text-[11px] text-[var(--text-muted)]">
								:{displayMin}
							</span>
						</div>
						<input
							type="range"
							min="0"
							max="55"
							step="5"
							value={minute}
							onChange={(e) => setMinute(Number(e.target.value))}
							className="w-full accent-[#f59e0b] cursor-pointer"
						/>
					</div>

					{/* Period toggle */}
					<div className="flex gap-2 flex-wrap">
						{PERIODS.map((p, i) => (
							<button
								key={i}
								onClick={() => setPeriod(i)}
								className={`text-[10px] px-3 py-1.5 rounded-full border tracking-wide transition-all cursor-pointer
                                    ${
																			period === i ?
																				"bg-[var(--accent)] text-[var(--accent-text)] border-[#f59e0b] font-semibold"
																			:	"text-[var(--text-muted)] border-[#27272a] hover:border-[#3f3f46]"
																		}`}
							>
								{p.en}
							</button>
						))}
					</div>
				</div>
			</div>
		</Card>
	);
}

// ── Data ──

const STRUCTURE_EXAMPLES = [
	{ es: "Es la una.", en: "It's 1:00." },
	{ es: "Son las dos.", en: "It's 2:00." },
	{ es: "Son las cinco.", en: "It's 5:00." },
	{ es: "Son las doce.", en: "It's 12:00." },
];

const MINUTES_EXAMPLES = [
	{ es: "Son las tres y diez.", en: "It's 3:10." },
	{ es: "Son las cuatro y veinte.", en: "It's 4:20." },
	{ es: "Es la una y cuarto.", en: "It's 1:15." },
	{ es: "Son las dos y cuarto.", en: "It's 2:15." },
	{ es: "Son las tres y media.", en: "It's 3:30." },
];

const MENOS_EXAMPLES = [
	{ es: "Son las seis menos diez.", en: "It's 5:50." },
	{ es: "Son las ocho menos veinte.", en: "It's 7:40." },
	{ es: "Son las cuatro menos cuarto.", en: "It's 3:45." },
];

const AMPM_EXAMPLES = [
	{ es: "Es la una de la mañana.", en: "It's 1:00 AM." },
	{ es: "Son las ocho de la noche.", en: "It's 8:00 PM." },
	{ es: "Son las nueve y veinte de la noche.", en: "It's 9:20 PM." },
	{ es: "Son las once menos catorce de la noche.", en: "It's 10:46 PM." },
];

const ASKING_EXAMPLES = [
	{ es: "¿Qué hora es?", en: "What time is it?" },
	{ es: "Son las cuatro.", en: "It is 4:00." },
	{ es: "¿A qué hora tú bailas?", en: "What time do you dance?" },
	{ es: "Bailo a las diez de la noche.", en: "I dance at 10 PM." },
];

const VOCAB = [
	{ word: "la hora", meaning: "the hour / time" },
	{ word: "el minuto", meaning: "the minute" },
	{ word: "media", meaning: "half (:30)" },
	{ word: "cuarto", meaning: "quarter (:15 / :45)" },
	{ word: "menos", meaning: "minus (for >:30)" },
	{ word: "punto", meaning: "exact / on the dot" },
	{ word: "mañana", meaning: "morning" },
	{ word: "a", meaning: "at (a las 3 = at 3)" },
];

// ── Page ──

export default function TimePage() {
	return (
		<PageWrapper>
			<BackNav to="/" label="← grammar" />

			{/* Header */}
			<div className="mb-12">
				<Eyebrow>Grammar · Time · La hora</Eyebrow>
				<div className="flex items-baseline gap-4 mb-3">
					<h1 className="text-6xl font-light tracking-[-0.04em] text-[var(--text-primary)]">
						la hora
					</h1>
					<span className="text-[16px] text-[var(--text-muted)] font-light">
						telling time
					</span>
				</div>
				<div className="flex flex-wrap gap-2 mt-4">
					{["es la", "son las", "y", "menos", "media", "cuarto"].map((u) => (
						<UsePill key={u}>{u}</UsePill>
					))}
				</div>
			</div>

			{/* Core rule */}
			<Card className="mb-6 p-6">
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
						<p className="text-[20px] font-light text-[var(--accent)] tracking-[-0.02em]">
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
						<p className="text-[20px] font-light text-[var(--text-secondary)] tracking-[-0.02em]">
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

			{/* Interactive clock */}
			<div className="mb-6">
				<InteractiveClock />
			</div>

			{/* Minutes + Menos */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
				{/* Y — adding minutes */}
				<Card>
					<div className="px-5 pt-5 pb-2">
						<Eyebrow>Adding minutes — y</Eyebrow>
						<div className="flex flex-wrap gap-2 mb-4">
							<RuleChip label="formula" value="hour + y + minutes" />
						</div>
						<div className="grid grid-cols-2 gap-2 mb-4">
							<RuleChip label=":15" value="y cuarto" accent />
							<RuleChip label=":30" value="y media" accent />
						</div>
					</div>
					<div className="px-5 pb-4">
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
					<div className="px-5 pt-5 pb-2">
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
					<div className="px-5 pb-4">
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
				<div className="px-5 pt-5 pb-2">
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
				<div className="px-5 pb-4">
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
				<div className="px-5 pt-5 pb-3">
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
						<div className="flex gap-6">
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
				<div className="px-5 pb-4">
					{ASKING_EXAMPLES.map((ex, i) => (
						<ExPair key={i} {...ex} />
					))}
					<p className="text-[10px] text-[#27272a] mt-3 tracking-wide">
						tap to reveal
					</p>
				</div>
			</Card>

			{/* Vocab */}
			<Card className="mb-6 p-6">
				<Eyebrow>Vocabulary</Eyebrow>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
					{VOCAB.map((v) => (
						<div
							key={v.word}
							className="border border-[var(--border)] rounded-lg p-3 hover:border-[#27272a] transition-colors"
						>
							<p className="text-[13px] text-[var(--accent)] font-semibold mb-1">
								{v.word}
							</p>
							<p className="text-[10px] text-[var(--text-label)] tracking-wide">
								{v.meaning}
							</p>
						</div>
					))}
				</div>
			</Card>

			{/* Remember strip */}
			<Card className="p-5">
				<Eyebrow>Remember</Eyebrow>
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
