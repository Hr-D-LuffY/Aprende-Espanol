import { useState } from "react";

// ── Primitives ─────────────────────────────────────────────────────────────

function Eyebrow({ children }) {
	return (
		<p className="text-[10px] tracking-[0.18em] uppercase text-[#3f3f46] mb-5">
			{children}
		</p>
	);
}

function Tag({ children }) {
	return (
		<span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#f59e0b] border border-[#f59e0b]/30 bg-[#f59e0b]/5 px-2.5 py-0.5 rounded-full">
			{children}
		</span>
	);
}

function ExampleRow({ es, pronunciation, en }) {
	return (
		<div className="grid grid-cols-[1fr_auto] gap-4 items-start py-3 border-b border-[#1c1c1f] last:border-b-0">
			<div>
				<p className="text-[14px] text-[#a1a1aa]">{es}</p>
				{pronunciation && (
					<p className="text-[11px] text-[#3f3f46] mt-0.5 italic">
						{pronunciation}
					</p>
				)}
			</div>
			<p className="text-[12px] text-[#52525b] text-right">{en}</p>
		</div>
	);
}

function RuleBlock({ number, title, subtitle, badge, children }) {
	const [open, setOpen] = useState(true);

	return (
		<div className="border border-[#1c1c1f] rounded-2xl overflow-hidden">
			<button
				onClick={() => setOpen((o) => !o)}
				className="w-full flex items-center justify-between px-6 py-5 hover:bg-[#111113] transition-colors duration-150 cursor-pointer text-left"
			>
				<div className="flex items-center gap-4">
					<span className="text-[11px] font-semibold tracking-[0.14em] text-[#3f3f46]">
						{String(number).padStart(2, "0")}
					</span>
					<div>
						<p className="text-[14px] text-[#a1a1aa]">{title}</p>
						{subtitle && (
							<p className="text-[11px] text-[#3f3f46] mt-0.5">{subtitle}</p>
						)}
					</div>
				</div>
				<div className="flex items-center gap-3">
					{badge && <Tag>{badge}</Tag>}
					<span
						className="text-[#3f3f46] text-sm transition-transform duration-200"
						style={{ transform: open ? "rotate(90deg)" : "none" }}
					>
						→
					</span>
				</div>
			</button>
			{open && (
				<div className="px-6 pb-6 border-t border-[#1c1c1f] bg-[#111113]">
					<div className="pt-5">{children}</div>
				</div>
			)}
		</div>
	);
}

function GenderGrid({ rows }) {
	return (
		<div className="grid grid-cols-2 gap-3">
			{rows.map((r, i) => (
				<div
					key={i}
					className="border border-[#1c1c1f] rounded-xl p-4 bg-[#09090b]"
				>
					<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-2">
						{r.label}
					</p>
					<p className="text-[15px] text-[#f59e0b]">{r.es}</p>
					<p className="text-[11px] text-[#52525b] mt-1">{r.en}</p>
				</div>
			))}
		</div>
	);
}

// ── Content ────────────────────────────────────────────────────────────────

const GENDER_PAIRS = [
	{ label: "Masculine", es: "chico bueno", en: "good boy" },
	{ label: "Feminine", es: "chica buena", en: "good girl" },
	{ label: "M. Plural", es: "chicos buenos", en: "good boys" },
	{ label: "F. Plural", es: "chicas buenas", en: "good girls" },
];

const PLURAL_EXAMPLES = [
	{
		es: "pollos grandes",
		pronunciation: "(po-yos gran-des)",
		en: "big chickens",
	},
	{
		es: "casas blancas",
		pronunciation: "(kah-sas blan-kas)",
		en: "white houses",
	},
	{
		es: "libros viejos",
		pronunciation: "(lee-bros byeh-hos)",
		en: "old books",
	},
];

const INVARIABLE_WORDS = [
	"grande",
	"verde",
	"feliz",
	"inteligente",
	"fácil",
	"joven",
];

const INVARIABLE_EXAMPLES = [
	{ es: "chica grande", pronunciation: "(chee-ka gran-deh)", en: "big girl" },
	{ es: "chico grande", pronunciation: "(chee-ko gran-deh)", en: "big boy" },
	{ es: "El hombre bueno", pronunciation: null, en: "The good man" },
	{ es: "Los chicos malos", pronunciation: null, en: "The bad boys" },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function AdjectiveAgreementPage() {
	return (
		<div className="min-h-screen bg-[#09090b] text-[#fafafa] font-mono">
			<div className="max-w-3xl mx-auto px-8 pt-24 pb-20">
				{/* Header */}
				<Eyebrow>Grammar · A1</Eyebrow>
				<h1 className="text-5xl font-light tracking-[-0.04em] text-[#fafafa] mb-3">
					Adjective
				</h1>
				<p className="text-[13px] text-[#52525b] leading-relaxed mb-10 max-w-lg">
					Unlike English, Spanish adjectives must match the gender and number of
					the noun they describe. Three rules cover almost every case.
				</p>

				{/* Structure formula */}
				<div className="mb-12">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-3">
						Structure
					</p>
					<div className="flex items-center gap-2 border border-[#1c1c1f] rounded-xl px-5 py-3 bg-[#111113] w-fit">
						<span className="text-[13px] text-[#f59e0b] font-semibold tracking-wide">
							NOUN
						</span>
						<span className="text-[#f59e0b] text-[11px]">+</span>
						<span className="text-[13px] text-[#f59e0b] font-semibold tracking-wide">
							ADJECTIVE
						</span>
					</div>
					<p className="text-[11px] text-[#f59e0b]/50 mt-3">
						Adjective always follows the noun · must match gender + number
					</p>
				</div>

				{/* Rules */}
				<div className="flex flex-col gap-3">
					{/* Rule 1 */}
					<RuleBlock
						number={1}
						title="Gender change"
						subtitle="-O for masculine · -A for feminine"
						badge="-O / -A"
					>
						<GenderGrid rows={GENDER_PAIRS} />
						<div className="mt-4 border-l-2 border-[#f59e0b]/40 pl-4">
							<p className="text-[11px] text-[#52525b] leading-relaxed">
								Adjectives ending in <span className="text-[#a1a1aa]">-o</span>{" "}
								change to <span className="text-[#a1a1aa]">-a</span> for
								feminine nouns. The plural simply adds{" "}
								<span className="text-[#a1a1aa]">-s</span>.
							</p>
						</div>
					</RuleBlock>

					{/* Rule 2 */}
					<RuleBlock
						number={2}
						title="Plural agreement"
						subtitle="Adjective plural mirrors noun plural"
						badge="+ S / + ES"
					>
						<div className="border border-[#1c1c1f] rounded-xl px-5 bg-[#09090b]">
							{PLURAL_EXAMPLES.map((ex, i) => (
								<ExampleRow key={i} {...ex} />
							))}
						</div>
					</RuleBlock>

					{/* Rule 3 */}
					<RuleBlock
						number={3}
						title="Invariable adjectives"
						subtitle="Ends in -E or consonant → no gender change"
						badge="no change"
					>
						{/* Word chips */}
						<div className="flex flex-wrap gap-2 mb-5">
							{INVARIABLE_WORDS.map((w) => (
								<span
									key={w}
									className="text-[12px] text-[#a1a1aa] border border-[#27272a] px-3 py-1 rounded-full"
								>
									{w}
								</span>
							))}
						</div>
						<div className="border border-[#1c1c1f] rounded-xl px-5 bg-[#09090b]">
							{INVARIABLE_EXAMPLES.map((ex, i) => (
								<ExampleRow key={i} {...ex} />
							))}
						</div>
						<p className="text-[11px] text-[#52525b] mt-4 leading-relaxed border-l-2 border-[#f59e0b]/40 pl-4">
							These adjectives only change for plural (add -s or -es), never for
							gender.
						</p>
					</RuleBlock>
				</div>

				{/* Quick summary table */}
				<div className="mt-12">
					<p className="text-[10px] tracking-[0.14em] uppercase text-[#3f3f46] mb-4">
						Quick reference
					</p>
					<div className="border border-[#1c1c1f] rounded-xl overflow-hidden">
						<div className="grid grid-cols-4 border-b border-[#1c1c1f] bg-[#111113]">
							{["", "M. Singular", "F. Singular", "Plural"].map((h) => (
								<div
									key={h}
									className="px-4 py-3 text-[10px] tracking-[0.12em] uppercase text-[#3f3f46]"
								>
									{h}
								</div>
							))}
						</div>
						{[
							{
								type: "Ends -O",
								ms: "bueno",
								fs: "buena",
								pl: "buenos / buenas",
							},
							{ type: "Ends -E", ms: "grande", fs: "grande", pl: "grandes" },
							{ type: "Consonant", ms: "feliz", fs: "feliz", pl: "felices" },
						].map((row) => (
							<div
								key={row.type}
								className="grid grid-cols-4 border-b border-[#1c1c1f] last:border-b-0 hover:bg-[#111113] transition-colors duration-150"
							>
								<div className="px-4 py-3 text-[11px] text-[#52525b]">
									{row.type}
								</div>
								<div className="px-4 py-3 text-[13px] text-[#f59e0b]">
									{row.ms}
								</div>
								<div className="px-4 py-3 text-[13px] text-[#f59e0b]">
									{row.fs}
								</div>
								<div className="px-4 py-3 text-[12px] text-[#a1a1aa]">
									{row.pl}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
